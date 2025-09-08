import React from 'react';
import Sidebar from '../components/Sidebar';
import DashboardCard from '../components/DashboardCard';
import CropStatus from '../components/CropStatus';
import WeatherForecast from '../components/WeatherForecast';
import Alerts from '../components/Alerts';
import QuickActions from '../components/QuickActions';
import '../styles/layout.css';

const Dashboard = () => (
  <div className="dashboard-layout">
    <Sidebar />
    <main className="dashboard-main">
      <div className="dashboard-header">
        <h1>Good morning, Ramesh! <span role="img" aria-label="wheat">🌾</span></h1>
        <span className="location">Ludhiana, Punjab</span>
        <span className="date">Saturday 6 Sept</span>
      </div>
      <div className="dashboard-cards-row">
        <DashboardCard title="Temperature" value="32°C" />
        <DashboardCard title="Soil Moisture" value="68%" />
        <DashboardCard title="Wheat Price" value="₹2,240" subtitle="↑8%" />
        <DashboardCard title="Active Crops" value="3" />
      </div>
      <CropStatus />
      <div className="dashboard-row">
        <WeatherForecast />
        <Alerts />
      </div>
      <QuickActions />
    </main>
  </div>
);

export default Dashboard;
