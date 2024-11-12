import { Label } from '@radix-ui/react-label'
import React from 'react'

const InputField = ({handleChange, value, title, name}) => {
  return (
    <Label className="sidebar-label-container">
        <input type="radio" name={name} value={value} onChange={handleChange}/>
        <span className='checkmark'></span>{title}
    </Label>
  )
}

export default InputField
