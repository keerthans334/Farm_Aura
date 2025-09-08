import React from 'react';
import '../styles/cards.css';

const CropStatus = () => (
  <div className="crop-status">
    <h3>Current Crop Status</h3>
    <div className="crop-details">
      <div className="crop-title">Winter Wheat</div>
      <div className="crop-stage">Growth Stage: Flowering</div>
      <div className="crop-progress">
        <div className="progress-bar">
          <div className="progress" style={{width: '65%'}}></div>
        </div>
        <div className="progress-meta">
          <span>12 days in current stage</span>
          <span>4.2 tons/hectare expected yield</span>
        </div>
      </div>
    </div>
  </div>
);

export default CropStatus;
