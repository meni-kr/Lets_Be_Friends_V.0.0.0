import express from 'express'
import { createServer } from "http"
import dotenv from "dotenv"
import { mongoDB } from './db/mongoDB.js'

dotenv.config()

const app = express()
const httpServer = createServer(app)
const PORT = process.env.PORT || 5000



httpServer.listen(PORT, () => {
    mongoDB()
    console.log("Listening on port:", PORT)
})