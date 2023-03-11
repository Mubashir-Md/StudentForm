import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'


function DataEntry() {
  const nav = useNavigate();

  const goBack = () => {
    nav("/");
  }

  const [lecturer, setLecturer] = useState([]);
  const [details, setDetails] = useState([
    {
      subject: "",
      year: null,
      section: null,
      sem: null
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
      year: null,
      section: null,
      sem: null
    }
    setDetails([...details, newField])

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let sendDetails = {
      lecturer: lecturer,
      subjects: [details]
    }
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
                  <label>section</label>
                  <label htmlFor="">A</label>
                  <input
                    type="radio"
                    name="section"
                    value={input.section}
                    onChange={(event) => handleChange(index, event)}
                  />
                  <label htmlFor="">B</label>
                  <input
                    type="radio"
                    name="section"
                    value={input.section}
                    onChange={(event) => handleChange(index, event)}

                  /><br />
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

