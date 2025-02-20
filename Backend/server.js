import express from 'express';
import cors from 'cors';
const PORT = 5000;

const app = express();
app.use(cors())
let result =  [{
   id:1,
   name:"Chaouki",
   email:"kessourichaouki@gmail.com",
   subject:"Web dev",
   content:"hello, i'm very intersed, i want to do this and this hello, i'm very intersed, i want to do this and thishello, i'm very intersed, i want to do this and thishello, i'm very intersed, i want to do this and thishello, i'm very intersed, i want to do this and thishello, i'm very intersed, i want to do this and thishello, i'm very intersed, i want to do this and this"
         }, {
      id: 1,
      name: "Chaouki",
      email: "kessourichaouki@gmail.com",
      subject: "Web dev",
      content: "hello, i'm very intersed, i want to do this and this"
            }, {
      id: 1,
      name: "Chaouki",
      email: "kessourichaouki@gmail.com",
      subject: "Web dev",
      content: "hello, i'm very intersed, i want to do this and this"
            }, {
      id: 1,
      name: "Chaouki",
      email: "kessourichaouki@gmail.com",
      subject: "Web dev",
      content: "hello, i'm very intersed, i want to do this and this"
            }, {
      id:1,
      name:"Chaouki",
      email:"kessourichaouki@gmail.com",
      subject:"Web dev",
      content:"hello, i'm very intersed, i want to do this and this"
         }]
app.get('/displayAll',(req,res)=>{
   try {
      console.log('all messages are displayed')
      res.status(200).json({
         success: true,
         message: "all emails are retrieved",
         result:result
      })
   } catch (error) {
      console.log(error)
      res.status(500).json({
         success: false,
         message: "Server error"
      })
   }
})

app.listen(PORT, (req,res)=>{
   console.log("you are on the server")
})