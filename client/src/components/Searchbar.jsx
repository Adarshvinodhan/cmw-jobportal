import React, { useState, useEffect } from "react";
import { Search, MapPin, Briefcase, Filter } from "lucide-react";
// import SalarySlider from "./ui/Slider";
import SalarySlider2 from "./ui/Slider2";

const SearchBar = ({ onSearch }) => {
  const [searchTitle, setSearchTitle] = useState("");
  const [location, setLocation] = useState("");
  const [jobType, setJobType] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [salaryRange, setSalaryRange] = useState([1, 10000000]);


  useEffect(() => {
    const delaySearch = setTimeout(() => {
      onSearch({ searchTitle, location, jobType, salaryRange });
    }, 300);

    return () => clearTimeout(delaySearch);
  }, [searchTitle, location, jobType, salaryRange, onSearch]);

  return (
    <div className="px-4 md:px-16 py-2 mt-2 mb-2 text-[#686868] text-sm shadow-md bg-white">
  
      {/* Mobile Search Bar + Filter Icon */}
      <div className="flex md:hidden items-center gap-3 mb-4">
        <div className="flex items-center gap-2 flex-grow bg-[#F5F5F5] px-3 py-2 rounded-md">
          <Search className="h-5 w-5" />
          <input
            type="text"
            placeholder="Search by job title, role"
            value={searchTitle}
            onChange={(e) => setSearchTitle(e.target.value)}
            className="w-full outline-none border-none bg-transparent"
          />
        </div>
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="p-2 bg-[#F5F5F5] rounded-md"
        >
          <Filter className="w-5 h-5 text-[#686868]" />
        </button>
      </div>
  
      {/* Filter Options */}
      <div
        className={`${
          showFilters ? "flex" : "hidden"
        } flex-col gap-4 md:flex md:flex-row md:flex-wrap md:justify-around md:items-center`}
      >
        {/* Job Title Search (Visible on desktop only) */}
        <div className="hidden md:flex items-center gap-2 flex-grow min-w-[200px]">
          <Search className="h-5 w-5" />
          <input
            type="text"
            placeholder="Search By Job Title, Role"
            value={searchTitle}
            onChange={(e) => setSearchTitle(e.target.value)}
            className="w-full outline-none border-none"
          />
        </div>
  
        {/* Location Filter */}
        <div className="flex items-center gap-2 flex-grow min-w-[180px] md:border-l-2 border-[#EAEAEA] md:pl-4">
          <MapPin className="h-5 w-5" />
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="outline-none border-none text-[#686868] text-sm font-medium bg-transparent"
          >
            <option value="">Preferred Location</option>
            <option value="bangalore">Bangalore</option>
            <option value="delhi">Delhi</option>
            <option value="remote">Remote</option>
          </select>
        </div>
  
        {/* Job Type Filter */}
        <div className="flex items-center gap-2 flex-grow min-w-[150px] md:border-l-2 border-[#EAEAEA] md:pl-4">
          <Briefcase className="h-5 w-5" />
          <select
            value={jobType}
            onChange={(e) => setJobType(e.target.value)}
            className="outline-none border-none font-medium bg-transparent"
          >
            <option value="">Job type</option>
            <option value="fulltime">Full-Time</option>
            <option value="parttime">Part-Time</option>
            <option value="internship">Internship</option>
          </select>
        </div>
  
        {/* Salary Slider */}
        <div className="w-full md:w-auto md:border-l-2 border-[#EAEAEA] md:px-6">
          <SalarySlider2 value={salaryRange} onChange={setSalaryRange}/>
        </div>
      </div>
    </div>
  );
  
};

export default SearchBar;
