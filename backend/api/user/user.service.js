import { User } from "../../models/User.model.js"
import { utilService } from "../../services/util.service.js"


export const userService = {

    addUser,
}

async function addUser({ firstName, secondName, firstEmail, secondEmail, firstPassword, secondPassword, firstAge, secondAge, firstGender, secondGender, preference }) {

    const firstVerificationToken = utilService.verificationToken()
    const secondVerificationToken = utilService.verificationToken()
try {
    
    const newUser = new User({
        firstName,
        secondName,
        firstEmail,
        secondEmail,
        firstPassword,
        secondPassword,
        firstAge,
        secondAge,
        firstGender,
        secondGender,
        preference,
        firstVerificationToken,
        secondVerificationToken,
        verificationTokenExpiresAt: Date.now() + 24 * 60 * 60 * 1000, // 24 hours
    })

    await newUser.save()

    return newUser

} catch (error) {
    // Implement logger here
    // logger.error('cannot add user', err)
    throw error
}
    


}