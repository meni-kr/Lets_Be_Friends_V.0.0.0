import mongoose from "mongoose";

const accountUserSchema = new mongoose.Schema({
    name: String,
    age: Number,
    gender: { type: String, enum: ['male', 'female', 'other'] }
}, { _id: false })

const locationSchema = new mongoose.Schema({
    country: String,
    city: String
}, { _id: false })

const connectionSchema = new mongoose.Schema({
    like: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Account' }],
    dislike: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Account' }]
}, { _id: false })


const accountSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },

    accounts: {
        type: [accountUserSchema],
        validate: v => v.length === 2
    },
    hobbies: [String],
    description: String,
    image: {
        type: String,
        default: ""
    },
    location: locationSchema,
    connection: connectionSchema,
    match: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Account' }],
    lastLogin: {
        type: Date,
        default: Date.now,
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    resetPasswordToken: String,
    resetPasswordExpiresAt: Date,
    verificationToken: String,
    secondVerificationToken: String,
    verificationTokenExpiresAt: Date,

}, { timestamps: true })

export const Account = mongoose.model("Account", accountSchema)

