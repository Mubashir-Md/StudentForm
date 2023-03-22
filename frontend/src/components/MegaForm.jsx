import React, { useEffect, useState } from "react";
import StudentForm from "./StudentForm";
import { StudentContextC } from "../contexts/StudentContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function MegaForm() {
  const nav = useNavigate()
  const { student, setStudent } = StudentContextC();
const [isload,setload] = useState(true)
  const [index, setIndex] = useState(
    Number(localStorage.getItem("index")) || 0
  );

  const next = (e, val) => {
    e.preventDefault();
    if (index === newForm.length - 1) {
      return;
    }
    setIndex((index) => index + 1);
  };
  const back = (e) => {
    e.preventDefault();
    if (index === 0) {
      return;
    }
    setIndex((index) => index - 1);
  };
  const [newForm, setForm] = useState([
  ]);

  useEffect(()=>{
axios.post('http://localhost:4000/get-lecturers-data',  {
  email: "160420733119@mjcollege.ac.in",
}).then((res)=>{
  setForm(res.data)
  setload(false)
  console.log(res.data)
}).catch((err)=>{
  nav('/')
})
},[])
  const [last, setlast] = useState(index === newForm.length - 1);
  const sendform = (e) => {
    e.preventDefault();
console.log(student)
    axios
      .post("http://localhost:4000/feedback-submit", student)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log("nhi mlm hora");
  };

  useEffect(() => {
    setlast(index === newForm.length - 1);
  }, [index]);

  return (
    <div className="MegaForm">
      {!isload&&<form className="forms">
        <StudentForm
          subject={newForm[index].subject}
          teacher={newForm[index].lecturer}
          index={index}
          islast={last}
        />

        {index !== newForm.length - 1 && (
          <button onClick={(e) => next(e, newForm)}>Next</button>
        )}
        <br />
        {index !== 0 && <button onClick={(e) => back(e)}>Back</button>}
        {index === newForm.length - 1 && (
          <button type="submit" onClick={(e) => sendform(e)}>
            submit form
          </button>
        )}
      </form>}
    </div>
  );
}
export default MegaForm;