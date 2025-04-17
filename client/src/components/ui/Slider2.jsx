import React from 'react';
import { Box, Slider } from '@mui/material';

const SalarySlider = ({ value, onChange }) => {
  const formatValue = (val) => {
    if (val >= 10000000) return '₹1Cr';
    if (val >= 100000) return `₹${val / 100000}L`;
    return `₹${val}`;
  };

  return (
    <Box width={250}>
      <span className='text-black font-medium text-sm'>Salary Per Month</span>
      <span className='text-black font-medium text-sm ml-6'>
        {formatValue(value[0])} - {formatValue(value[1])}
      </span>
      <Slider
        value={value}
        onChange={(e, newVal) => onChange(newVal)}
        min={100000}
        max={10000000}
        step={100000}
        valueLabelDisplay="off"
        getAriaLabel={() => 'Salary range'}
        getAriaValueText={(val) => `${val}`}
        sx={{
          color: 'black',
          height: 4,
          '& .MuiSlider-thumb': {
            width: 12,
            height: 12,
            backgroundColor: 'black',
            '&:hover, &.Mui-focusVisible, &.Mui-active': {
              boxShadow: 'none',
            },
          },
          '& .MuiSlider-rail': {
            color: '#ccc',
            opacity: 1,
            height: 2,
          },
        }}
      />
    </Box>
  );
};

export default SalarySlider;
