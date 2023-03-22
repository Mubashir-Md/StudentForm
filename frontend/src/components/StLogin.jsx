import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { EmailContextC } from '../contexts/EmailContext';
import  '../App.css'

function StLogin() {
  const {emails,setemails} = EmailContextC()
  const [err,seterr] = useState('')
  const [email,setEmail] = useState("");


  useEffect(()=>{
console.log("err aaya ya gya")
  },[err])
  return (
    <div className='Login'>
      <h1>Student Feedback form</h1>
      <form action="" onSubmit={(e)=>{
        e.preventDefault();
        const emailSend = {
          "email" : email
        }
        axios.post('http://localhost:4000/student-login-submit',emailSend).then((res)=>{
          console.log(res)
          if(res.status===200){
            setemails(res.data)
            localStorage.setItem("student",JSON.stringify(res.data))
            console.log("success")
          }else{
           
            throw new Error(`${res}`)
          }
        }).catch(err => {
          seterr(err.message)
        })
      }}>
        <label htmlFor="text">Enter your email ID</label><br />
        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/><br />
        <button type='submit'>Submit</button>
      </form>
      {err&&<div className='middle'>
        <h1>{err}</h1>
        <button onClick={()=>seterr('')}>ok</button>
        </div>}
    </div>
  )
}

export default StLogin