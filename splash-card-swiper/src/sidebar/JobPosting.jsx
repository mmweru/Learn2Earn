import InputField from '../components/InputField';
import { Label } from '@radix-ui/react-label';
import React from 'react'

const JobPosting = ({handleChange}) => {
  const now = new Date();
  const twentyForHoursAgo = new Date( now - 24 * 60 * 60 * 1000);
  const sevenDaysAgo = new Date( now - 7 * 60 * 60 * 1000);
  const thirtyDaysAgo = new Date( now - 30 * 60 * 60 * 1000);

  // convert date to string
   const twentyForHoursAgoDate = twentyForHoursAgo.toISOString().slice(0, 10);
   const sevenDaysAgoDate = sevenDaysAgo.toISOString().slice(0, 10);
   const thirtyDaysAgoDate = thirtyDaysAgo.toISOString().slice(0, 10);

  return (
    <div>
      <h4 className='text-lg font-medium mb-2'>Date of Posting</h4>
      <div>
        <Label className="sidebar-label-container">
            <input type="radio" name="test" id="test" value="" onChange={handleChange}/>
            <span className='checkmark'></span>ALL time
        </Label>
        <InputField handleChange={handleChange} value={twentyForHoursAgoDate} title="Last 24 hours" name="test"/>
        <InputField handleChange={handleChange} value={sevenDaysAgoDate} title="Last 7 days" name="test"/>
        <InputField handleChange={handleChange} value={thirtyDaysAgoDate} title="Last 30 Days" name="test"/>
      </div>
    </div>
  )
}

export default JobPosting;
