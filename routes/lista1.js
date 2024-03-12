const express = require('express')
const router =  express.Router()
router.get('/', function (req, res){res.send('hello')})
router.post('/ex1', function(req, res){
console.log(req.body)
     res.status(400).json({numero:1})
    // const total = Number(req.body.total)
    // const brancos = Number(req.body.brancos)
    // const nulos = Number(req.body.nulos)
    // const validos = Number(req.body.validos)

    // const soma = brancos + nulos + validos
    
    // let retorno = {}
    // if(soma > total){

    //     retorno = {
    //         codigo: 'SOMA_ELEITORES',
    //         mensagem: "A soma dos votos não pode passar o total de eleitores" 
    //     }

    //     res.status(400).json(retorno)
        
    // } else {
    //     const percBranco = brancos / total * 100
    //     const percNulos = nulos / total * 100
    //     const percValidos = validos / total * 100

    //     retorno = {percBranco, percNulos, percValidos}

    //     res.status(200).json(retorno)

    // }

})  
module.exports = router;