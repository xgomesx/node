const express = require('express')
const app = express()

const lista1=require('./routes/lista1')
app.use('/lista1',lista1)

app.use(express.json());
app.use(express.urlencoded({extended: false}))



app.get('/', function(req, res){
    res.send('Rota Principal')
})

app.get('/hello', function(req, res){
    res.send('Chegou a resposta')
})

app.get('/nome', function(req, res){
    res.send('Orion Teles de Mesquita')
})

app.get('/lista2/ex2',function(req,res){
    res.send('lista 1 ex1')
})

// const n1 = Number(req.body.n1)
// const n2 = Number(req.body.n2)
// const n3 = Number(req.body.n3)
// const n4 = Number(req.body.n4)




















































// app.post('/lista1/ex1', function(req, res){

//     const total = Number(req.body.total)
//     const brancos = Number(req.body.brancos)
//     const nulos = Number(req.body.nulos)
//     const validos = Number(req.body.validos)

//     const soma = brancos + nulos + validos
    
//     let retorno = {}
//     if(soma > total){

//         retorno = {
//             codigo: 'SOMA_ELEITORES',
//             mensagem: "A soma dos votos não pode passar o total de eleitores" 
//         }

//         res.status(400).json(retorno)
        
//     } else {
//         const percBranco = brancos / total * 100
//         const percNulos = nulos / total * 100
//         const percValidos = validos / total * 100

//         retorno = {percBranco, percNulos, percValidos}

//         res.status(200).json(retorno)

//     }

// })

app.listen(3000, function(){
    console.log('Server UP port 3000')
})