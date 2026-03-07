import { Request, Response} from 'express';
import Thumbnail from '../models/Thumbnail.js';
import { GenerateContentConfig, HarmBlockThreshold, HarmCategory } from '@google/genai';
import ai from '../configs/ai.js';
import path from 'path';
import fs from 'fs';
import {v2 as cloudinary} from 'cloudinary';

const stylePrompts = {
 'Bold & Graphic': 'Göz alıcı thumbnail, cesur tipografi, canlı renkler, etkileyici yüz ifadeleri, dramatik aydınlatma, yüksek kontrast, tıklamaya değer kompozisyon, profesyonel stil',

 'Tech/Futuristic': 'fütüristik thumbnail, şık modern tasarım, dijital UI öğeleri, parlayan vurgular, holografik efektler, siber-teknoloji estetiği, keskin ışıklandırma, yüksek teknoloji atmosferi',

 'Minimalist': 'minimalist thumbnail, temiz düzen, basit şekiller, sınırlı renk paleti, bol negatif alan, modern düz tasarım, net odak noktası',

 'Photorealistic': 'fotogerçekçi thumbnail, ultra gerçekçi ışıklandırma, doğal ten tonları, doğal an yakalama, DSLR tarzı fotoğrafçılık, yaşam tarzı gerçekçiliği, sığ alan derinliği',

 'Illustrated': 'illüstrasyon tarzı thumbnail, özel dijital illüstrasyon, stilize karakterler, kalın konturlar, canlı renkler, yaratıcı çizgi film veya vektör sanat stili',
 
}

const clorSchemeDescriptions = {
 vibrant: 'canlı ve enerjik renkler, yüksek doygunluk, güçlü kontrastlar, dikkat çekici renk paleti',
 sunset: 'sıcak gün batımı tonları, turuncu pembe ve mor tonları, yumuşak geçişler, sinematik parıltı',
 forest: 'doğal yeşil tonları, toprak renkleri, sakin ve organik palet, ferah atmosfer',
 neon: 'neon parıltı efektleri, elektrik mavisi ve pembe tonları, cyberpunk ışıklandırma, yüksek kontrastlı parıltı',
 purple: 'mor ağırlıklı renk paleti, magenta ve menekşe tonları, modern ve şık atmosfer',
 monochrome: 'siyah ve beyaz renk düzeni, yüksek kontrast, dramatik ışıklandırma, zamansız estetik',
 ocean: 'serin mavi ve turkuaz tonları, su temalı renk paleti, ferah ve temiz atmosfer',
 pastel: 'yumuşak pastel renkler, düşük doygunluk, nazik tonlar, sakin ve dostane estetik', 
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

  const model = 'gemini-3-pro-image-preview';

  const generationConfig: GenerateContentConfig = {

   maxOutputTokens: 32768,
   temperature:1,
   topP: 0.95,
   responseModalities: ['IMAGE'],
   imageConfig: {
    aspectRatio: aspect_ratio || '16:9',
    imageSize: '1K'
   },
   safetySettings: [
    {category: HarmCategory.HARM_CATEGORY_HATE_SPEECH, threshold: HarmBlockThreshold.OFF},
    {category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT, threshold: HarmBlockThreshold.OFF},
    {category: HarmCategory. HARM_CATEGORY_SEXUALLY_EXPLICIT, threshold: HarmBlockThreshold.OFF},
    {category: HarmCategory.HARM_CATEGORY_HARASSMENT, threshold: HarmBlockThreshold.OFF},
   ]

  }

  let prompt = `Create a ${stylePrompts[style as keyof typeof stylePrompts]} for: "${title}"`;

  if (color_scheme) {
   prompt += `Use a ${clorSchemeDescriptions[color_scheme as  keyof typeof clorSchemeDescriptions]} color scheme.`
  }

  if (user_prompt) {
   prompt += `Ek ayrıntılar: ${user_prompt}.`
  }

  prompt += `Thumbnail şu şekilde olmalıdır ${aspect_ratio}, görsel olarak etkileyici ve tıklama oranını maksimize edecek şekilde tasarlanmış. Kalın, profesyonel ve görmezden gelinmesi imkansız olsun.`

  // Yapay zeka modelini kullanarak görüntüyü oluşturun.
  const response: any = await ai.models.generateContent({
   model,
   contents: [prompt],
   config: generationConfig,
  })

  if (!response?.candidates?.[0]?.content?.parts) {
   
   throw new Error('Beklenmeyen yanıt')

  }

  const parts = response.candidates[0].content.parts;

  let finalBuffer: Buffer | null = null;
  
  for(const part of parts){
   if (part.inlineData) {
    finalBuffer = Buffer.from(part.inlineData.data, 'base64')
   }
  }

  const filename = `final-output-${Date.now()}.png`;
  const filePath = path.join('images', filename);

  // Resimler dizini yoksa oluşturun.
  fs.mkdirSync('images', {recursive: true})

  // Son görüntüyü dosyaya yazın.
  fs.writeFileSync(filePath, finalBuffer!);

  const uploadResult = await cloudinary.uploader.upload(filePath, {resource_type: 'image'})

   thumbnail.image_url = uploadResult.url;
   thumbnail.isGenerating = false;
   await thumbnail.save()

   res.json({message: 'Thumbnail Oluşturuldu', thumbnail})

   // Görsel silme
   fs.unlinkSync(filePath)

 

 } catch (error: any) {
  console.log(error);
  res.status(500).json({message: error.message});
  
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