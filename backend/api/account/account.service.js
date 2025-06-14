import { Account } from "../../models/Account.model.js"
import { utilService } from "../../services/util.service.js"


export const accountService = {

    addAccount,
}

async function addAccount(email, hashedPassword) {

    const verificationToken = utilService.verificationToken()
    try {

        const newAccount = new Account({
            email,
            password: hashedPassword,
            verificationToken,
            verificationTokenExpiresAt: Date.now() + 24 * 60 * 60 * 1000, // 24 hours
        })
        
        await newAccount.save()
        
        return newAccount

    } catch (error) {
        // Implement logger here
        // logger.error('cannot add Account', err)
        throw error
    }



}