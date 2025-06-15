import { MailtrapClient } from "mailtrap"
import dotenv from "dotenv"

dotenv.config()

export const mailtrapClient = new MailtrapClient({
    token: process.env.MAILTRAP_API_TOKEN,
})

export const sender = {
    email: process.env.MAILTRAP_EMAIL_SENDER,
    name: "M.A",
}
