import React, { useState, useEffect } from "react";
import { Search, MapPin, Briefcase, Filter } from "lucide-react";
import SalarySlider from "./ui/Slider";

const SearchBar = ({ onSearch }) => {
  const [searchTitle, setSearchTitle] = useState("");
  const [location, setLocation] = useState("");
  const [jobType, setJobType] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    const delaySearch = setTimeout(() => {
      onSearch({ searchTitle, location, jobType });
    }, 300);

    return () => clearTimeout(delaySearch);
  }, [searchTitle, location, jobType, onSearch]);

  return (
    <div className="px-4 md:px-16 py-4 text-[#686868] text-sm">
      {/* Mobile Filter Button */}
      <div className="flex justify-end items-center md:hidden mb-4">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center gap-1 text-[#686868]"
        >
          <Filter className="w-5 h-5" />
          <span>Filters</span>
        </button>
      </div>

      {/* Filter Options */}
      <div
        className={`${
          showFilters ? "flex" : "hidden"
        } flex-col gap-4 md:flex md:flex-row md:flex-wrap md:justify-around md:items-center`}
      >
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
        <div className="w-full md:w-auto">
          <SalarySlider />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
