require("dotenv").config();
const express= require("express");
const axios = require("axios");
const app=express();

app.use(express.json());

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

// app.get('/search', (req, res) => {
//     // const lang = 'en-us';
//     // const input = req.body.oxford;
//     try {
//       instance.get(`/api/v2/entries/en-us/apple`)
//         .then(result => {
//         //   const data = {
//         //     "definition": result.data.results[0].lexicalEntries[0].entries[0].senses[0].definitions[0],
//         //     "phrases": result.data.results[0].lexicalEntries[0].phrases[0].text
//         //   }
//           res.status(200).send(result.data)
//         })
//         .catch(err => res.send(err));
//     }
//     catch (err) {
//       console.error(err);
//     }
//   });

app.listen(4000, function(){
    console.log("server up and running at port 4000");
});