const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const { GoogleGenerativeAI } = require("@google/generative-ai");

app.use(bodyParser.json());
app.post('/getResponse', (req, res) => {
    console.log(req.body.question)
    const genAI = new GoogleGenerativeAI('AIzaSyDm6aMcHnN7KL9nb_CoKhdWSzzuhGJIdDs');
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const prompt = "Write a story about a magic backpack.";
    model.generateContent(req.body.question).then(result=>{
        console.log(result.response.text());
        const response = result.response.text();
        res.status(200).json({
            response:response
        })
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        })
    })
})
app.use('*',()=>{
    res.status(404).json({
        msg:'bad request'
    })
})
module.exports = app;