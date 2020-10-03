const express = require("express")
const app = express()


//rotas

const games = require("./route/gamesRoutes")
app.use("/", games)



module.exports = app
