import { User } from "../../models/User.model.js"


export const userService = {

    addUser,
}

async function addUser({ firstName, secondName, firstEmail, secondEmail, firstPassword, secondPassword, firstAge, secondAge, firstGender, secondGender, preference }){

    // const verificationToken

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
        preference
    })


}