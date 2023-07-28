import clsx from 'clsx'
import { ErrorMessage, useField } from 'formik'
import React from 'react'

const InputField = ({name,type,onChange,placeholder,rounded,value}) => {

  const [field,meta] = useField({
    value,
    onChange,
    type,
    placeholder,
    name,
  })



  return (
    <>
      <input className={clsx('py-2 px-4 outline-none border-sky-500 border-b-2 flex items-center text-start',
      rounded && "rounded-md")} type="text" {...field} onChange={onChange} />
      <ErrorMessage name={name}/>
    </>
  )
}

export default InputField