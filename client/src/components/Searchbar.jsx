import React, { useState, useEffect } from "react";
import { Search, MapPin, Briefcase, Filter } from "lucide-react";
import SalarySlider from "./ui/Slider";

const SearchBarWithFilters = ({ onSearch }) => {
  const [searchTitle, setSearchTitle] = useState("");
  const [location, setLocation] = useState("");
  const [jobType, setJobType] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    const delaySearch = setTimeout(() => {
      onSearch({ searchTitle, location, jobType });
    }, 300); // debounce

    return () => clearTimeout(delaySearch);
  }, [searchTitle, location, jobType, onSearch]);

  return (
    <div className="flex">
      {/* Left Sidebar - Filters Icon */}
      <div className="hidden md:flex flex-col items-end p-4 w-16 bg-gray-200">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center justify-center p-2 bg-gray-300 rounded-full"
        >
          <Filter className="w-6 h-6 text-gray-700" />
        </button>
      </div>

      {/* Main Content Area */}
      <div className="flex-grow p-4 md:w-1/3">
        {/* Search Bar */}
        <div className="flex items-center gap-2 mb-4">
          <Search className="h-5 w-5" />
          <input
            type="text"
            placeholder="Search By Job Title, Role"
            value={searchTitle}
            onChange={(e) => setSearchTitle(e.target.value)}
            className="w-full outline-none border-none p-2"
          />
        </div>

        {/* Filter Options (visible when toggled) */}
        <div
          className={`${
            showFilters ? "flex" : "hidden"
          } flex-col gap-4 bg-gray-100 p-4 rounded-lg`}
        >
          {/* Location Filter */}
          <div className="flex items-center gap-2 min-w-[180px]">
            <MapPin className="h-5 w-5" />
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="outline-none border-none text-sm font-medium bg-transparent"
            >
              <option value="">Preferred Location</option>
              <option value="bangalore">Bangalore</option>
              <option value="delhi">Delhi</option>
              <option value="remote">Remote</option>
            </select>
          </div>

          {/* Job Type Filter */}
          <div className="flex items-center gap-2 min-w-[150px]">
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
          <div className="w-full">
            <SalarySlider />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBarWithFilters;
