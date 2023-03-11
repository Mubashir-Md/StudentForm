import React from 'react'
import StudentForm from './StudentForm';
import { useState } from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';

function MegaForm() {
    const navigate = useNavigate();

    // const [newForm, setForm] = useState([
    //     {
    //         subject: '',
    //         lecturer: ''
    //     }
    // ]);
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
    const addForm = () => {
        let form = {
            subject: '',
            lecturer: ''
        }
        setForm([...newForm, { form }])

        // navigate("form1")
    }

    return (

        <div className='MegaForm'>
            {newForm.map((input, index) => {
                return (
                    <div className='forms' key={index}>
                        <StudentForm subject={input.Subject} teacher={input.Lecturer} />
                        {/* {newForm.length - 1 === index && newForm.length < 4 &&
                            (<button onClick={addForm}>Next
                            </button>)
                        } */}
                        
                    </div>
                )
            }
            )
            }
        </div>
    )
}
export default MegaForm
