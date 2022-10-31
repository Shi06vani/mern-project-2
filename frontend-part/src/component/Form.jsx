import userEvent from '@testing-library/user-event'
import React from 'react'
import { useState } from 'react'
import axios from 'axios'
export default function Form() {

  const [data, setdata] = useState({
    name: "", email: "", password: "", phone: ""
  })



  const handleevent = (e) => {

    const { name, value } = e.target;

    setdata({ ...data, [name]: value });


  }


  const start = async () => {
    const { name, email, password, phone } = data
    if (name && email && password && phone) {

      axios.post('http://localhost:9002/register', data)

        .then(res => {
          alert(res.data.message)
        })
        .catch(err => {
          alert(err, "data is not save")
        })


    }
  }




  return (
    <>

      <div className='section'>
        <div className='myform'>
          <label htmlFor="">Name:</label><br />  <input type="text" placeholder='Enter name' name='name' value={data.name} onChange={handleevent} /><br /><br />
          <br /> <label htmlFor="">email:</label> <input type="email" placeholder='Enter email' name='email' value={data.email} onChange={handleevent} /><br /><br />
          <br /><label htmlFor="">password:</label><input type="password" placeholder='Enter password' name='password' value={data.password} onChange={handleevent} /><br /><br />
          <br /><label htmlFor="">phone:</label><input type="phone" placeholder='Enter phone' name='phone' value={data.phone} onChange={handleevent} /><br /><br />
          <br /><button type='submit' onClick={start}>submit</button>
        </div>

      </div>

    </>
  )
}
