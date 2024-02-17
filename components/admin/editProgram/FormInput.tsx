import React from 'react'

type Props = {
  value: string
  setValue: React.Dispatch<React.SetStateAction<string>>
  placeholder: string
  styleProps?: string
  required?: boolean
  type?: string
}

const FormInput = ({ setValue, value, placeholder, styleProps, required=false, type='text' }: Props) => {
  return (
    <input 
      className={'text-base p-4 rounded-2xl border-2 border-primary outline-none w-full ' + (styleProps ? styleProps : '')}
      placeholder={placeholder}
      value={value}
      onChange={(e) => setValue(e.target.value) }
      required={required}
      type={type}
    />
  )
}

export default FormInput