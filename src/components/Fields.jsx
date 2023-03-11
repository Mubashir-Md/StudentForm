import React from 'react'

const Fields = () => {
    return (
        <div>
            <ol>
                <li>
                    <h3><b>Subject Knowledge</b> : Teacher has Command over subject</h3>
                    <label>Excellent</label>
                    <input type="radio" name="subKnow" required/> <br />
                    <label>Very Good</label>
                    <input type="radio" name="subKnow" /> <br />
                    <label>Good</label>
                    <input type="radio" name="subKnow" /> <br />
                    <label>Satisfactory</label>
                    <input type="radio" name="subKnow" /> <br />
                    <label>Unsatisfactory</label>
                    <input type="radio" name="subKnow" />
                </li>
                <li>
                    <h3><b>Preparedness and Presentation</b> : Explanation is clear and understandable</h3>
                    <label>Excellent</label>
                    <input type="radio" name="pp" /> <br />
                    <label>Very Good</label>
                    <input type="radio" name="pp" /> <br />
                    <label>Good</label>
                    <input type="radio" name="pp" /> <br />
                    <label>Satisfactory</label>
                    <input type="radio" name="pp" /> <br />
                    <label>Unsatisfactory</label>
                    <input type="radio" name="pp" />
                </li>
                <li>
                    <h3><b>Uniformity of Coverage</b> : The teacher spends adequate time on all units and covers the syllabus uniformly</h3>
                    <label>Excellent</label>
                    <input type="radio" name="uc" /> <br />
                    <label>Very Good</label>
                    <input type="radio" name="uc" /> <br />
                    <label>Good</label>
                    <input type="radio" name="uc" /> <br />
                    <label>Satisfactory</label>
                    <input type="radio" name="uc" /> <br />
                    <label>Unsatisfactory</label>
                    <input type="radio" name="uc" />
                </li>
                <li>
                    <h3><b>Problem Solving</b> : The teacher solves sufficient numerical problems</h3>
                    <label>Excellent</label>
                    <input type="radio" name="ps" /> <br />
                    <label>Very Good</label>
                    <input type="radio" name="ps" /> <br />
                    <label>Good</label>
                    <input type="radio" name="ps" /> <br />
                    <label>Satisfactory</label>
                    <input type="radio" name="ps" /> <br />
                    <label>Unsatisfactory</label>
                    <input type="radio" name="ps" />
                </li>
                <li>
                    <h3><b>Regularity</b> : The teacher is regular to the class and maintain timings</h3>
                    <label>Excellent</label>
                    <input type="radio" name="regular" /> <br />
                    <label>Very Good</label>
                    <input type="radio" name="regular" /> <br />
                    <label>Good</label>
                    <input type="radio" name="regular" /> <br />
                    <label>Satisfactory</label>
                    <input type="radio" name="regular" /> <br />
                    <label>Unsatisfactory</label>
                    <input type="radio" name="regular" />
                </li>
                <li>
                    <h3><b>Student Participation</b> : The teacher encourages questions in the class</h3>
                    <label>Excellent</label>
                    <input type="radio" name="sp" /> <br />
                    <label>Very Good</label>
                    <input type="radio" name="sp" /> <br />
                    <label>Good</label>
                    <input type="radio" name="sp" /> <br />
                    <label>Satisfactory</label>
                    <input type="radio" name="sp" /> <br />
                    <label>Unsatisfactory</label>
                    <input type="radio" name="sp" />
                </li>
                <li>
                    <h3><b>Doubt Clearing</b> : The teacher clears doubts satisfactory</h3>
                    <label>Excellent</label>
                    <input type="radio" name="dc" /> <br />
                    <label>Very Good</label>
                    <input type="radio" name="dc" /> <br />
                    <label>Good</label>
                    <input type="radio" name="dc" /> <br />
                    <label>Satisfactory</label>
                    <input type="radio" name="dc" /> <br />
                    <label>Unsatisfactory</label>
                    <input type="radio" name="dc" />
                </li>
                <li>
                    <h3><b>Teacher's Commitment</b> : The teacher is concerned with students' progress and is enthusiastic in teaching</h3>
                    <label>Excellent</label>
                    <input type="radio" name="tc" /> <br />
                    <label>Very Good</label>
                    <input type="radio" name="tc" /> <br />
                    <label>Good</label>
                    <input type="radio" name="tc" /> <br />
                    <label>Satisfactory</label>
                    <input type="radio" name="tc" /> <br />
                    <label>Unsatisfactory</label>
                    <input type="radio" name="tc" />
                </li>
                <li>
                    <h3><b>Evaluation Procedures</b> : The teacher evaluates the internal assessments and assignments and discusses mistakes</h3>
                    <label>Excellent</label>
                    <input type="radio" name="ep" /> <br />
                    <label>Very Good</label>
                    <input type="radio" name="ep" /> <br />
                    <label>Good</label>
                    <input type="radio" name="ep" /> <br />
                    <label>Satisfactory</label>
                    <input type="radio" name="ep" /> <br />
                    <label>Unsatisfactory</label>
                    <input type="radio" name="ep" />
                </li>
            </ol>
            <h3><b>OVERALL RATING</b> : The overall rating of the Teacher for this teachings</h3>
            <label>Excellent</label>
            <input type="radio" name="or" /> <br />
            <label>Very Good</label>
            <input type="radio" name="or" /> <br />
            <label>Good</label>
            <input type="radio" name="or" /> <br />
            <label>Satisfactory</label>
            <input type="radio" name="or" /> <br />
            <label>Unsatisfactory</label>
            <input type="radio" name="or" />

        </div>
    )
}

export default Fields
