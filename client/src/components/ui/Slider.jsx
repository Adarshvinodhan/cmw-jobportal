import React, { useState, useRef } from "react";
import { motion } from "framer-motion";

const MIN = 15000;
const MAX = 500000;

const SalarySlider = () => {
  const [minVal, setMinVal] = useState(MIN);
  const [maxVal, setMaxVal] = useState(MAX);

  const sliderRef = useRef(null);

  const getPercent = (value) => ((value - MIN) / (MAX - MIN)) * 100;

  return (
    <div className="flex flex-col min-w-[180px] border-l-2 border-l-[#EAEAEA] pl-4">
      <label className="font-medium  mb-1">Salary Per Month</label>

      <div className="relative h-3 mt-2 mb-4" ref={sliderRef}>
        {/* Slider Track */}
        <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-300 rounded transform -translate-y-1/2" />
        {/* Selected Range Track */}
        <motion.div
          className="absolute top-1/2 h-1 bg-[#000000] rounded transform -translate-y-1/2"
          initial={false}
          animate={{
            left: `${getPercent(minVal)}%`,
            width: `${getPercent(maxVal) - getPercent(minVal)}%`,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />

        {/* Min Thumb */}
        <motion.input
          type="range"
          min={MIN}
          max={MAX}
          step={1000}
          value={minVal}
          onChange={(e) => {
            const value = Math.min(Number(e.target.value), maxVal - 1000);
            setMinVal(value);
          }}
          className="absolute top-0 left-0 w-full h-full appearance-none bg-transparent
            [&::-webkit-slider-thumb]:appearance-none
            [&::-webkit-slider-thumb]:w-3
            [&::-webkit-slider-thumb]:h-3
            [&::-webkit-slider-thumb]:bg-[#000000]
            [&::-webkit-slider-thumb]:rounded-full
            [&::-webkit-slider-thumb]:cursor-pointer
            pointer-events-auto z-10"
        />

        {/* Max Thumb */}
        <motion.input
          type="range"
          min={MIN}
          max={MAX}
          step={1000}
          value={maxVal}
          onChange={(e) => {
            const value = Math.max(Number(e.target.value), minVal + 1000);
            setMaxVal(value);
          }}
          className="absolute top-0 left-0 w-full h-full appearance-none bg-transparent
            [&::-webkit-slider-thumb]:appearance-none
            [&::-webkit-slider-thumb]:w-3
            [&::-webkit-slider-thumb]:h-3
            [&::-webkit-slider-thumb]:bg-[#000000]
            [&::-webkit-slider-thumb]:rounded-full
            [&::-webkit-slider-thumb]:cursor-pointer
            pointer-events-auto z-10"
        />
      </div>

      <div className="text-[#686868] font-medium text-xs">
        ₹{(minVal / 1000).toFixed(0)}k - ₹{(maxVal / 1000).toFixed(0)}k
      </div>
    </div>
  );
};

export default SalarySlider;