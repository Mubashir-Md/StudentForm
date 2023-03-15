import React, { useLayoutEffect,useState } from 'react'
import StudentForm from './StudentForm';
import {StudentContextC} from '../contexts/StudentContext';
import { useEffect } from 'react';

function MegaForm() {
    const {student, setStudent} = StudentContextC();

    const [index, setIndex] = useState(0);

    const next = (val) => {
        if (index === newForm.length - 1) {
            return;
        }
        setIndex((index) => index + 1)
    }
    const back = () => {
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

useEffect(()=>{
console.log("index")
},[index])
   
 
   const sendform=()=>{
    console.log(student)
   }
    

    return (

        <div className='MegaForm'>

            <div className='forms'>
                <StudentForm subject={newForm[index].Subject} teacher={newForm[index].Lecturer} index = {index} />

                {index!==newForm.length-1&&<button onClick={() => next(newForm)}>Next</button>}
                {index !== 0&&<button onClick={() => back()}>Back</button>}
                {index===newForm.length-1&& <button type='submit' onClick={sendform}>submit form</button>}
            </div>



        </div>
    )

}
export default MegaForm
