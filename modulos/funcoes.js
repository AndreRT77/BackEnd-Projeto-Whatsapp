/**********************************************************************************
 * Objetivo: Criar zap zap 2 
 * Data:24/09/2025
 * Autor:André Roberto Tavares
 * Versão: 1.0
 * 
 **********************************************************************************/

const MESSAGE_ERRO = {
    status : false, 
    status_code: 500, 
    development: 'André Roberto Tavares'
}
//Import do arquivo de estados e cidades
const dados = require('./contatos.js')

//Retorna Todos os Estados
const getAllContatos = function(){
    //Variável de base para o cabeçalho da API
    let message = {
        status: true,
        status_code: 200,
        development: 'André Roberto Tavares',
        uf : []
    }
    //Loop
    dados.listaDeContatos.contatos.forEach(function(item){
        message.uf.push(item)
    })
        //Para adicionar um elemento novo no JSON
    message.quantidade =  message.uf.length
    


    if(message.uf.length > 0 )
        return message //Verdadeiro 200
    else
        return MESSAGE_ERRO //False 500
    
}