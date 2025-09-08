import React from 'react';
import '../styles/cards.css';

const DashboardCard = ({ icon, title, value, subtitle }) => (
  <div className="dashboard-card dashboard-card-modern">
    <div className="card-icon-bg">
      <span className="card-icon">{icon}</span>
    </div>
    <div className="card-content">
      <div className="card-title">{title}</div>
      <div className="card-value-row">
        <span className="card-value">{value}</span>
        {subtitle && <span className="card-subtitle">{subtitle}</span>}
      </div>
    </div>
  </div>
);

export default DashboardCard;
