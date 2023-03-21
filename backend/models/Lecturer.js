import mongoose from 'mongoose'
import Subject from './Subject.mjs';
const { Schema, SchemaTypes } = mongoose;
const feedback = new Schema({
    lecturer:{
        type:SchemaTypes.String,
        required:true,
    },
    subjects:{
        type:[Subject],
        required:true,
    }
})


export default mongoose.model('Lecturer',feedback)
