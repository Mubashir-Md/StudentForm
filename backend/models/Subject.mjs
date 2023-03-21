import mongoose, { Schema } from "mongoose";

const Subject = new Schema({
        subject:{
            
            type:String,
            required:true,
        },
        branch:{
           type:String,
           required:true 
        },year:{
           type: Number,
           min:1,
           max:4,
           required:true,
        },
        section:{
            type:String,
            required:true,
        },sem:{
            type:Number,
            min:1,
            max:8,
            required:true,
        },
        feedback:{
            type:[],
            required:true,
        }
})

export default Subject
