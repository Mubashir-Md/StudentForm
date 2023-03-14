import React, { useContext, useEffect } from 'react'
import StudentForm from './StudentForm';
import { useState } from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import {StudentContextC} from '../contexts/StudentContext';

function MegaForm() {
    // const {student, setStudent} = StudentContextC();

    const [index, setIndex] = useState(0);

    const next = (val) => {
        if (index === newForm.length - 1) {
            return;
        }
        setIndex((index) => index + 1)
    }
    const back = (val) => {
        if (index === 0) {
            return;
        }
        setIndex((index) => index - 1)
    }
    const [newForm, setForm] = useState([
        {
            'Subject': 'Java',
            'Lecturer': 'Afroze'
        },
        {
            'Subject': 'CN',
            'Lecturer': 'Pasha'
        },
        {
            'Subject': 'DBS',
            'Lecturer': 'Rasheed'
        },
        {
            'Subject': 'COMP',
            'Lecturer': 'Wajid'
        },
        {
            'Subject': 'AIML',
            'Lecturer': 'Rafi U Zaman'
        }
    ])


    // setStudent(arr => {
    //     for (let index = 0; index < newForm.length; index++) {
    //         arr = [...arr, index]
    //     }
    //     return arr
    // })

    console.log(newForm)
    // console.log(student)

    useEffect(() => {
      
        
      return () => {
      
      }
    }, [index])
    

    return (

        <div className='MegaForm'>

            <div className='forms'>
                <StudentForm subject={newForm[index].Subject} teacher={newForm[index].Lecturer} index = {index} />

                <button onClick={() => next(newForm)}>Next</button>
                <button onClick={() => back(newForm)}>Back</button>
            </div>



        </div>
    )

}
export default MegaForm
