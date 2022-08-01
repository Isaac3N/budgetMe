import React, {useState} from 'react'

import InputGroup from "react-bootstrap/FormControl"
import FormControl from "react-bootstrap/FormControl"
import Form from "react-bootstrap/Form"
import Button from 'react-bootstrap/Button'

const TaskForm = () => {
    const [name, setName] = useState("")
    const handleChange = e => {
        setName(e.target.value)
    }

  return (
    <Form>
        <InputGroup className='mb-4 mt-4' onChange={handleChange} value={name}  placeholder='New task'/>
  
        <Button variant="outline-primary mb-4">Add Task</Button>

    </Form>
    
  )
  
}


export default TaskForm