import React, {useState} from 'react'

import InputGroup from "react-bootstrap/FormControl"
import FormControl from "react-bootstrap/FormControl"
import Form from "react-bootstrap/Form"
import Button from 'react-bootstrap/Button'
import axiosInstance from '../../../../helpers/axios'

const TaskForm = ({goals, setGoals}) => {

    const [goal, setGoal] = useState("")
    const handleChange = e => {
        setGoal(e.target.value)
    }
    const handleSubmit = e => {
        e.preventDefault()
        if(!goal){
            alert("Please provide a value for Your Goals")
            return
        }
        axiosInstance.post("/goals/", {
            goal: goal
        }).then ((res)=> {
            setGoal("")
            const {data} = res;
            setGoals([...goals, data]).catch(()=> {
                alert("Something Went Wrong Please Try Again")
            })
        })
    }
    


  return (
    <Form onSubmit={handleSubmit}>
        <FormControl onChange={handleChange} value={goal}  className='mb-4 mt-4' placeholder='Set New Goal'/>
  
        <Button type="submit"  variant="outline-primary mb-4">Add Goal</Button>

    </Form>
    
  )
  
}


export default TaskForm