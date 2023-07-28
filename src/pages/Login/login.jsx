import React, { useCallback, useState } from 'react'
import styles from './login.module.css'
import FormComponent from '../../components/forms/form'
import InputField from '../../components/ui/input'
import Button from '../../components/ui/button'
import { loginValidation } from '../../utils/validations'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {

  const [userDetails,setUserDetails] = useState({
    username: "adwaith",
    email: "",
    password: "",
  })
  const [loading,setLoading] = useState(false)
  const navigate = useNavigate()

  const onChange = useCallback((e) => {
    console.log('hello')
    const { name, value } = e.target
    setUserDetails({...userDetails,[name]:value})
    console.log(userDetails,'is the user details')
  },[userDetails])

  const onLogin = async () => {
    try{
      setLoading(true)
      await loginValidation.validate(userDetails, { abortEarly: false });
      localStorage.setItem("userDetails",JSON.stringify(userDetails))
      console.log(JSON.stringify(localStorage.getItem("userDetails")))
      navigate('/')
    }catch(error){
      console.log(error,'form onlogin')
      console.log('Validation errors:', error.errors);
    }finally{
      setLoading(false)
    }
  }

  const LoginBody = (
    <div className=" flex flex-col space-y-6">
      <InputField type="text" value={userDetails.username}  name="username" onChange={onChange} placeholder={"username"} />
      <InputField type="email" value={userDetails.email}  name="email" onChange={onChange} placeholder={"email"} />
      <InputField type="password" value={userDetails.password}  name="password" onChange={onChange} placeholder={"password"} />
      <div>
        <Button fullWidth type="submit" disabled={loading} text={"Login"} onClick={onLogin} />
      </div>
    </div>
  )

  return (
    <div className={styles.container}>
      <div className={styles.login_wrapper}>
        <div className={styles.login_heading}>
          Welcome to the login page! Please enter your credentials below:
        </div>
        <div className={styles.login_input_wrapper}>
          <FormComponent
          initialValues={userDetails}
          onSubmitFunction={onLogin}
          validationSchemaObj={loginValidation}
          body={LoginBody}
          />
        </div>
      </div>
    </div>
  )
}

export default LoginPage