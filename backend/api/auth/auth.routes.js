import express from 'express'
import { login, logout, signup, verifyEmail } from './auth.controller.js'

const router = express.Router()

router.post('/login', login)
router.post('/signup', signup)
router.post('/logout', logout)

router.post('/verify-email', verifyEmail)

export const authRoutes = router 
