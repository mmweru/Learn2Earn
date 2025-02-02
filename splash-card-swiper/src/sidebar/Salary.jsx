import React from 'react'
import Button from './Button';
import { Label } from '@radix-ui/react-label';
import InputField from '../components/InputField';

const Salary = ({handleChange, handleClick}) => {
  return (
    <div>
      <h4 className='font-medium text-lg text-primary mb-2'>Salary</h4>
      <div className='mb-4'>
        <Button onClickHandler={handleClick} value="" title="Hourly"/>
        <Button onClickHandler={handleClick} value="Monthly" title="Monthly"/>
        <Button onClickHandler={handleClick} value="Yearly" title="Yearly"/>
      </div>
      <div>
        <Label className="sidebar-label-container">
                <input type="radio" name="test" id="test" value="" onChange={handleChange}/>
                <span className='checkmark'></span>ALL
        </Label>
        <InputField handleChange={handleChange} value={30} title="< 30000k" name="test"/>
        <InputField handleChange={handleChange} value={50} title="< 50000k" name="test"/>
        <InputField handleChange={handleChange} value={80} title="< 80000k" name="test"/>
        <InputField handleChange={handleChange} value={100} title="< 100000k" name="test"/>
      </div>
    </div>
  )
}

export default Salary;
