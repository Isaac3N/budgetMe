import React, {useState, useEffect} from 'react'
import  Navbar  from  "../../navbar/Navbar"
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import axiosInstance from '../../../../helpers/axios';
import { FormControl } from '@mui/material';
import Form from "react-bootstrap/Form"
import moment from 'moment'
import MomentUtils from "@date-io/moment";

import Datepicker from 'flowbite-datepicker/Datepicker';
import "react-datepicker/dist/react-datepicker.css"

import 'moment-timezone';






const AddIncome = () => {

    const [getDate, setGetDate] = useState("2022-06-29");
    const [description, setDescription] = useState("")
    const [amount, setAmount] =  useState("")
    const [source, setSource] = useState("SALARY")


    const handleSubmit =(e) => {
        e.preventDefault()
    }


    const handleDateChange = (newDate) => {
        setGetDate(newDate);
      };


    let date = getDate
    let formattedDate =  moment(date).format('YYYY-DD-MM');
    console.log("check", formattedDate)

    console.log("date", getDate)

    const form = {
        "date": formattedDate,
        "description": description,
        "amount": amount,
        "source": source, 
    }

    console.log(form)

    const onSubmit= e => {
        axiosInstance.post("/income/", form)
        .then((res)=> {console.log(res)})
        .catch((err)=> {console.log(err)} )
    }

    const ariaLabel = { 'aria-label': 'description' };
    
  return (
    <div>
        <Navbar/>
        <Form onSubmit={handleSubmit} className='section-padding '>
            <div className="flex w-full text center gap-4 mb-8 sm:w-full md:w-2/3 lg:w-2/3 ">
            <TextField value={description || ""}  onChange={(e)=> {setDescription(e.target.value)}} fullWidth label="Description" id="Description" />
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
                    <Input value={amount|| ""}  onChange={(e)=> {setAmount(e.target.value)}}  placeholder="Amount e.g.(10000)" inputProps={ariaLabel} />
                </Box>
            </div>
            
            <div className="inline-block relative  mb-8 ">
                <select value={source|| ""}  onChange={(e)=> {setSource(e.target.value)}}  className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                    <option>SALARY</option>
                    <option>BUSINESS</option>
                    <option>SIDE-HUSTLES</option>
                    <option>BILLS</option>
                    <option>OTHERS</option>
                </select>
            </div>
            <div className='mb-8'>
            <div className="relative">
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <MobileDatePicker
                    label="Date mobile"
                    inputFormat="yyyy/MM/dd"
                    value={getDate}
                    onChange={handleDateChange}
                    renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
                    
            </div>
            </div>
            <button onClick={onSubmit} class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                Add Income
            </button>
        </Form>
    </div>
  )
}

export default AddIncome