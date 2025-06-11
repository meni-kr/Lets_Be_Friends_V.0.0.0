import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstEmail: {
        type: String,
        required: true,
        unique: true,
    },
    secondEmail: {
        type: String,
        required: true,
        unique: true,
    },
    firstPassword: {
        type: String,
        required: true,
    },
    secondPassword: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    secondName: {
        type: String,
        required: true,
    },
    firstAge: {
        type: Number,
        require: true
    },
    secondAge: {
        type: Number,
        require: true
    },
    firstGender: {
        type: String,
        require: true,
        enum: ['male', 'female']
    },
    secondGender: {
        type: String,
        require: true,
        enum: ['male', 'female']
    },
    preference: {
        type: String,
        enum: ['male', 'female', 'both']
    },
    bio: {
        type: String,
        default: ""
    },
    lastLogin: {
        type: Date,
        default: Date.now,
    },
    image: {
        type: String,
        default: ""
    },
    likes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    ],
    dislikes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    ],
    matches: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    ],
    isFirstVerified: {
        type: Boolean,
        default: false,
    },
    isSecondVerified: {
        type: Boolean,
        default: false,
    },
    resetPasswordToken: String,
    resetPasswordExpiresAt: Date,
    verificationToken: String,
    verificationExpiresAt: Date,

}, { timestamps: true })

export const User = mongoose.model("User", userSchema)

