const express = require('express')
const bodyParser = require('body-parser')
 
const app = express()
 
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
 
app.get('/processGet', (req, res) => {
  res.send('Hello World!')
})
 
app.post('/processdate', (req, res) => {
    let data = req.body;
    res.send('Data Received: ' + JSON.stringify(data));
})
 
 
app.listen(5000, () => {
  console.log('Example app listening on port 3000!')
})