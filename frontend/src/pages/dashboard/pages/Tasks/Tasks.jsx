import 'bootstrap/dist/css/bootstrap.min.css';

import React, {useState, useEffect} from 'react'
import Container from "react-bootstrap/Container"
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import axiosInstance from "../../../../helpers/axios"

const Tasks = () => {
    const [goals, setGoals] = useState([])
    useEffect(()=> {
        axiosInstance.get("/goals/")
        .then((res)=> {
            setGoals(res.data)
        }).catch(()=> {
            alert("Something Went Wrong")
        })
    }, [])
  return (
    <div className='section-padding'>

            <TaskForm goals={goals} setGoals={setGoals}/>
            <TaskList goals={goals} setGoals={setGoals}/>

    </div>
  )
}

export default Tasks