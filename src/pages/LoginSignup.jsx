import React from 'react'
import './CSS/LoginSignup.css'

const LoginSignup = () => {

  const [state, setState] = React.useState("Login")
  const [formData, setFormData] = React.useState({
    username: "",
    email: "",
    password: "",
  })

  const login = async () => {
    console.log("Login Function Executed", formData);

    let responseData;
    await fetch("https://frozer-ecomm.onrender.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
      .then((response) => response.json())
      .then((data) => responseData = data)


    //auth token save in local storage
    if (responseData.success) {
      localStorage.setItem("auth-token", responseData.token)

      window.location.replace("/")
    }
    else {
      alert(responseData.message)
    }
  }

  const signup = async () => {

    console.log("Signup Function Executed", formData);
    // http://localhost:4000/
    let responseData;
    await fetch("https://frozer-ecomm.onrender.com/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
      .then((response) => response.json())
      .then((data) => responseData = data)


    //auth token save in local storage
    if (responseData.success) {
      localStorage.setItem("auth-token", responseData.token)

      window.location.replace("/")
    }
    else {
      alert(responseData.message)
    }


  }

  const changeHandler = (e) => {
    setFormData({
      ...formData, // spead operator
      [e.target.name]: e.target.value

    })
  }


  return (
    <div className='loginsignup'>

      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-fields">

          {state === "Sign Up" ? <input name="username" value={formData.username} onChange={changeHandler} type="text" placeholder='Your Name' /> : <></>}


          <input type="email" name="email" value={formData.email} onChange={changeHandler} placeholder='Your Email' />
          <input name='password' value={formData.password} onChange={changeHandler} type="password" placeholder='Your Password' />

        </div>
        <button onClick={() => { state === "Login" ? login() : signup() }}>Continue</button>

        {state === "Sign Up" ? <p className="loginsignup-login">
          Already have an account? <span onClick={() => { setState("Login") }}>Login here</span>
        </p> : <p className="loginsignup-login">
          Create an Account <span onClick={() => { setState("Sign Up") }}>Click Here</span>
        </p>}


        <div className="loginsignup-agree">
          <input type="checkbox" name='' id='' />
          <p>By continuing, i agree to the terms of use & privacy policy</p>
        </div>
      </div>

    </div>
  )
}

export default LoginSignup