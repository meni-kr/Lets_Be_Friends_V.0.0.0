import { VERIFICATION_EMAIL_TEMPLATE } from "./emailTemplates.js"
import { mailtrapClient, sender } from "./mailtrap.config.js"

export async function verificationEmail(email,token){

    const recipient = [{email}]

    try {
        const response = await mailtrapClient.send({
            from:sender,
            to: recipient,
            subject:"Verify your email",
            html:VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", token),
            category: "Email Verification"
        })

        console.log("Email sent successfully:", response)
        
    } catch (error) {
        console.error('error:', error)
        throw `Error sending verification email: ${error}`
    }
}

export async function welcomeEmail(email){
    const recipient = [{email}]

    try {
        
       const response = await mailtrapClient.send({
            from: sender,
            to: recipient,
            template_uuid: "b3722f11-02ed-4df5-a96e-e343ec946b88",
            template_variables:{
                company_info_name: "Lets Be Friends"
            }
        })

        console.log("Welcome email sent successfully:", response)

    } catch (error) {
        
        console.error('error:', error)
        throw `Error sending welcome email: ${error}`

    }
    
        
}