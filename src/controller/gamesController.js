const { response } = require("express")
const { request } = require("../app")
const games = require("../model/games.json")


const novaListaGames = games.map(jogos => {
    const novoGame = {
        id: jogos.id,
        nome: jogos.name,
        genero: jogos.genre,
        plataformas: jogos.platforms,
        capa: jogos.cover

    } 
    return novoGame
})

const getGames = (request, response)=>{
    console.log(request.url)
    response.status(200).send(novaListaGames)
}


const listaAtualizadaGames = games.map (jogo =>{
    const gameAtualizado = {
        id: jogo.id,
        nome: jogo.name,
        genero: jogo.genre,
        plataformas: jogo.platforms,
        data_lancamento: jogo.first_release_date,
        slug: jogo.slug,
        resumo: jogo.summary,
        empresa: jogo.company,
        capa: jogo.cover
        
    }
    return gameAtualizado
})

const getbyId = (request, response)=>{
    const id = request.params.id
    console.log(id)
    response.status(200).send(listaAtualizadaGames)

}

module.exports = { 
    getGames,
    getbyId
 }