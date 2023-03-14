import React, { useState, useContext, useEffect, useLayoutEffect } from 'react'
import Header from './Header'
import { StudentContextC } from '../contexts/StudentContext'



function StudentForm(props) {

  const { student, setStudent } = StudentContextC();
  const details =
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
  }




  useLayoutEffect(() => {
    
    setStudent(arr => {

      return { ...arr, [props.index]: { ...details } }

    })
    console.log(student)
    return () => {

    }
  }, [])

  const handleChange = (index, event) => {
    // console.log(event.target.previousSibling.textContent)
    if (!student[index]) {
      setStudent(data => {
        data = { ...data, [props.index]: { ...details } }

        data[index][event.target.name] = event.target.previousSibling.textContent;
        console.log(data[index][event.target.name])
        return data
      });
      localStorage.setItem("feedback", JSON.stringify(student));
    }
    else {
      setStudent(data => {
        data[index][event.target.name] = event.target.previousSibling.textContent;
        console.log(data[index][event.target.name])
        return data;
      });
      localStorage.setItem("feedback", JSON.stringify(student));
    }
    console.log(student)
  }


  return (
    <div className='StuForm'>
      {/* <h1>{colorValue}</h1> */}
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
            <input type="radio" name="subKnow" required onChange={(event) => handleChange(props.index, event)} checked={student[props.index]["subKnow"] === "Excellent"} /> <br />
            <label>Very Good</label>
            <input type="radio" name="subKnow" onChange={(event) => handleChange(props.index, event)} checked={student[props.index]["subKnow"] === "Very Good"} /> <br />
            <label>Good</label>
            <input type="radio" name="subKnow" onChange={(event) => handleChange(props.index, event)} checked={student[props.index]["subKnow"] === "Good"} /> <br />
            <label>Satisfactory</label>
            <input type="radio" name="subKnow" onChange={(event) => handleChange(props.index, event)} checked={student[props.index]["subKnow"] === "Satisfactory"} /> <br />
            <label>Unsatisfactory</label>
            <input type="radio" name="subKnow" onChange={(event) => handleChange(props.index, event)} checked={student[props.index]["subKnow"] === "Unsatisfactory"} />
          </li>
          <li>
            <h3><b>Preparedness and Presentation</b> : Explanation is clear and understandable</h3>
            <label>Excellent</label>
            <input type="radio" name="pp" required onChange={(event) => handleChange(props.index, event)} checked={student[props.index]["pp"] === "Excellent"} /> <br />
            <label>Very Good</label>
            <input type="radio" name="pp" onChange={(event) => handleChange(props.index, event)} checked={student[props.index]["pp"] === "Very Good"} /> <br />
            <label>Good</label>
            <input type="radio" name="pp" onChange={(event) => handleChange(props.index, event)} checked={student[props.index]["pp"] === "Good"} /> <br />
            <label>Satisfactory</label>
            <input type="radio" name="pp" onChange={(event) => handleChange(props.index, event)} checked={student[props.index]["pp"] === "Satisfactory"} /> <br />
            <label>Unsatisfactory</label>
            <input type="radio" name="pp" onChange={(event) => handleChange(props.index, event)} checked={student[props.index]["pp"] === "Unsatisfactory"} />
          </li>
          <li>
            <h3><b>Uniformity of Coverage</b> : The teacher spends adequate time on all units and covers the syllabus uniformly</h3>
            <label>Excellent</label>
            <input type="radio" name="uc" required onChange={(event) => handleChange(props.index, event)} checked={student[props.index]["uc"] === "Excellent"} /> <br />
            <label>Very Good</label>
            <input type="radio" name="uc" onChange={(event) => handleChange(props.index, event)} checked={student[props.index]["uc"] === "Very Good"} /> <br />
            <label>Good</label>
            <input type="radio" name="uc" onChange={(event) => handleChange(props.index, event)} checked={student[props.index]["uc"] === "Good"} /> <br />
            <label>Satisfactory</label>
            <input type="radio" name="uc" onChange={(event) => handleChange(props.index, event)} checked={student[props.index]["uc"] === "Satisfactory"} /> <br />
            <label>Unsatisfactory</label>
            <input type="radio" name="uc" onChange={(event) => handleChange(props.index, event)} checked={student[props.index]["uc"] === "Unsatisfactory"} />
          </li>
          <li>
            <h3><b>Problem Solving</b> : The teacher solves sufficient numerical problems</h3>
            <label>Excellent</label>
            <input type="radio" name="ps" required onChange={(event) => handleChange(props.index, event)} checked={student[props.index]["ps"] === "Excellent"} /> <br />
            <label>Very Good</label>
            <input type="radio" name="ps" onChange={(event) => handleChange(props.index, event)} checked={student[props.index]["ps"] === "Very Good"} /> <br />
            <label>Good</label>
            <input type="radio" name="ps" onChange={(event) => handleChange(props.index, event)} checked={student[props.index]["ps"] === "Good"} /> <br />
            <label>Satisfactory</label>
            <input type="radio" name="ps" onChange={(event) => handleChange(props.index, event)} checked={student[props.index]["ps"] === "Satisfactory"} /> <br />
            <label>Unsatisfactory</label>
            <input type="radio" name="ps" onChange={(event) => handleChange(props.index, event)} checked={student[props.index]["ps"] === "Unsatisfactory"} />
          </li>
          <li>
            <h3><b>Regularity</b> : The teacher is regular to the class and maintain timings</h3>

            <label>Excellent</label>
            <input type="radio" name="regular" required onChange={(event) => handleChange(props.index, event)} checked={student[props.index]["regular"] === "Excellent"} /> <br />
            <label>Very Good</label>
            <input type="radio" name="regular" onChange={(event) => handleChange(props.index, event)} checked={student[props.index]["regular"] === "Very Good"} /> <br />
            <label>Good</label>
            <input type="radio" name="regular" onChange={(event) => handleChange(props.index, event)} checked={student[props.index]["regular"] === "Good"} /> <br />
            <label>Satisfactory</label>
            <input type="radio" name="regular" onChange={(event) => handleChange(props.index, event)} checked={student[props.index]["regular"] === "Satisfactory"} /> <br />
            <label>Unsatisfactory</label>
            <input type="radio" name="regular" onChange={(event) => handleChange(props.index, event)} checked={student[props.index]["regular"] === "Unsatisfactory"} />
          </li>
          <li>
            <h3><b>Student Participation</b> : The teacher encourages questions in the class</h3>
            <label>Excellent</label>
            <input type="radio" name="sp" required onChange={(event) => handleChange(props.index, event)} checked={student[props.index]["sp"] === "Excellent"} /> <br />
            <label>Very Good</label>
            <input type="radio" name="sp" onChange={(event) => handleChange(props.index, event)} checked={student[props.index]["sp"] === "Very Good"} /> <br />
            <label>Good</label>
            <input type="radio" name="sp" onChange={(event) => handleChange(props.index, event)} checked={student[props.index]["sp"] === "Good"} /> <br />
            <label>Satisfactory</label>
            <input type="radio" name="sp" onChange={(event) => handleChange(props.index, event)} checked={student[props.index]["sp"] === "Satisfactory"} /> <br />
            <label>Unsatisfactory</label>
            <input type="radio" name="sp" onChange={(event) => handleChange(props.index, event)} checked={student[props.index]["sp"] === "Unsatisfactory"} />
          </li>
          <li>
            <h3><b>Doubt Clearing</b> : The teacher clears doubts satisfactory</h3>

            <label>Excellent</label>
            <input type="radio" name="dc" required onChange={(event) => handleChange(props.index, event)} checked={student[props.index]["dc"] === "Excellent"} /> <br />
            <label>Very Good</label>
            <input type="radio" name="dc" onChange={(event) => handleChange(props.index, event)} checked={student[props.index]["dc"] === "Very Good"} /> <br />
            <label>Good</label>
            <input type="radio" name="dc" onChange={(event) => handleChange(props.index, event)} checked={student[props.index]["dc"] === "Good"} /> <br />
            <label>Satisfactory</label>
            <input type="radio" name="dc" onChange={(event) => handleChange(props.index, event)} checked={student[props.index]["dc"] === "Satisfactory"} /> <br />
            <label>Unsatisfactory</label>
            <input type="radio" name="dc" onChange={(event) => handleChange(props.index, event)} checked={student[props.index]["dc"] === "Unsatisfactory"} />
          </li>
          <li>
            <h3><b>Teacher's Commitment</b> : The teacher is concerned with students' progress and is enthusiastic in teaching</h3>
            <label>Excellent</label>
            <input type="radio" name="tc" required onChange={(event) => handleChange(props.index, event)} checked={student[props.index]["tc"] === "Excellent"} /> <br />
            <label>Very Good</label>
            <input type="radio" name="tc" onChange={(event) => handleChange(props.index, event)} checked={student[props.index]["tc"] === "Very Good"} /> <br />
            <label>Good</label>
            <input type="radio" name="tc" onChange={(event) => handleChange(props.index, event)} checked={student[props.index]["tc"] === "Good"} /> <br />
            <label>Satisfactory</label>
            <input type="radio" name="tc" onChange={(event) => handleChange(props.index, event)} checked={student[props.index]["tc"] === "Satisfactory"} /> <br />
            <label>Unsatisfactory</label>
            <input type="radio" name="tc" onChange={(event) => handleChange(props.index, event)} checked={student[props.index]["tc"] === "Unsatisfactory"} />
          </li>
          <li>
            <h3><b>Evaluation Procedures</b> : The teacher evaluates the internal assessments and assignments and discusses mistakes</h3>
            <label>Excellent</label>
            <input type="radio" name="ep" required onChange={(event) => handleChange(props.index, event)} checked={student[props.index]["ep"] === "Excellent"} /> <br />
            <label>Very Good</label>
            <input type="radio" name="ep" onChange={(event) => handleChange(props.index, event)} checked={student[props.index]["ep"] === "Very Good"} /> <br />
            <label>Good</label>
            <input type="radio" name="ep" onChange={(event) => handleChange(props.index, event)} checked={student[props.index]["ep"] === "Good"} /> <br />
            <label>Satisfactory</label>
            <input type="radio" name="ep" onChange={(event) => handleChange(props.index, event)} checked={student[props.index]["ep"] === "Satisfactory"} /> <br />
            <label>Unsatisfactory</label>
            <input type="radio" name="ep" onChange={(event) => handleChange(props.index, event)} checked={student[props.index]["ep"] === "Unsatisfactory"} />
          </li>
        </ol>
        <h3><b>OVERALL RATING</b> : The overall rating of the Teacher for this teachings</h3>
        <label>Excellent</label>
        <input type="radio" name="or" required onChange={(event) => handleChange(props.index, event)} checked={student[props.index]["or"] === "Excellent"} /> <br />
        <label>Very Good</label>
        <input type="radio" name="or" onChange={(event) => handleChange(props.index, event)} checked={student[props.index]["or"] === "Very Good"} /> <br />
        <label>Good</label>
        <input type="radio" name="or" onChange={(event) => handleChange(props.index, event)} checked={student[props.index]["or"] === "Good"} /> <br />
        <label>Satisfactory</label>
        <input type="radio" name="or" onChange={(event) => handleChange(props.index, event)} checked={student[props.index]["or"] === "Satisfactory"} /> <br />
        <label>Unsatisfactory</label>
        <input type="radio" name="or" onChange={(event) => handleChange(props.index, event)} checked={student[props.index]["or"] === "Unsatisfactory"} />

        <h4>Please indicate your overall remarks and suggestions for improvement if any </h4>
        <textarea name="remarks" id="" cols="100" rows="10" onChange={(event) => handleChange(props.index, event)} ></textarea>

      </form>
    </div>
  )
}

export default StudentForm
