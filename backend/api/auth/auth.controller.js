import { authService } from "./auth.service.js"

export async function login(req, res) {
    
}

export async function signup(req, res) {
    const {email,password} = req.body

    try {
        
        const account = await authService.signup(email,password)

        //// Implement logger here
        // logger.info('Account signup:', account)
        


    } catch (error) {

    }
}

export async function logout(req, res) { }