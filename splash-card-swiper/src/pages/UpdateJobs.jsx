import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import CreatableSelect from "react-select/creatable";

const UpdateJobs = () => {
  const { id } = useParams();
  const [jobData, setJobData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedOption, setSelectedOption] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const options = [
    { value: "JavaScript", label: "JavaScript" },
    { value: "C++", label: "C++" },
    { value: "HTML", label: "HTML" },
    { value: "CSS", label: "CSS" },
    { value: "Python", label: "Python" },
    { value: "Rust", label: "Rust" },
    { value: "Node", label: "Node" },
    { value: "MongoDB", label: "MongoDB" }
  ];

  const onSubmit = (data) => {
    data.skills = selectedOption; // Save selected skills to form data

    fetch(`http://localhost:5000/update-job/${id}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data)
    })
    .then((res) => res.json())
    .then((result) => {
      if (result.acknowledged === true) {
        alert("Job Updated Successfully!");
        reset(); // Reset form after successful update
      }
    })
    .catch((error) => {
      console.error("Error updating job:", error);
    });
  };

  useEffect(() => {
    fetch(`http://localhost:5000/all-jobs/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setJobData(data);
        setLoading(false);
        setSelectedOption(data.skills); // Preload skills for editing
      })
      .catch((error) => {
        console.error("Error fetching job data:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div>Loading...</div>;

  const { jobTitle, companyName, minPrice, maxPrice, salaryType, jobLocation, postingDate, experienceLevel, companyLogo, employmentType, description, postedBy } = jobData;

  return (
    <div className="text-primary max-w-screen-2xl container mx-auto xl:px-24 px-4">
      <div className="bg-[#FAFAFA] py-10 px-4 lg:px-16">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Job Title and Company Name */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Job Title</label>
              <input type="text" defaultValue={jobTitle} {...register("jobTitle")} className="create-job-input" />
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Company Name</label>
              <input type="text" defaultValue={companyName} {...register("companyName")} className="create-job-input" />
            </div>
          </div>

          {/* Salary Range */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Minimum Salary</label>
              <input type="text" defaultValue={minPrice} {...register("minPrice")} className="create-job-input" />
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Maximum Salary</label>
              <input type="text" defaultValue={maxPrice} {...register("maxPrice")} className="create-job-input" />
            </div>
          </div>

          {/* Salary Type and Location */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Salary Type</label>
              <select {...register("salaryType")} className="create-job-input" defaultValue={salaryType}>
                <option value="Hourly">Hourly</option>
                <option value="Monthly">Monthly</option>
                <option value="Yearly">Yearly</option>
              </select>
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Job Location</label>
              <input type="text" defaultValue={jobLocation} {...register("jobLocation")} className="create-job-input" />
            </div>
          </div>

          {/* Posting Date and Experience Level */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Job Posting Date</label>
              <input type="date" defaultValue={postingDate} {...register("postingDate")} className="create-job-input" />
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Experience Level</label>
              <select {...register("experienceLevel")} className="create-job-input" defaultValue={experienceLevel}>
                <option value="NoExperience">No Experience</option>
                <option value="Internship">Internship</option>
                <option value="Work Remotely">Work Remotely</option>
              </select>
            </div>
          </div>

          {/* Skills */}
          <div>
            <label className="block mb-2 text-lg">Required Skill Sets</label>
            <CreatableSelect
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              options={options}
              isMulti
              className="create-job-input py-4"
            />
          </div>

          {/* Company Logo and Employment Type */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Company Logo</label>
              <input type="url" defaultValue={companyLogo} {...register("companyLogo")} className="create-job-input" />
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Employment Type</label>
              <select {...register("employmentType")} className="create-job-input" defaultValue={employmentType}>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Temporary">Temporary</option>
              </select>
            </div>
          </div>

          {/* Job Description */}
          <div className="w-full">
            <label className="block mb-2 text-lg">Job Description</label>
            <textarea
              className="w-full pl-3 py-1.5 focus:outline-none placeholder:text-gray-700"
              rows={6}
              defaultValue={description}
              {...register("description")}
            />
          </div>

          {/* Job Posted By */}
          <div className="w-full">
            <label className="block mb-2 text-lg">Job Posted By</label>
            <input type="email" defaultValue={postedBy} {...register("postedBy")} className="create-job-input" />
          </div>

          {/* Submit Button */}
          <input
            type="submit"
            className="block mt-12 bg-blue-500 text-white font-semibold px-8 py-2 rounded-sm cursor-pointer"
            value="Update Job"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateJobs;
