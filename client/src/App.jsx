import React, { useEffect, useState } from 'react';
import axios from './api.js'; 
import JobCard from './components/Card.jsx';
import Navbar from './components/Navbar.jsx';
import SearchBar from './components/Searchbar.jsx';

function App() {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log(import.meta.env.VITE_API_URL); 

  useEffect(() => {
    axios.get("/jobs")
      .then(res => {
        setJobs(res.data);
        setFilteredJobs(res.data); // default to show all
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching jobs:", err);
        setLoading(false);
      });
  }, []);

  const handleSearch = ({ searchTitle, location, jobType }) => {
    const filtered = jobs.filter(job => {
      const matchTitle = searchTitle
        ? job.title.toLowerCase().includes(searchTitle.toLowerCase())
        : true;
      const matchLocation = location
        ? job.location.toLowerCase() === location.toLowerCase()
        : true;
      const matchType = jobType
        ? job.type.toLowerCase() === jobType.toLowerCase()
        : true;

      return matchTitle && matchLocation && matchType;
    });

    setFilteredJobs(filtered);
  };

  return (
    <div className="bg-gray-50 h-screen flex flex-col">
      <Navbar />
      <SearchBar onSearch={handleSearch} />

      <div className="px-16 py-4 flex-grow overflow-auto">
        {loading ? (
          <p className="text-center text-gray-500 mt-10">Loading jobs...</p>
        ) : filteredJobs.length === 0 ? (
          <p className="text-center text-gray-500 mt-10">No jobs found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredJobs.map(job => (
              <JobCard key={job._id} job={job} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;