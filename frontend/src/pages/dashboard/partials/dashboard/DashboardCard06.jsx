import React, {useEffect, useState} from 'react';
import DoughnutChart from '../../charts/DoughnutChart';


import axiosInstance from '../../../../helpers/axios';
import Chart from "chart.js/auto";
import moment from 'moment'
import { Line } from "react-chartjs-2";

// Import utilities
import { tailwindConfig } from '../../utils/Utils';


function DashboardCard06() {

  const [incomeData, setIncomeData] = useState([])
  const [income, setIncome] = useState([])



  useEffect(()=> {
    axiosInstance.get("/stats/income_source_data/")
    .then((res)=> {
        setIncomeData(res.data)
        
    })
    .catch(()=> {
        console.log("Something Went Wrong")
    })
  }, [])



  console.log("income", incomeData)


  const chartData = {
    labels: ['Us', 'Italy', 'Other'],
    datasets: [
      {
        label: 'How You Earn',
        data: [100,100,100]
        ,
        backgroundColor: [
          tailwindConfig().theme.colors.indigo[500],
          tailwindConfig().theme.colors.blue[400],
          tailwindConfig().theme.colors.indigo[800],
        ],
        hoverBackgroundColor: [
          tailwindConfig().theme.colors.indigo[600],
          tailwindConfig().theme.colors.blue[500],
          tailwindConfig().theme.colors.indigo[900],
        ],
        hoverBorderColor: tailwindConfig().theme.colors.white,
      },
    ],
  };

  return (
    <div className="flex flex-col col-span-full sm:col-span-3 xl:col-span-1/2 bg-white shadow-lg rounded-sm border border-slate-200">
      <header className="px-5 py-4 border-b border-slate-100">
        <h2 className="font-semibold text-slate-800">How You Earn</h2>
      </header>
      {/* Chart built with Chart.js 3 */}
      {/* Change the height attribute to adjust the chart height */}
      <DoughnutChart data={chartData} width={389} height={260} />
    </div>
  );
}

export default DashboardCard06;
