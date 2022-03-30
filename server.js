const express= require('express')
var route=require('./router/route');
const mongoose = require('mongoose')
const app=express();
app.use(express.json())

// crud operations
app.use('/route',route);
htts://localhost:3000/getdataall

const url="mongodb+srv://prasanth:Prasanth123@cluster0.ultsm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(url,{useNewUrlParser:true})

const con=mongoose.connection
con.on('error',(error)=>console.log(error))
con.once('open',()=>console.log('connected to database'))

//middleware

// app.use('/router', route)


app.listen(5000,()=>console.log('server Started'))