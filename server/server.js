require("dotenv").config();
const express= require("express");
const axios = require("axios");
const app=express();
const mongoose= require("mongoose");
const cors= require("cors");


app.use(express.json());
// app.use(express.urlencoded());
app.use(cors());

const MongoURL= process.env.URL;

mongoose.connect(MongoURL, {
    useNewUrlParser:true,
    useUnifiedTopology: true
 });

const dictionarySchema= mongoose.Schema({
    term: String,
    definition: String,
    phrase: String,
    sDefinition: String,
    phrase2: String,
    spell: String
})

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

app.get("/search", (req, res) => {

    Item.find({},(err,data)=>{
        if(err){
            res.status(500).send(err);
        }
        else{
            res.status(200).send(data);
        }
    });
  });

app.post("/search", function(req, res){
    const input = req.body.term;
    console.log(input);
    try {
      instance.get(`/api/v2/entries/en-us/${input}`)
        .then(result => {
            console.log("59");
          const post = {
            term: input,
            definition: result.data.results[0].lexicalEntries[0].entries[0].senses[0].definitions[0],
            phrase: result.data.results[0].lexicalEntries[0].phrases[0].text,
            sDefinition: result.data.results[0].lexicalEntries[0].entries[0].senses[0].shortDefinitions[0],
            phrase2: result.data.results[0].lexicalEntries[0].phrases[3].text,
            spell: result.data.results[0].lexicalEntries[0].entries[0].pronunciations[0].phoneticSpelling
          }
          console.log("65");
          Item.create(post, (err, data) => {
              console.log("66");
            if(err){
                res.status(500).send(err);
                console.log(err);
            }
            else{
                console.log("72");
                res.status(201).send(data);
            }
        })
        console.log("75");
        //   res.status(200).console.log(result.data);
        })
        .catch(err => res.send(err));
    }
    catch (err) {
      console.error(err);
    }
});

app.listen(process.env.PORT||4000, function(){
    console.log("server up and running at port 4000");
});