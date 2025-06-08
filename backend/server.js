import express from 'express'
import { createServer } from "http"
import dotenv from "dotenv"
import { mongoDB } from './db/mongoDB.js'
import { authRoutes } from './api/auth/auth.routes.js'

dotenv.config()

const app = express()
const httpServer = createServer(app)
const PORT = process.env.PORT || 5000


app.use("/api/auth", authRoutes)



httpServer.listen(PORT, () => {
    mongoDB()
    console.log("Listening on port:", PORT)
})