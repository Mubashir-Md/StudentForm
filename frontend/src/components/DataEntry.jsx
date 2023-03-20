import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from "axios";


function DataEntry() {
  const nav = useNavigate();

  const goBack = () => {
    nav("/");
  }

  const [lecturer, setLecturer] = useState([]);
  const [details, setDetails] = useState([
    {
      subject: "",
      branch: "",
      year: "",
      section: "",
      sem: ""
    }
  ]);

  const handleChange = (index, event) => {
    let data = [...details];
    data[index][event.target.name] = event.target.value;
    setDetails(data);
  }

  const addFields = () => {
    let newField = {
      subject: "",
      branch: "",
      year: "",
      section: "",
      sem: ""
    }
    setDetails([...details, newField])

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let sendDetails = {
      lecturer: lecturer,
      subjects: [details]
    }
    axios.post('http://localhost:4000/data-entry-submit', sendDetails).then((res) => {
      console.log(res.status);
    }).catch((error) => console.log(error))
    console.log(sendDetails)
  }





  return (
    <div className='DataEntry' >
      <h2>Data Entry by Admin</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <label>Lecturer:</label>
            <input type="text" name="lecturer" id=""
              onChange={(e) => setLecturer(e.target.value)}
              value={lecturer}

            />
            {/* To be repeated */}

            {details.map((input, index) => {
              return (
                <div className='repeat' key={index}>
                  <label>subject1</label>
                  <input
                    type="text"
                    name="subject"
                    id=""
                    value={input.subject}
                    onChange={(event) => handleChange(index, event)}

                  /><br />
                  <span>Branch</span>
                  <span>
                    <select
                      name="branch"
                      id=""
                      value={input.branch}
                      onChange={(event) => handleChange(index, event)}
                    >
                      <option value="AIDS" >AIDS</option>
                      <option value="AIML" >AIML</option>
                      <option value="CIVIL" >CIVIL</option>
                      <option value="CSE">CSE</option>
                      <option value="ECE">ECE</option>
                      <option value="EEE">EEE</option>
                      <option value="IT">IT</option>
                      <option value="MECH">MECH</option>
                    </select>
                  </span><br />
                  <span>Year</span>
                  <span>
                    <select
                      name="year"
                      id=""
                      value={input.year}
                      onChange={(event) => handleChange(index, event)}
                    >
                      <option value="1" >1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>
                  </span><br />
                  <span>Section</span>
                  <span>
                    <select
                      name="section"
                      id=""
                      value={input.section}
                      onChange={(event) => handleChange(index, event)}
                    >
                      <option value="A" >A</option>
                      <option value="B">B</option>
                      <option value="C">C</option>

                    </select>
                  </span><br />
                  <span>sem</span>
                  <span>
                    <select
                      name="sem"
                      id=""
                      value={input.sem}
                      onChange={(event) => handleChange(index, event)}
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                    </select>
                  </span>
                </div>
              )
            })}
          </div>
        </div>
        <button type='button' id='plus' onClick={addFields}>
          <span className="material-symbols-outlined">
            add_circle
          </span>
        </button>
        <br />
        <button type="submit">submit</button>
        <br />
        <button onClick={goBack}>Go Back</button>
      </form>

    </div >
  )
}


export default DataEntry

