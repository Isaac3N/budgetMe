import React, { useState } from 'react'
import ListGroup from "react-bootstrap/ListGroup"
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";



import {
	MdCheckBox,
	MdCheckBoxOutlineBlank,
	MdEdit,
	MdDelete,
} from "react-icons/md";
import axiosInstance from '../../../../helpers/axios';

const TaskList = ({goals = [], setGoals}) => {
    const [show, setShow] = useState(false)
    const  [record, setRecord] = useState(null)

    const handleClose = () => {
        setShow(false);
    }

    const handleDelete = (id) => {
        axiosInstance.delete(`/goals/${id}`)
        .then(()=> {
            const newGoals = goals.filter(t=> {
                return t.id !== id
            })
            setGoals(newGoals)
        }).catch(()=>{
            alert('Something went wrong please try again')
        })

    }

    const handleUpdate = async (id, value) => {
        return axiosInstance.patch(`/goals/${id}`, value)
        .then((res)=> {
            const {data} = res;
            const newGoals = goals.map(t => {
                if(t.id===id){
                    return data
                }
                return t 
            })
            setGoals(newGoals)
        }).catch (()=> {
            alert("Something went wrong");
        })
    }

    const renderListGroupItem = (t) => {
        return <ListGroup.Item key={t.id}  className="d-flex justify-content-between align-items-center">
            <div className='d-flex justify-content-center'>
                <span style={{marginRight: "12px", cursor: "pointer"}} onClick={()=> {
                    handleUpdate(t.id, {
                        completed: !t.completed
                    })
                }}>
                    {t.completed === true ?<MdCheckBox/>: <MdCheckBoxOutlineBlank/> }
                </span>
                <span>{t.goal}</span>
            </div>
            <span className="shrink-0 self-start ml-2 flex items-center justify-center" style={{marginRight: "12px", cursor: "pointer"}}>
                <MdEdit  style={{
                    cursor: "pointer",
                    marginRight: "12px" 
                    
                }} onClick={()=> {
                    setRecord(t)
                    setShow(true)
                }}/>

                <MdDelete style={{
                    cursor: "pointer",
                }} onClick = {()=> {
                    handleDelete(t.id)
                }}/>

            </span>
           
        </ListGroup.Item>
    }
    const handleChange= (e) => {
        setRecord({
            ...record,
            goal: e.target.value 
        })
    }
    const handleSaveChanges = async () => {
        await handleUpdate(record.id, {goal: record.goal})
        handleClose()
    }
    const completedGoals = goals.filter(t=> t.completed === true )
    const incompleteGoals = goals.filter (t=> t.completed === false )
    console.log("completed Goals", completedGoals)

  return (
    <div>

        <div className="mb-4 mt-4">
            Incomplete Goals ({incompleteGoals.length})
        </div>
        <ListGroup>
            {incompleteGoals.map(renderListGroupItem)}    
        </ListGroup>
        <div className="mb-4 mt-4">
            Completed Goals ({completedGoals.length})
        </div>
        <ListGroup>
            {completedGoals.map(renderListGroupItem)}      
        </ListGroup>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header>
                
                <Modal.Title>Update Goal</Modal.Title>
                <Button type="button" className="close" variant="outline-secondary"  onClick={handleClose} data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></Button>
            </Modal.Header>

            <Modal.Body>
                <FormControl value={record ? record.goal: ""}
                onChange = {handleChange}
                />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-primary mb-4" onClick={handleSaveChanges}>
                    Save Updates
                </Button>
            </Modal.Footer>
        </Modal>
    </div>
  )
}

export default TaskList