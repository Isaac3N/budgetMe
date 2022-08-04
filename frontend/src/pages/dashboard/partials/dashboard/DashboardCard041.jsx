import React, {useEffect, useState} from 'react';

import axiosInstance from '../../../../helpers/axios';
import Chart from "chart.js/auto";
import moment from 'moment'
import { Line, Bar } from "react-chartjs-2";

// Import utilities
import { tailwindConfig } from '../../utils/Utils';

function DashboardCard041() {


  const [expense, setExpense] = useState([])

  useEffect(()=> {
    axiosInstance.get("/expense/")
    .then((res)=> {
        setExpense(res.data)
    }).catch(()=> {
        console.log("Something Went Wrong")
    })
  }, [])


  const expense_date = expense.map(a=> 
    moment(a.date).format('DD-MM-YYYY')
  )

  const expense_amount = expense.map(a=> a.amount)


  const chartData = {
    labels: expense_date,
    datasets: [
      //Blue bars
      {
        label: 'Your Expenses',
        data: expense_amount,
        backgroundColor: tailwindConfig().theme.colors.red[500],
        hoverBackgroundColor: tailwindConfig().theme.colors.red[600],
        barPercentage: 0.66,
        categoryPercentage: 0.66,
      },
    ],
  };

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 bg-white shadow-lg rounded-sm border border-slate-200">
      <header className="px-5 py-4 border-b border-slate-100">
        <h2 className="font-semibold text-slate-800">Your Expenses</h2>
      </header>
      {/* Chart built with Chart.js 3 */}
      {/* Change the height attribute to adjust the chart height */}
      <Bar data={chartData} width={595} height={248} />
    </div>
  );
}

export default DashboardCard041;
