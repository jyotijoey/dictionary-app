require("dotenv").config();
const express= require("express");
const axios = require("axios");
const app=express();
const mongoose= require("mongoose");

app.use(express.json());

const MongoURL= process.env.URL;

mongoose.connect(MongoURL, {
    useNewUrlParser:true,
    useUnifiedTopology: true
 });

const dictionarySchema= {
    term: String,
    definition: String,
    phrase: String
}

const Item= mongoose.model("Item", dictionarySchema);

app.get("/", function (req, res){
    res.send("hello world");
});

const instance = axios.create({
    baseURL: 'https://od-api.oxforddictionaries.com',
    headers: {
      'Accept': 'application/json',
      'app_id': process.env.APP_ID,
      'app_key': process.env.API_KEY
    }
  });

app.get('/search', (req, res) => {
    // const lang = 'en-us';
    const input = req.body;
    console.log(input);
    // try {
    //   instance.get(`/api/v2/entries/en-us/apple`)
    //     .then(result => {
    //       const data = {
    //         "definition": result.data.results[0].lexicalEntries[0].entries[0].senses[0].definitions[0],
    //         "phrases": result.data.results[0].lexicalEntries[0].phrases[0].text
    //       }
    //       res.status(200).send(result.data)
    //     })
    //     .catch(err => res.send(err));
    // }
    // catch (err) {
    //   console.error(err);
    // }
  });

app.post("/search", function(req, res){
    console.log(req.body);
});

app.listen(4000, function(){
    console.log("server up and running at port 4000");
});