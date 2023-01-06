let express = require('express');
let app = express();
const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;
const mongoUrl = "mongodb+srv://chhutimistry:testChhuti@cluster0.qmuiy.mongodb.net/Crud?retryWrites=true&w=majority"
const dotenv = require('dotenv');
dotenv.config()
let port = process.env.PORT || 1601;
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());

app.get('/',(req,res) => {
     res.send("<h1>Welcome to server of Blogging</h1>")
})

app.get('/users',(req,res) => {
     db.collection(`user`).find().toArray((err, result) => {
          if(err) throw err;
          res.send(result)
     })
})

app.get('/users/:id',(req,res) => {
     let userId = Number(req.params.id);
     db.collection(`user`).find({id:userId}).toArray((err, result) => {
          if(err) throw err;
          res.send(result)
     })
})

app.get('/posts',(req,res) => {
     db.collection(`blog`).find().toArray((err, result) => {
          if(err) throw err;
          res.send(result)
     })
})

app.get('/posts/:id',(req,res) => {
     let blogId = Number(req.params.id);
     db.collection(`blog`).find({id:blogId}).toArray((err, result) => {
          if(err) throw err;
          res.send(result)
     })
})

MongoClient.connect(mongoUrl, (err, client) => {
     if(err) console.log(`Error while connecting`);
     db = client.db('Crud');
     app.listen(port,() => {
          console.log(`Server is running on port ${port}`)
     })
})