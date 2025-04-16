import React, { useState, useEffect } from "react";
import { Search, MapPin, Briefcase } from "lucide-react";
import SalarySlider from "./ui/Slider";

const SearchBar = ({ onSearch }) => {
  const [searchTitle, setSearchTitle] = useState("");
  const [location, setLocation] = useState("");
  const [jobType, setJobType] = useState("");


  useEffect(() => {
    const delaySearch = setTimeout(() => {
      onSearch({ searchTitle, location, jobType });
    }, 300);  //debounce

    return () => clearTimeout(delaySearch);
  }, [searchTitle, location, jobType, onSearch]);

  return (
    <div className="flex flex-wrap justify-around items-center gap-4 py px-16 text-[#686868] text-sm ">
      {/* Job Title Search */}
      <div className="flex items-center gap-2 flex-grow min-w-[200px]">
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
      <div className="flex items-center gap-2 flex-grow min-w-[180px] border-l-2 border-l-[#EAEAEA] pl-4">
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
      <div className="flex items-center gap-2 flex-grow min-w-[150px] border-l-2 border-l-[#EAEAEA] pl-4">
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

      {/* (Optional) Salary Slider */}
      <SalarySlider />
    </div>
  );
};

export default SearchBar;
