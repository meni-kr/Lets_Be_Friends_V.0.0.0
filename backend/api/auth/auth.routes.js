import express from 'express'
import { login, logout, signup } from './auth.controller.js'

const router = express.Router()

router.post('/login', login)
router.post('/signup', signup)
router.post('/logout', logout)

export const authRoutes = router 
