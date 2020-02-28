//configurando o servidor
const express = require("express")
const server = express()

//configurar o servidor para apresentar arquivos estaticos
server.use(express.static('public'))

//configurando a template engine
const nunjucks = require("nunjucks")
nunjucks.configure("./", {
    express: server,
    noCache: true
})

//Lista de doadores: vetor ou array
const donors = [
    {
        name: "Diego Fernandes",
        blood: "AB+"
    },
    {
        name: "Mayk Brito",
        blood: "B+"
    },
    {
        name: "Luis Fernando",
        blood: "A+"
    },
    {
        name: "Bruno Vinicius",
        blood: "A+"
    }
]

//configurar a apresentação da página
server.get("/", function(req, res){
    return res.render("index.html", { donors })
})

//ligar o servidor e permitir o acesso na porta 3000
server.listen(3000, function(){
    console.log("iniciei o servidor")
})

