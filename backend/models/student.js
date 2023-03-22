'use strict';

import mongoose from 'mongoose'
import jwt from 'jsonwebtoken'

const { Schema, SchemaTypes } = mongoose;
const login = new Schema({
    email: {
        type: SchemaTypes.String,
        required: true,
        unique: true
    }
})

login.statics.stSubmit = async function (email) {
    if(email===''||email===null){
throw new Error("email empty")
    }
        const student = await this.findOne({
        "email": email
    })
    if (!student) {
        try {
            const studentC = await this.create({
                "email": email
            })
            return studentC
        }
        catch (error) {
            throw new Error("User wasn't created")

        }

    }
    return student
}




export default mongoose.model('student', login)