import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
                <h2 className='text-2xl font-bold text-center'>Dashboard</h2> 
                <Outlet></Outlet>
                {/* <!-- Page content here --> */}

            </div>
            <div class="drawer-side">
                <label for="dashboard-sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-45 bg-base-100 text-base-content">
                   {/*  <!-- Sidebar content here --> */}
                    <li><Link to='myorders'>My Orders</Link></li>
                    <li><Link to='addreview'>Add A Review</Link></li>
                    <li><Link to='myprofile'>My Profile</Link></li>
                    
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;