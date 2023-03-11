import React from 'react'
import Details from './Details'
import Fields from './Fields'
import Header from './Header'
import Remarks from './Remarks'
// import GLogin from './GLogin'

function StudentForm(props) {
  return (
    <div className='StuForm'>
      <form action='/form-submit' method="post">
        <Header />
        <h2>Teacher Evaluation / Feed-Back Form</h2>
        <label htmlFor="sub">Subject </label>
        <input type="text" value={props.subject} /> <br />
        <label htmlFor="teacher">Teacher's Name </label>
        <input type="text" value={props.teacher} /> <br />
        <h2>Please select the relevant option</h2>
        <Fields />
        <Remarks />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default StudentForm
