import React from 'react';
import '../styles/buttons.css';

const QuickActions = () => (
  <div className="quick-actions">
    <h3>Quick Actions</h3>
    <button className="action-btn">Scan for Pests</button>
    <button className="action-btn">Get Crop Advisory</button>
    <button className="action-btn">Check Market Prices</button>
    <button className="action-btn">Voice Assistant</button>
  </div>
);

export default QuickActions;
