import { Account } from "../../models/Account.model.js"
import bcrypt from "bcryptjs"
import { accountService } from "../account/account.service.js"
import jwt from "jsonwebtoken"
import { verificationEmail } from "../../mailtrap/emails.js"



export const authService = {
    signup,
    generateTokenAndSetCookie,
    sendVerificationEmail,
    findAccountForVerification
}

async function signup(email,password) {
    const saltRounds = 10

    try {

        if (!email || !password) {
            
            throw 'All fields are required'
        }

        const accountExist = await Account.find({ email })

        if (accountExist.length) {
            throw 'User already exists'
        }

        const hashedPassword = await bcrypt.hash(password, saltRounds)

        return accountService.addAccount(email,hashedPassword)

    } catch (error) {
        throw error
    }
}

function generateTokenAndSetCookie(res,accountID){

    const token = jwt.sign({ accountID},process.env.JWT_SECRET, {
        expiresIn: '3d',
    })

    res.cookie("token", token,{
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict', 
        maxAge:3 * 24 * 60 * 60 * 1000 
    })

    return token
}

async function sendVerificationEmail(email,token){
    try {
        await verificationEmail(email,token)
        
    } catch (error) {
        throw error
    }
}

async function findAccountForVerification(code){

    try {
        
       const account = await Account.findOne({
            verificationToken: code,
            verificationTokenExpires: { $gt: new Date() }
        })

        if(!account){
            throw 'Invalid or expired verification code'
        }

        return account

    } catch (error) {
        throw error
    }
}