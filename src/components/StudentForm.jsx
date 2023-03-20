import React, { useState, useEffect } from 'react'
import Header from './Header'
import { StudentContextC } from '../contexts/StudentContext'
import { debounce } from 'lodash';



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
  setStudent(arr=>{
    return {
      ...arr,
      [Number(localStorage.getItem("index"))]:{...details}
    }
  })
  localStorage.setItem("feedback",JSON.stringify(student))
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
})
localStorage.setItem("index",props.index)
console.log(props.index)
},[props.index])



useEffect(() => {
  setStudent(prevStudent => ({
    ...prevStudent,
    [props.index]: { ...details }
  }));
  localStorage.setItem(
    "feedback",
    JSON.stringify({ ...student, [props.index]: { ...details } })
  );
}, [details]);


// useEffect(() => {
//   const debouncedSaveToLocalStorage = debounce(() => {
//     localStorage.setItem("feedback", JSON.stringify(student));
//   }, 100);
//   debouncedSaveToLocalStorage();
// }, [student]);

  const handleChange = (event) => {
    const {name,value } = event.target
    if(name==="remarks"){
      setd(d=>({
        ...d,
       "remarks":value
         }))
    }else{
      setd(d=>({
     ...d,
    [name]:event.target.previousSibling.textContent
      }))
    }
    if (props.islast) {
      const index = Number(localStorage.getItem("index"));
      const updatedStudent = {
        ...student,
        [index]: { ...details },
      };
      setStudent(updatedStudent);
      localStorage.setItem("feedback", JSON.stringify(updatedStudent));
    }
          
      // setStudent(arr=>{
      //   return {
      //     ...arr,
      //     [Number(localStorage.getItem("index"))]:{...details}
      //   }
      // })
    //   let st = JSON.parse(localStorage.getItem("feedback"))
    //   st[props.index]={...details}
    //   localStorage.setItem("feedback",JSON.stringify(st))
    //  }
  
  }


  return (
    <div className='StuForm'>
      
     
        <Header />
        <h2>Teacher Evaluation / Feed-Back Form</h2>
        <h2>Subject : {props.subject}</h2>
        <h2>Teacher : {props.teacher}</h2>
        <h2>Please select the relevant option</h2>
        <ol>
          <li>
            <h3><b>Subject Knowledge</b> : Teacher has Command over subject</h3>
            <label>Excellent</label>
            <input type="radio" name="subKnow" required onChange={(event) => handleChange(event)} checked={details.subKnow==='Excellent'} /> <br />
            <label>Very Good</label>
            <input type="radio" name="subKnow" onChange={(event) => handleChange(event)} checked={details.subKnow==='Very Good'} /> <br />
            <label>Good</label>
            <input type="radio" name="subKnow" onChange={(event) => handleChange(event)} checked={details.subKnow==='Good'}/><br />
            <label>Satisfactory</label>
            <input type="radio" name="subKnow" onChange={(event) => handleChange(event)} checked={details.subKnow==='Satisfactory'} /> <br />
            <label>Unsatisfactory</label>
            <input type="radio" name="subKnow" onChange={(event) => handleChange(event)} checked={details.subKnow==='Unsatisfactory'} />
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
        <textarea  key ={props.index} name="remarks" id="" cols="100" rows="10" value={details.remarks} onChange={(event) => handleChange(event) } ></textarea>
 
     
    </div> 
  )
}

export default StudentForm
