import React from "react";
import { Briefcase, MapPin, Layers, Clock, Users } from "lucide-react";

const JobCard = ({ job }) => {
  const logoUrl = job.logo || `/google.svg`;

  return (
    <div className="w-[300px] h-[360px] p-4 relative  flex flex-col bg-white rounded-md shadow-md">
      {/* Time tag */}
      <div className="absolute top-3 right-3 bg-[#B0D9FF] text-xs font-medium py-1.5 px-2 rounded-md">
        24h Ago
      </div>

      {/* Logo */}
      <div className="absolute top-9 left-6">
        <img
          src={logoUrl}
          alt={job.company}
          className="w-16 h-16 rounded-md object-contain bg-white  p-1"
        />
      </div>

      {/* Job Title */}
      <div className="mt-24 left-3 py-4">
        <h3 className="text-xl font-bold">{job.title}</h3>
      </div>

      {/* Info row */}
      <div className="flex items-center text-sm text-gray-500 space-x-3 mb-3">
        <span className="flex items-center gap-1 font-medium text-[#5A5A5A]">
          <Users size={14} /> {job.experience}
        </span>
        <span className="flex items-center gap-1 font-medium text-[#5A5A5A]">
          <Briefcase size={14} /> {job.type}
        </span>
        <span className="flex items-center gap-1 font-medium text-[#5A5A5A]">
          <Layers size={14} /> {job.salary}
        </span>
      </div>

      {/* Description */}
      <ul className="text-sm font-medium text-[#555555] list-disc pl-5 mb-4 space-y-1">
        {job.description
          ?.split(".")
          .filter((sentence) => sentence.trim() !== "")
          .map((sentence, idx) => (
            <li key={idx}>{sentence.trim()}.</li>
          ))}
      </ul>

      <button className="mt-auto w-full bg-[#00AAFF] text-white text-sm font-medium py-3 rounded-xl">
        Apply Now
      </button>
    </div>
  );
};

export default JobCard;
