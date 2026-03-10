import { Request, Response} from 'express';
import Thumbnail from '../models/Thumbnail.js';
import openai from '../configs/openai.js';
import path from 'path';
import fs from 'fs';
import {v2 as cloudinary} from 'cloudinary';

const stylePrompts: Record<string, string> = {
 'Bold & Graphic': 'Eye-catching thumbnail, bold typography, vibrant colors, impactful facial expressions, dramatic lighting, high contrast, click-worthy composition, professional style',

 'Tech/Futuristic': 'Futuristic thumbnail, sleek modern design, digital UI elements, glowing highlights, holographic effects, cyber-tech aesthetics, sharp lighting, high-tech atmosphere',

 'Minimalist': 'Minimalist thumbnail, clean layout, simple shapes, limited color palette, ample negative space, modern flat design, clear focal point',

 'Photorealistic': 'Photorealistic thumbnail, ultra-realistic lighting, natural skin tones, candid moment, DSLR-style photography, lifestyle realism, shallow depth of field',

 'Illustrated': 'Illustrated thumbnail style, custom digital illustration, stylized characters, bold outlines, vibrant colors, creative cartoon or vector art style',
 
}

const colorSchemeDescriptions: Record<string, string> = {
 vibrant: 'vibrant and energetic colors, high saturation, strong contrast, eye-catching color palette',
 sunset: 'warm sunset tones, orange pink and purple hues, soft transitions, cinematic glow',
 forest: 'natural green tones, earth colors, calm and organic palette, fresh atmosphere',
 neon: 'neon glow effects, electric blue and pink tones, cyberpunk lighting, high contrast glow',
 purple: 'purple-dominant color palette, magenta and violet tones, modern and stylish atmosphere',
 monochrome: 'black and white color scheme, high contrast, dramatic lighting, timeless aesthetic',
 ocean: 'cool blue and turquoise tones, water-themed color palette, fresh and clean atmosphere',
 pastel: 'soft pastel colors, low saturation, gentle tones, calm and friendly aesthetic', 
}

export const generateThumbnail = async (req: Request, res: Response)=>{
 try {
  
  const {userId} = req.session;
  const {
   title,
   prompt: user_prompt,
   style,
   aspect_ratio,
   color_scheme,
   text_overlay,
  } = req.body;

  const thumbnail = await Thumbnail.create({
   userId,
   title,
   prompt_used: user_prompt,
   user_prompt,
   aspect_ratio,
   color_scheme,
   text_overlay,
   isGenerating: true
  })

  // Build the prompt for DALL-E
  let prompt = `${stylePrompts[style as string] || style} for: "${title}"`;

  if (color_scheme) {
   prompt += `. Use a ${colorSchemeDescriptions[color_scheme as string]} color scheme.`
  }

  if (user_prompt) {
   prompt += `. Additional details: ${user_prompt}.`
  }

  prompt += ` The thumbnail should be ${aspect_ratio || '16:9'} aspect ratio, visually striking and designed to maximize click-through rate. Make it bold, professional and impossible to ignore.`

  // Add text overlay if requested
  if (text_overlay) {
    prompt += ` Include bold, readable text: "${title}"`;
  }

  console.log('Generating thumbnail with DALL-E, prompt:', prompt);

  // Use DALL-E 3 for image generation
  const response = await openai.images.generate({
    model: "dall-e-3",
    prompt: prompt,
    size: "1792x1024", // 16:9 aspect ratio
    quality: "standard",
    n: 1,
  })

  console.log('DALL-E Response:', JSON.stringify(response, null, 2));

  if (!response.data || !response.data[0]?.url) {
   throw new Error('Invalid response from DALL-E - no image URL found')
  }

  const imageUrl = response.data[0].url;

  // Download the image from DALL-E
  const imageResponse = await fetch(imageUrl);
  const imageBuffer = Buffer.from(await imageResponse.arrayBuffer());

  const filename = `final-output-${Date.now()}.png`;
  const filePath = path.join('images', filename);

  // Create images directory if it doesn't exist
  fs.mkdirSync('images', {recursive: true})

  // Write the image to file
  fs.writeFileSync(filePath, imageBuffer);

  const uploadResult = await cloudinary.uploader.upload(filePath, {resource_type: 'image'})

   thumbnail.image_url = uploadResult.url;
   thumbnail.isGenerating = false;
   await thumbnail.save()

   res.json({message: 'Thumbnail Oluşturuldu', thumbnail})

   // Delete the local file
   fs.unlinkSync(filePath)

 

 } catch (error: any) {
  console.error('Error generating thumbnail:', error);
  res.status(500).json({message: error.message || 'Sunucu hatası oluştu'});
  
 }
}

// Thumbnail silme kontrolleri
export const deleteThumbnail = async (req: Request, res: Response)=>{

 try {

  const {id} = req.params;
  const {userId} = req.session;

  await Thumbnail.findByIdAndDelete({_id: id, userId})

  res.json({message: 'Thumbnail başarılı bir şekilde silindi'});


 } catch (error: any) {
  console.log(error);
  res.status(500).json({message: error.message});
 }

}

