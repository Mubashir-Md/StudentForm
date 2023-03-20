import React, { useEffect,useState } from 'react'
import StudentForm from './StudentForm';
import {StudentContextC} from '../contexts/StudentContext';

function MegaForm() {
    const {student, setStudent} = StudentContextC();


    const [index, setIndex] = useState(Number(localStorage.getItem("index"))||0);
   
    const next = (e,val) => {
        e.preventDefault()
        if (index === newForm.length - 1) {
            return;
        }
        setIndex((index) => index + 1)
    }
    const back = (e) => {
        e.preventDefault()
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

    const [last,setlast] = useState(index===newForm.length-1)


   const sendform=(e)=>{
    e.preventDefault()
    
  setTimeout(() => {
    console.log(student)
  }, 2000);
    
   }

    useEffect(()=>{
setlast(index===newForm.length-1)
    },[index])


    return (

        <div className='MegaForm'>

            <form className='forms'>
                <StudentForm subject={newForm[index].Subject} teacher={newForm[index].Lecturer} index = {index} islast={last}/>

                {index!==newForm.length-1&&<button onClick={(e) => next(e,newForm)}>Next</button>}
                <br />
                {index !== 0&&<button onClick={(e) => back(e)}>Back</button>}
                {index===newForm.length-1&& <button type='submit' onClick={(e)=>sendform(e)}>submit form</button>}
            </form>



        </div>
    )

}
export default MegaForm
