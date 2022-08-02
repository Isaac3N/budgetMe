import React, {useState, useEffect} from 'react';
import axiosInstance from '../../../../helpers/axios';

import {

	MdEdit,
	MdDelete,
} from "react-icons/md";
import Modal from "react-bootstrap/Modal";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { Link } from 'react-router-dom';

function DashboardCard13() {
  const [goals, setGoals] = useState([])
  const [show, setShow] = useState(false)
  const  [record, setRecord] = useState(null)
  useEffect(()=> {
    axiosInstance.get("/goals/")
    .then((res)=> {
        setGoals(res.data)
    }).catch(()=> {
        console.log("Something Went Wrong")
    })
  }, [])
  console.log("goal", goals)

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

  const renderListGroupItem = (t) => {
    return (            
      <li key={t.id} className="flex px-2">
        <div className="w-9 h-9 rounded-full shrink-0 bg-green-500 my-2 mr-3">
          <svg className="w-9 h-9 fill-current text-green-50" viewBox="0 0 36 36">
            <path d="M18.3 11.3l-1.4 1.4 4.3 4.3H11v2h10.2l-4.3 4.3 1.4 1.4L25 18z" />
          </svg>
        </div>
        <div className="grow flex items-center border-b border-slate-100 text-sm py-2">
          <div className="grow flex justify-between">
            <div className="self-center"> {t.goal} </div>
            <div className="shrink-0 self-start ml-2 flex items-center justify-center">
          
              <MdEdit style={{
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

            </div>
          </div>
        </div>
      </li>
    )
  }
  const completedGoals = goals.filter(t=> t.completed === true )
  const size =6
 
  const items = completedGoals.slice(0, size)
  console.log(items)

  return (
    <div className="col-span-full xl:col-span-6 bg-white shadow-lg rounded-sm border border-slate-200">
      <header className="px-5 py-4 border-b border-slate-100">
        <h2 className="font-semibold text-slate-800"><Link to={"/dashboard/goals"}>Completed Goals</Link></h2>
      </header>
      <div className="p-3">

        {/* Card content */}
        <div>
          <ul className="my-1">
            {items.map(renderListGroupItem)}
          </ul>
        </div>

      </div>
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
  );
}

export default DashboardCard13;
