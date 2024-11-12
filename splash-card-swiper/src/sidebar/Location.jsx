import { Label } from '@radix-ui/react-label';
import React from 'react'
import InputField from '../components/InputField'


const Location = ({handleChange}) => {
  return (
    <div>
      <h4 className='text-lg font-medium mb-2'>Location</h4>
      <div>
        <Label className="sidebar-label-container">
            <input type="radio" name="test" id="test" value="" onChange={handleChange}/>
            <span className='checkmark'></span>ALL
        </Label>
        <InputField handleChange={handleChange} value="London" title="London" name="test"/>
        <InputField handleChange={handleChange} value="seattle" title="Seattle" name="test"/>
        <InputField handleChange={handleChange} value="madrid" title="Madrid" name="test"/>
        <InputField handleChange={handleChange} value="boston" title="Boston" name="test"/>
      </div>
    </div>
  )
}

export default Location;
