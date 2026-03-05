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

