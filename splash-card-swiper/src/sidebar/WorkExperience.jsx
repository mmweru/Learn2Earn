import InputField from '../components/InputField'
import { Label } from '@radix-ui/react-label'
import React from 'react'

const WorkExperience = ({handleChange}) => {
  return (
    <div>
    <h4 className='text-lg font-medium mb-2'>Work Experience</h4>
    <div>
      <Label className="sidebar-label-container">
          <input type="radio" name="test" id="test" value="" onChange={handleChange}/>
          <span className='checkmark'></span>Any Experience
      </Label>
      <InputField handleChange={handleChange} value="Internship" title="Internship" name="test"/>
      <InputField handleChange={handleChange} value="work remotely" title="Work remotely" name="test"/>
    </div>
  </div>
  )
}

export default WorkExperience
