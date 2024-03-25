import React from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Signup from "./components/signup/Signup"
import Login from "./components/login/Login"



const Authentication = () => {
  const navigate = useNavigate()
  const [isUserLogedIn, setIsUserLogedIn] = useState(false)
  const [isLogin, setIsLogin] = useState(true)
  const [incorrect, setIncorrect] = useState(false)
  const [error, setError] = useState("")
  const [credentials, setCredentials] = useState({fName: "", lName: "", email: "",password: "", confPassword: ""})
  
  const handleInputChange = (e, field) => {
    setCredentials({ ...credentials, [field]: e.target.value })
  }
  
  const validateLogin = async () => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const { email, password } = credentials
    const checkEmail = regex.test(email)

    switch (true) {
      case !email || !password:
        setError("All Fields Are required")
        setIncorrect(true)
          break;
      case !checkEmail:
        setError("Invalid Email Address")
        setIncorrect(true)
          break;
      case password.length < 6:
        setError("Password is Too Short")
        setIncorrect(true)
          break;
      default:

        const formData = new FormData
        formData.append("email", email.toLowerCase())
        formData.append("password", password.toLowerCase())

        try {
          const response = await fetch(
            "http://127.0.0.1/LinkedIn-clone/backend/login.php",{
              method: "POST",
              body: formData
            }
          );
          const data = await response.json()

          if(data.status !== "success"){
            setIncorrect(true)
            setError("Incorrect Username or Password")
          }else{
            setIncorrect(false)
            setIsUserLogedIn(true)
            console.log(data.user_id)
            navigate("/Home")
          }
        } catch (error) {
          console.error(error)
        }
          break;
    }
  }

  const validateSignup = async () => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const { fName, lName, email, password, confPassword} = credentials
    const checkEmail = regex.test(email)
    switch (true) {
      case !fName || !lName || !email || !password || !confPassword:
        setError("All Fields Are required")
        setIncorrect(true)
          
          break;
      case !checkEmail:
        setError("Invalid Email Address")
        setIncorrect(true)
          
          break;
      case password.length < 6:
        setError("Password is Too Short")
        setIncorrect(true)
          break;
      case password !== confPassword:
        setError("Passwords Don't Match")
        setIncorrect(true)
          break;
      default:

        const formData = new FormData
        formData.append("f_name", fName.toLowerCase())
        formData.append("l_name", lName.toLowerCase())
        formData.append("email", email.toLowerCase())
        formData.append("password", password.toLowerCase())

        try {
          const response = await fetch(
            "http://127.0.0.1/LinkedIn-clone/backend/signup.php",{
              method: "POST",
              body: formData
            }
          );
          const data = await response.json()

          if(data.status !== "success"){
            setIncorrect(true)
            setError("User Already Exists")
          }else{
            setIncorrect(false)
          }

        } catch (error) {
          console.error(error)
        }
          break;
    }
  }

  return(
    <div className="auth-box auth-page">
      {isLogin ?(
        <Login 
        setIsLogin = {setIsLogin} 
        handleInputChange = {handleInputChange}
        validateLogin = {validateLogin}
        incorrect = {incorrect}
        setIncorrect = {setIncorrect}
        error = {error}
        setError = {setError}
        credentials = {credentials}
        setCredentials = {setCredentials}
        ></Login>
      ):(
        <Signup 
        setIsLogin = {setIsLogin}
        handleInputChange = {handleInputChange}
        validateSignup = {validateSignup}
        incorrect = {incorrect}
        setIncorrect = {setIncorrect}
        error = {error}
        setError = {setError}
        credentials = {credentials}
        setCredentials = {setCredentials}
        ></Signup>
      )}
    </div>
  )
}

export default Authentication