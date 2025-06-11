import { authService } from "./auth.service.js"

export async function login(req, res) {
    
}

export async function signup(req, res) {
    const credentials = req.body

    try {
        
        const user = await authService.signup(credentials)

        


    } catch (error) {

    }
}

export async function logout(req, res) { }