import * as Yup from 'yup'
import { regex } from './regex'

export const loginValidation = Yup.object().shape({
    username: Yup.string().required("Username is required!").matches(regex.username,"Enter valid username"),
    email: Yup.string().email("enter a valid Email address").required("email is required").matches(regex.email,'Enter a valid email'),
    password: Yup.string().required("password is required")
})