/**********************************************************************************
 * Objetivo: Fazer o zap zap 2
 * Data:24/09/2025
 * Autor:André Roberto Tavares
 * Versão: 1.0
 * 
 * Observações: instalação do Express , Cors, Body-Parser
 * npm install express --save
 * npm install cors express --save
 * npm install body-parser --save
 **********************************************************************************/

const express = require('express') //Responsável pela API
const cors = require('cors') //Responsável pelas Permissões da API (APP)
const bodyParser = require('body-parser') //Responsável por Gerenciar a chegada dos dados da API com o front 

const dados = require('./modulos/funcoes.js')

//retorna a porta do servidor atual ou colocamos um porta local 
const PORT = process.PORT || 7070

//Criando uma instancia de uma classe do express 
const app = express()

//Configuração de permissões
app.use((request, response, next)=>{
    response.header('Access-Control-Allow-Origin', '*') //Servidor de origem da API
    response.header('Access-Control-Allow-Methods', 'GET') //Verbos permitidos na API
    //Carrega as configurações no CORS da API
    app.use(cors())
    next() //Próximo, carregar os próximos endpoints
})

//request -> chegada de dados na API 
//response -> retorno de dados na API

//Endpoints

app.get('/v1/whatsapp', (request, response) => {
    let estados = dados.getAllContatos()

    //retorna o status code
    response.status(contatos.status_code)
    //retorna o JSON
    response.json(estados)
    console.log(getAllContatos)

    })

    app.listen(PORT, () =>{
        console.log('API aguardando requisições...')
        console.log(getAllContatos)
})