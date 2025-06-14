import { Account } from "../../models/Account.model.js"
import bcrypt from "bcryptjs"
import { accountService } from "../account/account.service.js"



export const authService = {
    signup,
    getLoginToken,

}

async function signup(email,password) {
    const saltRounds = 10

    try {

        if (!email || !password) {
            throw 'All fields are required'
        }

        const accountExist = await Account.find({ email })

        if (accountExist) {
            throw 'User already exists'
        }

        const hashedPassword = await bcrypt.hash(password, saltRounds)

        return accountService.addAccount(email,hashedPassword)

    } catch (error) {
        throw error
    }
}

function getLoginToken() {

}