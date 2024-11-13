import PageHeader from '../components/PageHeader'
import React, { useEffect, useState } from 'react'

const Salary = () => {
  const [searchText, setSearchText ] = useState("");
  const [salary, setSalary ] = useState([]);

  useEffect(() => {
    fetch("/salary.json")
      .then(res => res.json())
      .then(data => {
        console.log("Fetched data:", data); // Debug log to verify data
        setSalary(data);
      })
      .catch(error => console.error("Error fetching salary data:", error));
  }, [searchText]);

  const handleSearch = () => {
    const filter = salary.filter(
      (job) => job.title.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
    );
    console.log("Filtered data:", filter); // Debug log to verify filtering
    setSalary(filter);
  };
  
  return (
    <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>
       <PageHeader title={"Estimate Salary"} path={"Salary"} />
       <div className="mt-5">
         <div className="search-box p-2 text-center mb-2">
           <input
             type="text"
             name="search"
             id="search"
             className='py-2 pl-3 border focus:outline-none lg:w-6/12 mb-4 w-full text-black'
             onChange={e => setSearchText(e.target.value)}
           />
           <button onClick={handleSearch} className='bg-blue-500 text-white font-semibold px-8 py-2 rounded-sm mb-4'>
             Search
           </button>
         </div>
       </div>
       {/* salary display cards */}
       <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-12 my-12 items-center"> {/* Added border for debugging */}
        {
            salary.length > 0 ? salary.map((data) => (
                <div key={data.id} className="shadow px-4 py-8">
                    <h4 className='text-black font-semibold text-xl'>{data.title}</h4>
                    <p className='text-blue-600 text-lg my-2 font-medium'>{data.salary}</p>
                    <div className='flex flex-wrap gap-4 text-black'>
                        <a href="/jobs" className='underline'>{data.status}</a>
                        <a href="/jobs" className='underline'>{data.skills}</a>

                    </div>
                </div>
            )) : (
              <p className="text-red-500">No data available</p> // Message if no data to display
            )
        }
       </div>
    </div>
  );
}

export default Salary;
