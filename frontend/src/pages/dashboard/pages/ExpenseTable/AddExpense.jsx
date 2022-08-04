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
import Typography from '@mui/material/Typography';
import {useNavigate} from 'react-router-dom'


import 'moment-timezone';



const AddExpense = () => {

    const navigate = useNavigate()
    let defaultDate =  moment().format('YYYY-MM-DD');

    const [getDate, setGetDate] = useState(defaultDate);
    const [description, setDescription] = useState("")
    const [amount, setAmount] =  useState("0")
    const [category, setCategory] = useState("FOOD")

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
            navigate("../dashboard/expense-table", { replace: true });
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
        "category": category, 
    }

    console.log(form)

    const onSubmit= e => {
        axiosInstance.post("/expense/", form)
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
            </div>
            <Typography variant="caption" color='error.main' display="block" gutterBottom>
                {fieldErrors.amount}
            </Typography>
            
            <div className="inline-block relative mt-2 mb-8 ">
                <select value={category|| ""}  onChange={(e)=> {setCategory(e.target.value)}}  className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                    <option>ONLINE_SERVICES</option>
                    <option>TRAVEL</option>
                    <option>FOOD</option>
                    <option>ENTERTAINMENT</option>
                    <option>RENT</option>
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
            <Typography variant="caption" color='error.main' display="block" gutterBottom>
                {fieldErrors.date}
            </Typography>
            </div>
            <button onClick={onSubmit} class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                Add Expense
            </button>
        </Form>
    </div>
  )
}

export default AddExpense