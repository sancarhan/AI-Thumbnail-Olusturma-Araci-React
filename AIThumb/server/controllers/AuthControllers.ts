import {Request, Response} from 'express'
import User from '../models/User.js';
import bcrypt from 'bcrypt';
// Kullanıcı kaydı için kontrolörler
export const registerUser = async (req: Request, res: Response)=>{
 try {
  const {name, email, password} = req.body;

  // Kullanıcıyı e-postayla bul
  const user = await User.findOne({email});
  if (user) {
   return res.status(400).json({message: 'Kullanıcı zaten mevcut'})
  }

  // Şifreyi şifrele
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

  const newUser = new User({name, email, password: hashedPassword})

  await newUser.save()

  // Oturumda kullanıcı verilerini ayarlama
  req.session.isLoggedIn = true;
  req.session.userId = newUser._id;

  return res.json({
   message: 'Hesap başarıyla oluşturuldu',
   user: {
    _id: newUser._id,
    name: newUser.name,
    email: newUser.email,
   }
  })

 } catch (error: any) {
  console.log(error);
  res.status(500).json({message: error.message})
  
 }
}

// Kullanıcı girişi için kontroller
export const loginUser = async (req: Request, res: Response)=>{
 try {
  const { email, password} = req.body;

  // Kullanıcıyı e-postayla bul
  const user = await User.findOne({email});
  if (!user) {
   return res.status(400).json({message: 'Şifre veya email hatalı'})
  }

  const isPasswordCorrect = await bcrypt.compare(password, user.password)
  if (!isPasswordCorrect) {
   return res.status(400).json({message: 'Şifre veya email hatalı'})
  }

  // Oturumda kullanıcı verilerini ayarlama
  req.session.isLoggedIn = true;
  req.session.userId = user._id;

  return res.json({
   message: 'Giriş başarılı',
   user: {
    _id: user._id,
    name: user.name,
    email: user.email,
   }
  })
 } catch (error: any) {
  console.log(error);
  res.status(500).json({message: error.message})
 }
}

// Kullanıcı için çıkış kontrolleri
export const logoutUser = async (req: Request, res: Response)=>{
 req.session.destroy((error: any)=>{
  if (error) {
   console.log(error)
   return res.status(500).json({message: error.message})
  }
 })
 return res.json({message: 'Çıkış Yapıldı'})
}

// Kullanıcı doğrulaması için kontroller
export const verifyUser = async (req: Request, res: Response)=>{
 try {
  const {userId} = req.session;

  const user = await User.findById(userId).select('-password')

  if (!user) {
   return res.status(400).json({message: 'Geçersiz kullanıcı'});
  }

  return res.json({user});

  
 } catch (error: any) {
  console.log(error);
  res.status(500).json({message: error.message})
 }
}