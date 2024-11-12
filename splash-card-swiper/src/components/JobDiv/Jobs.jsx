import React from 'react'
import { BiTimeFive } from 'react-icons/bi'

import logo1 from '../../assets/logo (1).jpeg'
import logo2 from '../../assets/logo (3).jpeg'
import logo3 from '../../assets/logo (4).jpeg'
import logo4 from '../../assets/logo (2).jpeg'
import logo5 from '../../assets/linkedin.jpeg'
import logo6 from '../../assets/youtube.jpeg'
import logo7 from '../../assets/Khan Academy.jpeg'
import logo8 from '../../assets/coursera.jpeg'


const Data = [
  {
    id: 1,
    image: logo1,
    title: 'Web Developer',
    time: 'Now',
    location: 'Canada',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    company: 'Huawei Inc. Limited'
  },
  {
    id: 2,
    image: logo2,
    title: 'Software Engineer',
    time: '3hrs',
    location: 'Nigeria',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    company: 'Microsoft Inc. Limited'
  },
  {
    id: 3,
    image: logo3,
    title: 'Ui/UX Designer',
    time: '1hr',
    location: 'Remote',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    company: 'Adobe Company'
  },
  {
    id: 4,
    image: logo4,
    title: 'Product Manager',
    time: '1 day',
    location: 'Kenya',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    company: 'Google'
  },
  {
    id: 5,
    image: logo5,
    title: 'Social Media Intern',
    time: '12 min',
    location: 'Germany',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    company: 'LinkedIn Co.'
  },
  {
    id: 6,
    image: logo6,
    title: 'Content Creators',
    time: '2 sec',
    location: 'Remote',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    company: 'YouTube'
  },
  {
    id: 7,
    image: logo7,
    title: 'Coding Instructor',
    time: '45 min',
    location: 'India',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    company: 'Khan Academy'
  },
  {
    id: 8,
    image: logo8,
    title: 'Online Tutor',
    time: '5 min',
    location: 'Global',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    company: 'Coursera Co&'
  }
]

const Jobs = () => {
  return (
    <div>
      <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">
       
       {
        Data.map(({ id, image, title, time, location, desc, company }) => {
          return (
            <div key={id} className="group group/item singleJob w-[250px] p-[20px] bg-white rounded [10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg">

              <span className='flex justify-between items-center gap-4'>
                <h1 className='text-[16px] font-semibold text-textColor group-hover:text-white'>{title}</h1>
                <span className='flex items-center text-[#ccc] gap-1'>
                  <BiTimeFive />{time}
                </span>
              </span>

              <h6 className='text-[#ccc]'>{location}</h6>

              <p className='text-[13px] text-[#95959] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white'>
                {desc}
              </p>

              <div className='company flex items-center gap-2'>
                <img src={image} alt="Company Logo" className='w-[10%]' />
                <span className='text-[14px] py-[1rem] block group-hover:text-white'>{company}</span>
              </div>

              <button className='border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover/item:text-textColor group-hover:text-white'>
                Apply Now
              </button>

            </div>
          )
        })
       }

      </div>
    </div>
  )
}

export default Jobs
