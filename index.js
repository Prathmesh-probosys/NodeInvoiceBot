const express = require('express')
const bodyParser = require('body-parser')
 
const app = express()
 
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
    var port = 5000;
app.get('/processGet', (req, res) => {
	const date = "1996-07-04T00:00:00" //req.body;
	console.log(date);
	const dateObject = new Date(date);
	console.log(dateObject);
	var formattedDate = dateObject.getDate() + '/' + (dateObject.getMonth()+1) + '/' + (dateObject.getFullYear()-1);
  res.send('Hello World!' + formattedDate);
})
 
app.post('/processdate', (req, res) => {
   let  data = "1996-07-04T00:00:00" //req.body;
    res.send('Data Received: ' + JSON.stringify(data));
})
 
 
 app.listen(port, function(){
            console.log('Server is running at port: ',port);
          });
