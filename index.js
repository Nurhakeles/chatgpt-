const { Configuration, OpenAIApi } = require("openai");
const express =require("express")
const bodyParser= require('body-parser')
const cors = require('cors')


const configuration = new Configuration({
    organization: "org-BbwjcssxUWZeH9YX2O1QsMzY",
    apiKey: "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",
});
const openai = new OpenAIApi(configuration);



const app = express()
app.use(bodyParser.json())
app.use(cors())

const port = 3080

app.post('/', async (req,res) =>{
    const {message} =req.body;
    console.log(message,"message")
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `${message}`,
        max_tokens: 100,
        temperature: 0.5,
      });
      res.json({
        message:response.data.choices[0].text,
      })
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})


