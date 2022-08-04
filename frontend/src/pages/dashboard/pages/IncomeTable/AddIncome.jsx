import React, {useState, useEffect} from 'react'
import  Navbar  from  "../../navbar/Navbar"
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';
import axiosInstance from '../../../../helpers/axios';
import Form from "react-bootstrap/Form"
import moment from 'moment'
import "react-datepicker/dist/react-datepicker.css"
import {useNavigate} from 'react-router-dom'
import Typography from '@mui/material/Typography';

import 'moment-timezone';



const AddIncome = () => {

    const navigate = useNavigate()
    let defaultDate =  moment().format('YYYY-MM-DD');

    const [getDate, setGetDate] = useState(defaultDate);
    const [description, setDescription] = useState("")
    const [amount, setAmount] =  useState("0")
    const [source, setSource] = useState("SALARY")

    const [fieldErrors, setFieldErrors] = useState({});
    const [error, setError] = useState("")
    const [data, setData] = useState("")

    const handleSubmit =(e) => {
        e.preventDefault()
    }

    useEffect(() => {
        if (error) {
          for (const item in error) {
            setFieldErrors({ ...fieldErrors, [item]: error[item][0] });
          }
        }
      }, [error]);

      useEffect(() => {
        if (data) {
            navigate("../dashboard/income-table", { replace: true });
        }
        }, [data]);


    
    let date=getDate
    let formattedDate =  moment(date).format('YYYY-MM-DD');

    const handleDateChange = (newDate) => {
        setGetDate(newDate);
      };


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
        .then((res)=> setData(res.data))
        .catch((err)=> setError(err.response.data))

    }

    const ariaLabel = { 'aria-label': 'description' };
    
  return (
    <div>
        <Navbar/>
        <Form onSubmit={handleSubmit} className='section-padding '>
            <div className="flex w-full text center gap-4 mb-8 sm:w-full md:w-2/3 lg:w-2/3 ">
            <TextField value={description || ""}  onChange={(e)=> {setDescription(e.target.value)}} fullWidth label="Description(required)" id="Description" />
            </div>
            <Typography variant="caption" color='error.main' display="block" gutterBottom>
                {fieldErrors.description}
            </Typography>
            <div className='mb-8 mt-2'>
              
                    <Input value={amount|| ""} type='number'  onChange={(e)=> {setAmount(e.target.value)}}  placeholder="Amount e.g.(10000)" inputProps={ariaLabel} />
                    <Typography variant="caption" color='error.main' display="block" gutterBottom>
                        {fieldErrors.amount}
                    </Typography>
            </div>
            
            <div className="inline-block relative  mb-8 mt-2 ">
                <select value={source|| ""}  onChange={(e)=> {setSource(e.target.value)}}  className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                    <option>SALARY</option>
                    <option>BUSINESS</option>
                    <option>SIDE-HUSTLES</option>
                    <option>OTHERS</option>
                </select>
            </div>
            <div className='mb-8 mt-2'>
            <div className="relative">
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <MobileDatePicker
                label="Date mobile"
                inputFormat="yyyy/MM/dd"
                value={getDate || "2022-07-04"}
                onChange={handleDateChange}
                renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider>
                    
            </div>
            <Typography variant="caption" color='error.main' display="block" gutterBottom>
                {fieldErrors.date}
            </Typography>
            </div>
            <button onClick={onSubmit} class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                Add Income
            </button>
        </Form>
    </div>
  )
}

export default AddIncome