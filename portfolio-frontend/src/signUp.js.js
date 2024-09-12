import React, { useState } from 'react'

const SignUp = () => {



  const [form,setForm]=useState({})
   
  
  function handleForm(e){
    setForm({

      ...form,
      [e.target.name]:e.target.value
      
    })
  }




  return (
    <div>

      <h1 className='text-center my-4'>SIGN UP COMPONENT</h1>

      <form action="" className='text-center'>



        <input type="text" placeholder='Name' name='name' onChange={handleForm}/>
        <input type="text" placeholder='Email' name='email' onChange={handleForm}/>


      </form>

      <div className='text-center mt-8'><h1>this div will show what i have written in the form</h1>

      {form.name} <br />
      {form.email}
      
      </div>
      
    </div>
  )
}

export default SignUp
