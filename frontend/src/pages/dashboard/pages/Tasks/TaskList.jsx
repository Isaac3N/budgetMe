import React from 'react'
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
        return <ListGroup.Item key={t.id} className="d-flex justify-content-between align-items-center">
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
            <span style={{marginRight: "12px", cursor: "pointer"}}>
                <MdEdit  style={{
                    cursor: "pointer",
                    
                }}/>

                <MdDelete style={{
                    cursor: "pointer"
                }}/>

            </span>



            
        </ListGroup.Item>
    }
  return (
    <div>
        <ListGroup>
            {goals.map(renderListGroupItem)}
            
        </ListGroup>
    </div>
  )
}

export default TaskList