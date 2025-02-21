import express from 'express';
import cors from 'cors';
const PORT = 5000;
import mongoose from 'mongoose';
import 'dotenv/config'
const app = express();
app.use(cors())
const mongoDBURI = process.env.DB_URI

mongoose.connect(mongoDBURI,{}).then(()=>console.log('connected')).catch(err=>console.log(err))
const MessageSchema = new mongoose.Schema({
   id:String,
   email:String,
   name:String,
   message:String,
   sujet:String,
   createdAt:Date,
   updatedAt:Date
});

const Message = mongoose.model('Message',MessageSchema);


app.get('/displayAll',async (req,res)=>{
   try {
      console.log('all messages are displayed');
      const messages = await Message.find({});
      console.log(messages);
      res.status(200).json({
         success: true,
         message: "all emails are retrieved",
         result:messages
      })
   } catch (error) {
      console.log(error)
      res.status(500).json({
         success: false,
         message: "Server error"
      })
   }finally{
      await mongoose.connection.close();
   }
})

app.listen(PORT, (req,res)=>{
   console.log("you are on the server")
})