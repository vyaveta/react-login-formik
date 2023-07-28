import clsx from 'clsx'
import React from 'react'

const Button = ({
  type,
  icon : Icon,
  text,
  onClick,
  disabled,
  fullWidth,
  secondary,
  danger,
}) => {
  return (
    <button
    className={clsx(`flex justify-center rounded-md py-2 px-3 text-sm font-semibold focus-visible:outline focus-visible:outline-2
   focus-visible:outline-offset-2`,
   disabled && 'opacity-50 cursor-default',
   fullWidth && 'w-full',
   secondary ? 'text-gray-900': 'text-white',
   danger && 'bg-rose-500 hover:bg-rose-600 focus-visible:outline-rose-600',
   !secondary && !danger && 'bg-sky-500 hover-bg-sky-600 focus-visible:outline-sky-600')}
    type={type}
    onClick={onClick}
    disabled={disabled}
    >
      {text}
      {/* <Icon /> */}
    </button>
  )
}

export default Button