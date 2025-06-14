import { authService } from "./auth.service.js"

export async function login(req, res) {

}

export async function signup(req, res) {
    const { email, password } = req.body

    try {

        const account = await authService.signup(email, password)

        //// Implement logger here
        // logger.info('Account signup:', account)

        authService.generateTokenAndSetCookie(res, account._id)

        res.status(201).json({
            success: true,
            message: "Account created successfully",
            account: {
                ...account._doc,
                password: undefined
            }
        })
    } catch (error) {

        res.status(400).json({
            success: false,
            message: error
        })
    }
}

export async function logout(req, res) { }