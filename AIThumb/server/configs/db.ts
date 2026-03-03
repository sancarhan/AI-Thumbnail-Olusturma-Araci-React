import mongoose from 'mongoose';

const connectDB = async ()=>{
 try {
  mongoose.connection.on('Bağlandı', ()=>console.log('MongoDB Bağlandı'))
  await mongoose.connect(process.env.MONGODB_URI as string)
 } catch (error) {
  console.error('MongoDB bağlanlantısında Hata!!!', error);
  
 }
}

export default connectDB;