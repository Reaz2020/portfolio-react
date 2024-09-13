import React, { useState } from 'react'

const SignUp = () => {



  const [form,setForm]=useState({})
   
  
  function handleForm(e){
    setForm({

      ...form,
      [e.target.name]:e.target.value
      
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();  

    const response = await  fetch('http://localhost:8080/demo', {
    method:'POST', body:JSON.stringify(form),
    headers:{
      'Content-Type':'application/json'
    }
  
  })

    
  //response from backend passing like text format in next line 
  // const data= await response.text();

  //response from backend passing like JSON format in next line 
  const data= await response.json();
  console.log(data)
  
  
  }; 
  



  return (
    <div>

      <h1 className='text-center my-4'>SIGN UP COMPONENT</h1>

      <form action="" className='text-center' onSubmit={handleSubmit}>



        <input type="text" placeholder='Name' name='name' onChange={handleForm} /> <br />
        <input type="text" placeholder='Email' name='email' onChange={handleForm}/> <br />
        <button>Submit</button>


      </form>

      <div className='text-center mt-8'><h1>this div will show what i have written in the form</h1>

      {form.name} <br />
      {form.email}
      
      </div>
      
    </div>
  )
}

export default SignUp
