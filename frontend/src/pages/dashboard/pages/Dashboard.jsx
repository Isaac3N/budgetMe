import React from 'react';



import DashboardCard01 from "../partials/dashboard/DashboardCard01"
import DashboardCard02 from '../partials/dashboard/DashboardCard02';
import DashboardCard03 from '../partials/dashboard/DashboardCard03';
import DashboardCard04 from '../partials/dashboard/DashboardCard04';
import DashboardCard06 from '../partials/dashboard/DashboardCard06';

import DashboardCard07 from '../partials/dashboard/DashboardCard07';

import DashboardCard12 from '../partials/dashboard/DashboardCard12';
import DashboardCard13 from '../partials/dashboard/DashboardCard13';
import Banner from '../banner/Banner';
import Navbar  from '../../dashboard/navbar/Navbar';

function Dashboard() {



  return (
    <div className="flex h-screen overflow-hidden gradient-bg budgetme-blog">


      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
       
        <main>
          <Navbar/>
          <div className="w-full max-w-9xl mx-auto ">


            {/* Cards */}
            <div className="grid grid-cols-12 gap-6 section-padding">

              {/* Line chart (Acme Plus) */}
              <DashboardCard01 />
              {/* Line chart (Acme Advanced) */}
              <DashboardCard02 />
              {/* Line chart (Acme Professional) */}
              <DashboardCard03 />
              {/* Table (Top Channels) */}
              <DashboardCard07 />
              {/* Bar chart (Direct vs Indirect) */}
              <DashboardCard04 />
              {/* Line chart (Real Time Value) */}
              <DashboardCard06 /> <DashboardCard06 />
              

              {/* Table (Top Channels) */}
              <DashboardCard07 />

              {/* Card (Recent Activity) */}
              <DashboardCard12 />
              {/* Card (Income/Expenses) */}
              <DashboardCard13 />
              
            </div>

          </div>
        </main>

        <Banner />

      </div>
    </div>
  );
}

export default Dashboard;