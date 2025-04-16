import React, { useState } from "react";
import api from "../api.js";
import {  ChevronDown, Send } from "lucide-react";

const CreateJobForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    location: "",
    type: "FullTime",
    minSalary: "",
    salary: "",
    experience:"",
    deadline: "",
    description: "",
    logo:""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/job", formData);
      alert("Job posted successfully!");
    } catch (err) {
      alert("Failed to post job: " + err.message);
      console.error(err);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto bg-white rounded-2xl "
    >
      <h2 className="text-2xl font-semibold text-center">Create Job Opening</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block mb-1 text-sm font-medium">Job Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2 focus:outline-none"
            placeholder="Full Stack Developer"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium">Company Name</label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2 focus:outline-none "
            placeholder="Amazon, Microsoft, Swiggy"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium">Company Logo</label>
          <input
            type="text"
            name="logo"
            value={formData.logo}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2 focus:outline-none "
            placeholder="Amazonlogo.jpeg"
          />
        </div>
        <div>
          <label className="block mb-1 text-sm font-medium">Location</label>
          <select
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2 focus:outline-none "
          >
            <option value="">Choose Preferred Location</option>
            <option value="Remote">Remote</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Hyderabad">Hyderabad</option>
            <option value="Mumbai">Mumbai</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium">Job Type</label>
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2 focus:outline-none "
          >
            <option value="FullTime">FullTime</option>
            <option value="PartTime">PartTime</option>
            <option value="Internship">Internship</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium">Experience</label>
          <input
            type="text"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2 focus:outline-none "
            placeholder="Fresher,1 year , 2 years"
          />
        </div>

        <div className="flex gap-2">
          <div className="w-1/2">
            <label className="block mb-1 text-sm font-medium">Salary Range</label>
            <input
              type="number"
              name="minSalary"
              value={formData.minSalary}
              onChange={handleChange}
              placeholder="₹ 0"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none"
            />
          </div>



          <div className="w-1/2">
            <label className="block mb-1 invisible">.</label>
            <input
              type="number"
              name="salary"
              value={formData.salary}
              onChange={handleChange}
              placeholder="₹ 12,00,000"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none"
            />
          </div>
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium">Application Deadline</label>
          <div className="relative">
            <input
              type="date"
              name="deadline"
              value={formData.deadline}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2 focus:outline-none"
            />
          
          </div>
        </div>
      </div>

      <div>
        <label className="block mb-1 text-sm font-medium">Job Description</label>
        <textarea
          name="description"
          rows="4"
          value={formData.description}
          onChange={handleChange}
          placeholder="Please share a description to let the candidate know more about the job role"
          className="w-full border rounded-lg px-4 py-2 focus:outline-none text-gray-600"
        />
      </div>

      <div className="flex justify-between items-center">
        <button
          type="button"
          className="border rounded-lg px-6 py-2 font-medium flex items-center gap-1"
        >
          Save Draft <ChevronDown size={16} />
        </button>

        <button
          type="submit"
          className="bg-[#00AAFF] hover:bg-[#0095dd] text-white rounded-lg px-6 py-2 font-medium flex items-center gap-1"
        >
          Publish <Send size={16} />
        </button>
      </div>
    </form>
  );
};

export default CreateJobForm;
