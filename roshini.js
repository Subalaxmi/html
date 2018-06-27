var express = require('express')
var path =require('path')
var app = express()
var path=require('path')
var bodyParser = require('body-parser')

app.use(express.static(__dirname))
console.log(__dirname);
app.use('/static', express.static(path.join(__dirname, '../rose')))

app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
 

var da1=require('./resume.js')
 
app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/resumelist',function(req,res){
   da1.find({},function(err,data){
       res.json(data)
})

})


app.post('/post',function(req,res){
	var v=new da1({"name":req.body.name,"contact":req.body.contact,"feedback":req.body.feedback})
   v.save(function(err,data){
       res.json(data)
})
})
/*app.post('/validate',function(req,res){
	da1.find({"name":req.body.name},function(err,data){
       res.json(data)
})

})*/

 app.use('/routing', express.static(path.join(__dirname, 'routing')))
app.listen(3000)

