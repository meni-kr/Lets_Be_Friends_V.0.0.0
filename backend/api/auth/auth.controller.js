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

        await authService.sendVerificationEmail(account.email, account.verificationToken)

        res.status(201).json({
            success: true,
            message: "Account created successfully",
            account: {
                ...account._doc,
                password: undefined
            }
        })
    } catch (error) {

        //// Implement logger here
        // logger.error('Failed to signup ' + error)

        res.status(400).json({
            success: false,
            message: error
        })
    }
}

export async function logout(req, res) {
    
    res.clearCookie('token')
    res.status(200).json({
        success: true,
        message: "Logged out successfully"
    })
}

export async function verifyEmail(req, res) {

    const { code } = req.body

    try {

        const account = await authService.findAccountForVerification(code)

        account.isVerified = true
        account.verificationToken = undefined
        account.verificationTokenExpiresAt = undefined
        account.save()

        //// Implement logger here
        // logger.info('Account verification:', account)

        await authService.sendWelcomeEmail(account.email)

        res.status(200).json({
            success: true,
            message: "Email verified successfully",
            account: {
                ...account._doc,
                password: undefined
            }
        })

    } catch (error) {

        //// Implement logger here
        // logger.error('Failed to verify email ' + error)

        res.status(500).json({
            success: false,
            message: error
        })

    }

}