import React from 'react';
import '../styles/cards.css';

const Alerts = () => (
  <div className="alerts">
    <h3>Recent Alerts</h3>
    <div className="alert-card pest">
      <span className="alert-title">⚠️ Pest Alert</span>
      <span className="alert-desc">Aphid activity detected in your region. Check crops and consider treatment.</span>
      <span className="alert-meta">2 hours ago</span>
    </div>
    <div className="alert-card market">
      <span className="alert-title">💰 Market Update</span>
      <span className="alert-desc">Wheat prices increased by 8% in local mandi. Good time to sell.</span>
      <span className="alert-meta">4 hours ago</span>
    </div>
    <div className="alert-card fertilizer">
      <span className="alert-title">✅ Fertilizer Success</span>
      <span className="alert-desc">Successfully applied DAP fertilizer as recommended.</span>
      <span className="alert-meta">1 day ago</span>
    </div>
  </div>
);

export default Alerts;
