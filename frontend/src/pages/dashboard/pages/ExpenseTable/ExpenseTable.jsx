import React, {useState, useEffect} from 'react';
import axiosInstance from '../../../../helpers/axios';
import { Link } from 'react-router-dom';




function ExpenseTable() {
  const [expense, setExpense] = useState([])
  

 
  useEffect(()=> {
    axiosInstance.get("/expense/")
    .then((res)=> {
        setExpense(res.data)
    }).catch(()=> {
        console.log("Something Went Wrong")
    })
  }, [])

  const handleDelete = (id) => {
    axiosInstance.delete(`/expense/${id}`)
    .then(()=> {const newexpense = expense.filter(t=> {
      return t.id !== id 
    }) 
    setExpense(newexpense)
    .catch(()=> {
      alert("something went wrong please try again")
    })
  })
  }





  const renderTableGroupItem = (t) => {
    return(
    <tbody className="text-sm font-medium divide-y divide-slate-100">
      <tr key={t.id}>
        <td className="p-2">
          <div className="flex items-center">
            <div className="text-slate-800">{t.description}</div>
          </div>
        </td>
        <td className="p-2">
          <div className="text-center">{t.category}</div>
        </td>
        <td className="p-2">
          <div className="text-center text-red-500">- #{t.amount}</div>
        </td>
        <td className="p-2">
          <div className="text-center">{t.date}</div>
        </td>
        <td className="p-2">
          <div className="text-center space-x-2 space-y-2">
            <button onClick={()=> {handleDelete(t.id)}} class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
                Delete
            </button>

          </div>
        </td>

      </tr>
    </tbody>
    )}




  return (
    
    <div className="col-span-full xl:col-span-12 bg-white rounded-sm section-padding">
      <header className="border-b border-slate-100">
        <h2 className="font-semibold text-slate-800">My Expense/ <Link to={"/dashboard/expense-table/add-expense"}>Add Expense</Link></h2>
        
      </header>

      <div className="p-3">

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            {/* Table header */}
            <thead className="text-xs uppercase text-slate-400 bg-slate-50 rounded-sm">
              <tr>
                <th className="p-2">
                  <div className="font-semibold text-left">Description</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Category</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Amount</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Date</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Manage Expense</div>
                </th>
              </tr>
            </thead>

              {expense.map(renderTableGroupItem)}
              
      
          </table>

        </div>
      </div>
    </div>
  );
}

export default ExpenseTable;