import React, {useState, useEffect} from 'react';
import axiosInstance from '../../../../helpers/axios';
import { Link } from 'react-router-dom';

function DashboardCard07() {
  const [income, setIncome] = useState([])

  useEffect(()=> {
    axiosInstance.get("/income/")
    .then((res)=> {
        setIncome(res.data)
    }).catch(()=> {
        console.log("Something Went Wrong")
    })
  }, [])


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
          <div className="text-center">{t.source}</div>
        </td>
        <td className="p-2">
          <div className="text-center text-green-500">+${t.amount}</div>
        </td>
        <td className="p-2">
          <div className="text-center">{t.date}</div>
        </td>

      </tr>
    </tbody>
    )}

  const size = 6

  const items = income.slice(0, size)



  return (
    <div className="col-span-full xl:col-span-12 bg-white shadow-lg rounded-sm border border-slate-200">
      <header className="px-5 py-4 border-b border-slate-100">
        <h2 className="font-semibold text-slate-800"><Link to={"/dashboard/income-table/"}>MyIncome/</Link> <Link to={"/dashboard/income-table/add-income"}>Add Income</Link></h2>
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
                  <div className="font-semibold text-center">Source</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Amount</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Date</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            
              {/* Row */}
              {items.map(renderTableGroupItem)}
              
      
          </table>

        </div>
      </div>
    </div>
  );
}

export default DashboardCard07;