import React, {useEffect, useState} from 'react';
import axiosInstance from '../../../../helpers/axios';
import Chart from "chart.js/auto";
import moment from 'moment'
import { Line, Bar } from "react-chartjs-2";

// Import utilities
import { tailwindConfig } from '../../utils/Utils';

function DashboardCard04() {

  const [income, setIncome] = useState([])



  useEffect(()=> {
    axiosInstance.get("/income/")
    .then((res)=> {
        setIncome(res.data)
    }).catch(()=> {
        console.log("Something Went Wrong")
    })
  }, [])

  const income_date = income.map(a=> 
    moment(a.date).format('DD-MM-YYYY')
  )

  const income_amount = income.map(a=> a.amount)

  const chartData = {
    labels:  income_date,
    datasets: [
      // Light blue bars
      {
        label: 'Your Income',
        data: income_amount,
        backgroundColor: tailwindConfig().theme.colors.green[400],
        hoverBackgroundColor: tailwindConfig().theme.colors.green[500],
        barPercentage: 0.66,
        categoryPercentage: 0.66,
      },
    ],
  };

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 bg-white shadow-lg rounded-sm border border-slate-200">
      <header className="px-5 py-4 border-b border-slate-100">
        <h2 className="font-semibold text-slate-800">Your Income</h2>
      </header>
      {/* Chart built with Chart.js 3 */}
      {/* Change the height attribute to adjust the chart height */}
      <Bar data={chartData} width={595} height={248} />
    </div>
  );
}

export default DashboardCard04;
