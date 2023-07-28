import React from 'react'
import InputField from '../ui/input'

const LoginBody = ({userDetails,loginChange}) => {
  return (
    <div>
        <InputField type="text" value={userDetails.username} onChange={loginChange}  />
    </div>
  )
}

export default LoginBody