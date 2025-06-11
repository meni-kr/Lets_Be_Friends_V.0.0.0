import { User } from "../../models/User.model.js"
import bcrypt from "bcryptjs"



export const authService = {
    signup,
    

}

async function signup({ firstName, secondName, firstEmail, secondEmail, firstPassword, secondPassword, firstAge,secondAge, firstGender,secondGender, preference }){
    const saltRounds = 10
    
    if (!firstName || !secondName || !firstEmail || !secondEmail || !firstPassword || !secondPassword || !firstAge || !secondAge || !firstGender || !secondGender || !preference) {
        throw 'All fields are required'
    }

    const userExist = await User.find({
        $or: [
            { firstEmail },
            { secondEmail }
        ]
    })

    if (userExist.length) {
        throw 'User already exists'
    }

    const hashedFirstPassword = await bcrypt.hash(firstPassword, saltRounds)
    const hashedSecondPassword = await bcrypt.hash(secondPassword, saltRounds)



}