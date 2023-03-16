import React, { useState, useEffect ,useLayoutEffect} from 'react'
import Header from './Header'
import { StudentContextC } from '../contexts/StudentContext'




function StudentForm(props) {
 
  const {student, setStudent} = StudentContextC();
  const [details,setd] = useState(
  {
    subKnow: "",
    pp: "",
    uc: "",
    ps: "",
    regular: "",
    sp: "",
    dc: "",
    tc: "",
    ep: "",
    or: "",
    remarks: ""
  })
  

  

useEffect(()=>{
setd(JSON.parse(localStorage.getItem("feedback"))?.[props.index]||{
  subKnow: "",
  pp: "",
  uc: "",
  ps: "",
  regular: "",
  sp: "",
  dc: "",
  tc: "",
  ep: "",
  or: "",
  remarks: ""
} )
if(!student[props.index]){
  setStudent(arr=>{
    return {
      ...arr,
      [props.index]: {...details}
    }
  })
}
console.log(student)
},[props.index])


  const handleChange = (event) => {
    if(event.target.name==="remarks"){
      setd(d=>({
        ...d,
       [event.target.name]:event.target.value
         }))
    }else{
    // console.log(event.target.previousSibling.textContent)
      setd(d=>({
     ...d,
    [event.target.name]:event.target.previousSibling.textContent
      }))
    }
      setStudent(data => {
        
        data[props.index] = {...details}
        return data
  });

      localStorage.setItem("feedback", JSON.stringify(student));
  }


  return (
    <div className='StuForm'>
      
      <form action='/form-submit' method="post" >
        <Header />
        <h2>Teacher Evaluation / Feed-Back Form</h2>
        <h2>Subject : {props.subject}</h2>
        <h2>Teacher : {props.teacher}</h2>
        <h2>Please select the relevant option</h2>
        <ol>
          <li>
            <h3><b>Subject Knowledge</b> : Teacher has Command over subject</h3>
            <label>Excellent</label>
<<<<<<< HEAD
            <input type="radio" name="subKnow" required onChange={(event) => handleChange(props.index, event)} checked={student[props.index]["subKnow"] === "Excellent" || ""} /> <br />
            <label>Very Good</label>
            <input type="radio" name="subKnow" onChange={(event) => handleChange(props.index, event)} checked={student[props.index]["subKnow"] === "Very Good" || ""} /> <br />
            <label>Good</label>
            <input type="radio" name="subKnow" onChange={(event) => handleChange(props.index, event)} checked={student[props.index]["subKnow"] === "Good" || ""} /> <br />
            <label>Satisfactory</label>
            <input type="radio" name="subKnow" onChange={(event) => handleChange(props.index, event)} checked={student[props.index]["subKnow"] === "Satisfactory" || ""} /> <br />
            <label>Unsatisfactory</label>
            <input type="radio" name="subKnow" onChange={(event) => handleChange(props.index, event)} checked={student[props.index]["subKnow"] === "Unsatisfactory" || ""} />
=======
            <input type="radio" name="subKnow" required onChange={(event) => handleChange(event)} checked={details.subKnow==='Excellent'} /> <br />
            <label>Very Good</label>
            <input type="radio" name="subKnow" onChange={(event) => handleChange(event)} checked={details.subKnow==='Very Good'} /> <br />
            <label>Good</label>
            <input type="radio" name="subKnow" onChange={(event) => handleChange(event)} checked={details.subKnow==='Good'}/><br />
            <label>Satisfactory</label>
            <input type="radio" name="subKnow" onChange={(event) => handleChange(event)} checked={details.subKnow==='Satisfactory'} /> <br />
            <label>Unsatisfactory</label>
            <input type="radio" name="subKnow" onChange={(event) => handleChange(event)} checked={details.subKnow==='Unsatisfactory'} />
>>>>>>> 61e629004561f3eb7070a862935757b54e1e4591
          </li>
          <li>
            <h3><b>Preparedness and Presentation</b> : Explanation is clear and understandable</h3>
            <label>Excellent</label>
            <input type="radio" name="pp" required onChange={(event) => handleChange(event)} checked={details.pp === "Excellent"} /> <br />
            <label>Very Good</label>
            <input type="radio" name="pp" onChange={(event) => handleChange(event)} checked={details.pp === "Very Good"} /> <br />
            <label>Good</label>
            <input type="radio" name="pp" onChange={(event) => handleChange(event)} checked={details.pp === "Good"} /> <br />
            <label>Satisfactory</label>
            <input type="radio" name="pp" onChange={(event) => handleChange(event)} checked={details.pp === "Satisfactory"} /> <br />
            <label>Unsatisfactory</label>
            <input type="radio" name="pp" onChange={(event) => handleChange(event)} checked={details.pp === "Unsatisfactory"} />
          </li>
          <li>
            <h3><b>Uniformity of Coverage</b> : The teacher spends adequate time on all units and covers the syllabus uniformly</h3>
            <label>Excellent</label>
            <input type="radio" name="uc" required onChange={(event) => handleChange(event)} checked={details.uc === "Excellent"} /> <br />
            <label>Very Good</label>
            <input type="radio" name="uc" onChange={(event) => handleChange(event)} checked={details.uc === "Very Good"} /> <br />
            <label>Good</label>
            <input type="radio" name="uc" onChange={(event) => handleChange(event)} checked={details.uc === "Good"} /> <br />
            <label>Satisfactory</label>
            <input type="radio" name="uc" onChange={(event) => handleChange(event)} checked={details.uc === "Satisfactory"} /> <br />
            <label>Unsatisfactory</label>
            <input type="radio" name="uc" onChange={(event) => handleChange(event)} checked={details.uc === "Unsatisfactory"} />
          </li>
          <li>
            <h3><b>Problem Solving</b> : The teacher solves sufficient numerical problems</h3>
            <label>Excellent</label>
            <input type="radio" name="ps" required onChange={(event) => handleChange(event)} checked={details.ps === "Excellent"} /> <br />
            <label>Very Good</label>
            <input type="radio" name="ps" onChange={(event) => handleChange(event)} checked={details.ps === "Very Good"} /> <br />
            <label>Good</label>
            <input type="radio" name="ps" onChange={(event) => handleChange(event)} checked={details.ps === "Good"} /> <br />
            <label>Satisfactory</label>
            <input type="radio" name="ps" onChange={(event) => handleChange(event)} checked={details.ps === "Satisfactory"} /> <br />
            <label>Unsatisfactory</label>
            <input type="radio" name="ps" onChange={(event) => handleChange(event)} checked={details.ps === "Unsatisfactory"} />
          </li>
          <li>
            <h3><b>Regularity</b> : The teacher is regular to the class and maintain timings</h3>

            <label>Excellent</label>
            <input type="radio" name="regular" required onChange={(event) => handleChange(event)} checked={details.regular === "Excellent"} /> <br />
            <label>Very Good</label>
            <input type="radio" name="regular" onChange={(event) => handleChange(event)} checked={details.regular === "Very Good"} /> <br />
            <label>Good</label>
            <input type="radio" name="regular" onChange={(event) => handleChange(event)} checked={details.regular === "Good"} /> <br />
            <label>Satisfactory</label>
            <input type="radio" name="regular" onChange={(event) => handleChange(event)} checked={details.regular === "Satisfactory"} /> <br />
            <label>Unsatisfactory</label>
            <input type="radio" name="regular" onChange={(event) => handleChange(event)} checked={details.regular === "Unsatisfactory"} />
          </li>
          <li>
            <h3><b>Student Participation</b> : The teacher encourages questions in the class</h3>
            <label>Excellent</label>
            <input type="radio" name="sp" required onChange={(event) => handleChange(event)} checked={details.sp=== "Excellent"} /> <br />
            <label>Very Good</label>
            <input type="radio" name="sp" onChange={(event) => handleChange(event)} checked={details.sp=== "Very Good"} /> <br />
            <label>Good</label>
            <input type="radio" name="sp" onChange={(event) => handleChange(event)} checked={details.sp=== "Good"} /> <br />
            <label>Satisfactory</label>
            <input type="radio" name="sp" onChange={(event) => handleChange(event)} checked={details.sp=== "Satisfactory"} /> <br />
            <label>Unsatisfactory</label>
            <input type="radio" name="sp" onChange={(event) => handleChange(event)} checked={details.sp=== "Unsatisfactory"} />
          </li>
          <li>
            <h3><b>Doubt Clearing</b> : The teacher clears doubts satisfactory</h3>

            <label>Excellent</label>
            <input type="radio" name="dc" required onChange={(event) => handleChange(event)} checked={details.dc === "Excellent"} /> <br />
            <label>Very Good</label>
            <input type="radio" name="dc" onChange={(event) => handleChange(event)} checked={details.dc === "Very Good"} /> <br />
            <label>Good</label>
            <input type="radio" name="dc" onChange={(event) => handleChange(event)} checked={details.dc === "Good"} /> <br />
            <label>Satisfactory</label>
            <input type="radio" name="dc" onChange={(event) => handleChange(event)} checked={details.dc === "Satisfactory"} /> <br />
            <label>Unsatisfactory</label>
            <input type="radio" name="dc" onChange={(event) => handleChange(event)} checked={details.dc === "Unsatisfactory"} />
          </li>
          <li>
            <h3><b>Teacher's Commitment</b> : The teacher is concerned with students' progress and is enthusiastic in teaching</h3>
            <label>Excellent</label>
            <input type="radio" name="tc" required onChange={(event) => handleChange(event)} checked={details.tc === "Excellent"} /> <br />
            <label>Very Good</label>
            <input type="radio" name="tc" onChange={(event) => handleChange(event)} checked={details.tc === "Very Good"} /> <br />
            <label>Good</label>
            <input type="radio" name="tc" onChange={(event) => handleChange(event)} checked={details.tc === "Good"} /> <br />
            <label>Satisfactory</label>
            <input type="radio" name="tc" onChange={(event) => handleChange(event)} checked={details.tc === "Satisfactory"} /> <br />
            <label>Unsatisfactory</label>
            <input type="radio" name="tc" onChange={(event) => handleChange(event)} checked={details.tc === "Unsatisfactory"} />
          </li>
          <li>
            <h3><b>Evaluation Procedures</b> : The teacher evaluates the internal assessments and assignments and discusses mistakes</h3>
            <label>Excellent</label>
            <input type="radio" name="ep" required onChange={(event) => handleChange(event)} checked={details.ep === "Excellent"} /> <br />
            <label>Very Good</label>
            <input type="radio" name="ep" onChange={(event) => handleChange(event)} checked={details.ep === "Very Good"} /> <br />
            <label>Good</label>
            <input type="radio" name="ep" onChange={(event) => handleChange(event)} checked={details.ep === "Good"} /> <br />
            <label>Satisfactory</label>
            <input type="radio" name="ep" onChange={(event) => handleChange(event)} checked={details.ep === "Satisfactory"} /> <br />
            <label>Unsatisfactory</label>
            <input type="radio" name="ep" onChange={(event) => handleChange(event)} checked={details.ep === "Unsatisfactory"} />
          </li>
       
        <h3><b>OVERALL RATING</b> : The overall rating of the Teacher for this teachings</h3>
        <label>Excellent</label>
        <input type="radio" name="or" required onChange={(event) => handleChange(event)} checked={details.or === "Excellent"} /> <br />
        <label>Very Good</label>
        <input type="radio" name="or" onChange={(event) => handleChange(event)} checked={details.or === "Very Good"} /> <br />
        <label>Good</label>
        <input type="radio" name="or" onChange={(event) => handleChange(event)} checked={details.or === "Good"} /> <br />
        <label>Satisfactory</label>
        <input type="radio" name="or" onChange={(event) => handleChange(event)} checked={details.or === "Satisfactory"} /> <br />
        <label>Unsatisfactory</label>
        <input type="radio" name="or" onChange={(event) => handleChange(event)} checked={details.or === "Unsatisfactory"} />
 </ol>
        <h4>Please indicate your overall remarks and suggestions for improvement if any </h4>
        <textarea name="remarks" id="" cols="100" rows="10" value={details.remarks} onChange={(event) => handleChange(event) } ></textarea>
 
      </form>
    </div> 
  )
}

export default StudentForm
