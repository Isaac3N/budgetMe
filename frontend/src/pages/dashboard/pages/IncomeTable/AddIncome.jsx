import React from 'react'
import  Navbar  from  "../../navbar/Navbar"

import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';


const AddIncome = () => {

    const [value, setValue] = React.useState(new Date('2014-08-18T21:11:54'));

    const handleChange = (newValue) => {
      setValue(newValue);
    };
    const ariaLabel = { 'aria-label': 'description' };
    
  return (
    <div>
        <Navbar/>
        <div className='section-padding '>
            <div className="flex w-full text center gap-4 mb-8 sm:w-full md:w-2/3 lg:w-2/3 ">
            <TextField fullWidth label="Description" id="Description" />
            </div>
            <div className='mb-8'>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1 },
                    }}
                    noValidate
                    autoComplete="off"
                    >
                    <Input placeholder="Amount e.g.(10000)" inputProps={ariaLabel} />
                </Box>
            </div>
            
            <div className="inline-block relative  mb-8 ">
                <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                </select>
            </div>
            <div className='mb-8'>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <MobileDatePicker
                    label="Date"
                    inputFormat="yyyy/MM/dd"
                    value={value}
                    onChange={handleChange}
                    renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider>
            </div>
            <button  class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                Add Income
            </button>
        </div>
    </div>
  )
}

export default AddIncome