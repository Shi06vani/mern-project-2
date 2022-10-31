const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/demodata", { useNewUrlParser: true })
    .then(() => {
        console.log("database  connected..")

    })
    .catch(err => {
        console.log(err)
    })


const userschema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    phone: String
})

const User = new mongoose.model("info", userschema)


app.get('/data',(req,res)=>{
  User.find((err,data)=>{
     if(err){
        return res.send(err)
     }
     else{
        res.json(data)
     }
  })
})

app.post("/register", (req, res) => {

    const { name, email, password, phone } = req.body


    const data = new User({
        name, email, password, phone
    })

    data.save((err) => {
        if (err) {
            res.send(err)
        }
        else {
              res.send({
                message:"data succesfull save"
              })
        }
    })
})





app.listen(9002, () => {
    console.log("server is running")
})