
import React from 'react'
import { useNavigate } from 'react-router-dom';

function AdminLogin() {
  const navigate = useNavigate();

  const toForm = () => {
    navigate("/form");
  }
  const toDataEntry = () => {
    navigate("/data-entry");
  }

  return (

    <div className='AdminLogin'>
      <h2>Admin Login</h2>
      <form>
        <label htmlFor="">Admin Id</label>
        <input name='adminId' required /><br/>
        <label htmlFor="">Password</label>
        <input name='password' type="password" />
      </form>
      <button type='submit'>Submit</button>
      <button onClick={toForm}>Go to Form</button>
      <button onClick={toDataEntry}>Go to Data Entry</button>
    </div>

  )
}

export default AdminLogin
