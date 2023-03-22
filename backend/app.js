import express from 'express'
//import mongoose, { Collection } from 'mongoose'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'
dotenv.config()
import Lecturer from "./models/Lecturer.js";
import admin from "./models/admin.js"
import student from './models/student.js'
import stuDetails from './controllers/rollno.js'
import itLecturers from './models/itLecturers.js'
import aidsLecturers from './models/aidsLecturers.js'
import aimlLecturers from './models/aimlLecturers.js'
import civilLecturers from './models/civilLecturers.js'
import cseLecturers from './models/cseLecturers.js'
import eceLecturers from './models/eceLecturers.js'
import eeeLecturers from './models/eeeLecturers.js'
import mechLecturers from './models/mechLecturers.js'
import prodLecturers from './models/prodLecturers.js'
mongoose.set('strictQuery', true)

const app = express()

// setting view engine
// app.set('view engine', 'ejs')
// app.set('views', 'html')

// setting server
app.listen(4000, () => {
    console.log("App is listening on 4000")
})
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

//connecting to databases
const dburi = 'mongodb+srv://AWAIZ:ALPHA25742@data.o7tmfv0.mongodb.net/data?retryWrites=true&w=majority'
mongoose.connect(dburi).then(x => { console.log('connected to db') })


// requesting forms
// app.get('/data-entry-form', (req, res) => { res.render('data-entry-form') })
// app.get('/student-login-form', (req, res) => { res.render('student-login-form') })
// app.get('/admin-login-form', (req, res) => { res.render('admin-login-form') })
// app.get('/feedback-form', (req, res) => { res.render('feedback-form') })


// sending form submits

app.post('/home', (req, res) => {
    const { id } = req.body;
    console.log(id)
    res.json(id);
})


app.post('/data-entry-submit', (req, res) => {
     const l = {subjects:[]}
    const {lecturer,subjects } = req.body
    subjects.forEach(e=>{
        l.subjects.push(e[0])
    })
    l.lecturer= lecturer
    const Lecturer_n = new Lecturer(l)
    Lecturer_n.save().then(resu=>{
        res.send(resu)
    }).catch(err=>{
        res.send(err.message)
        console.log("kuch toh gadbad hai daya")
    })

    // let obj = {
    //     lecturer:'gouri mam',
    //     subjects:[
    //         {subject:'database systems',yr:2,section:'B',sem:4,feedback:[]},
    //         {subject:'it owrksop lab',yr:2,section:'B',sem:3,feedback:[]},
    //         {subject:'network security and cryptography',yr:3,section:'B',sem:6,feedback:[]},
    //     ]
    // }
    //const data = new itLecturers(req.body)
    // const data = new itLecturers(obj)
    // data.save().then(result=>{
    //     res.redirect('/data-entry-form')
    //     res.send(result)
    // })
    // .catch (err=> {
    // console.log(err.message)
    // })
})

app.post('/student-login-submit', async (req, res) => {
    //checking and saving id if student is new
    // student.find({
    //     email: `${req.body.email}`
    // }).then(result => {
    //     if (!result.length == 0) {
    //         //no access page
    //         res.send(result)
    //         console.log('already logged in')
    //     }
    //     else {
    //         const newStudent = new student(req.body)
    //         newStudent.save().then(result => {
    //             let studentDetailsObj = stuDetails('160420737082')
    //             // let studentDetailsObj = { collection:null, yr:0, section:null }
    //             let lecturerSubjectAarray = []
    //             let x = studentDetailsObj.collection
    //             console.log(typeof (studentDetailsObj.collection));
    //             x.find({ 'subjects.yr': studentDetailsObj.yr })
    //                 .then(result => {
    //                     res.send(result)
    //                     console.log(result[0].lecturer);
    //                     result.forEach(lecturer_object => {
    //                         lecturer_object.subjects.forEach(sub => {
    //                             if (sub.yr == 3 && sub.sem == 5) {
    //                                 lecturerSubjectAarray.push([lecturer_object.lecturer, sub.subject])
    //                             }
    //                         })
    //                     })
    //                     console.log(lecturerSubjectAarray);
    //                 })
    //             //res.redirect('/feedback-form')
    //         })
    //         // .catch( err => console.log(err.message) )
    //     }
    // }).catch(err => {
    //     console.log(err.message)
    // })
    //choosing the collection as per student details
    // console.log(obj.collection);
    // obj[collection].find({ 
    //     subjects:[{ yr:obj[yr], section:obj[section] }]
    // })
    //a get function can post(student id from student login form) and get data(for feedback form) ryt?
    try {
        const { email } = req.body;
        const newStudent = await student.stSubmit(email)
        const token = jwt.sign({"email" : newStudent.email}, process.env.secretKey)
        console.log(token)
        res.json({
            "email" : newStudent.email,
            "token" : token
        })
    } catch (error) {
        res.status(400).send(error.message)
    }

})


app.get('/get-lectuers-data',async(req,res)=>{
  try{
    const {rollno} = req.body
    console.log(rollno)
  const stduent_a = await student.findOne({email:rollno})
  if(!stduent_a){
    const stduet = await student.create({email:rollno})
  }
  const details = getallfromroll(rollno)
  console.log(details)
  const findallecturers = await Lecturer.find({
    subjects:{
      $elemMatch:{
        branch:details.branch,
        year:details.yr,
        section:details.section
      }
    }
  })

  if(findallecturers.length ===0){
    throw new Error("no lecturers")
  }
  const sendonly_names_and_subjecct_names = findallecturers.map(e=>{
return {lecturer:e.lecturer,subject:e.subjects[0].subject}
  })

  res.json(sendonly_names_and_subjecct_names)
}
catch(err){
res.json(err.message)
}
})

app.post('/admin-login-submit', (req, res) => {
    //adding new admin
    // const newAdmin = new admin(req.body)
    // newAdmin.save().then(result=>{
    //     // res.redirect('/data-entry-form')
    //     res.send(result)
    // })
    // .catch(err=>{
    //     console.log(err.message)
    //     console.log(req.body)
    // })
    admin.find({
        email: `${req.body.email}`,
        password: `${req.body.password}`
    }).then(result => {
        if (result.length == 0) {
            res.send(result)
            console.log('not found')
        }
        else res.redirect('/admin-login-form')
    }).catch(err => {
        console.log(err.message)
    })
}) //production worthy

app.post("/feedback-submit", (req, res) => {
    let feebackmap = {
        Excellent: 5,
        "Very Good": 4,
        Good: 3,
        Satisfactory: 2,
        Unsatisfactory: 1,
    };
    let fedback = [];
    Object.values(req.body).forEach((e) => {
        let arr = [];
        for (const [k, el] of Object.entries(e)) {

            if (k === "remarks") {
                arr.push(el);
            } else {
                arr.push(feebackmap[el]);
            }
        }

        fedback.push(arr);
    });
    console.log(fedback);
    //db.users.find({ name: “Kyle” }, { name: 1, age: 1 })
    // Get all users with the name Kyle but only return their name, age, and _id
    //db.users.find({}, { age: 0 })
    //Get all users and return all columns except for age
    res.send("pcuhi");

})

console.log(process.env.secretKey)
