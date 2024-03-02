const express = require('express')
const app = express()



app.get('/Vasco',function(req,res){
    res.send('chegou a resposta')
})

app.get('/nome',function(req,res){
    res.send('João gabriel gomes')
})

app.get('/time',function(req,res){
    res.send('vasco gigante')
})


app.listen(3000,function(){
console.log('Server up port 3000')


})