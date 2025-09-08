import React from 'react';
import '../styles/cards.css';

const DashboardCard = ({ icon, title, value, subtitle }) => (
  <div className="dashboard-card">
    <div className="card-icon">{icon}</div>
    <div className="card-content">
      <div className="card-title">{title}</div>
      <div className="card-value">{value}</div>
      {subtitle && <div className="card-subtitle">{subtitle}</div>}
    </div>
  </div>
);

export default DashboardCard;
