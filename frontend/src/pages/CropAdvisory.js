import React from 'react';
import '../styles/cards.css';

const CropAdvisory = () => (
  <div className="crop-advisory-page">
    <header className="advisory-header">
      <h1>Crop Advisory</h1>
      <p className="advisory-subtitle">AI-powered recommendations for your crops</p>
      <div className="advisory-crop-status">
        <div className="crop-stage-title">
          <span className="crop-icon">🌾</span>
          <span className="crop-name">Winter Wheat - Flowering Stage</span>
        </div>
        <div className="crop-status-cards">
          <div className="status-card planted">
            <span>Planted</span>
            <span>Nov 15, 2024</span>
          </div>
          <div className="status-card harvest">
            <span>Expected Harvest</span>
            <span>Apr 15, 2025</span>
          </div>
          <div className="status-card investment">
            <span>Investment</span>
            <span>₹45,000/hectare</span>
          </div>
          <div className="status-card revenue">
            <span>Expected Revenue</span>
            <span>₹95,000/hectare</span>
          </div>
        </div>
        <button className="voice-advisory-btn">Voice Advisory</button>
      </div>
    </header>

    <section className="advisory-recommendations">
      <h2>Personalized Recommendations</h2>
      <div className="recommendation-card high-priority">
        <div className="recommendation-header">
          <span className="recommendation-icon">🧪</span>
          <span className="recommendation-title">Nitrogen Fertilizer Application</span>
          <span className="priority-tag high">HIGH PRIORITY</span>
        </div>
        <p>Apply 40kg/hectare of Urea fertilizer within next 3 days for optimal wheat growth during flowering stage.</p>
        <div className="recommendation-details">
          <div className="benefit">Expected Benefit<br/><span>15-20% yield increase</span></div>
          <div className="cost">Cost<br/><span>₹2,400/hectare</span></div>
          <div className="timeframe">Timeframe<br/><span>Next 3 days</span></div>
        </div>
        <div className="recommendation-actions">
          <button className="apply-btn">Apply Recommendation</button>
          <button className="explain-btn">Explain Why</button>
          <button className="not-applicable-btn">Not Applicable</button>
        </div>
        <div className="recommendation-why">
          <span>Why this matters:</span> Soil nitrogen levels are low (120 ppm) and rain is expected in 4 days, making immediate application crucial for absorption.
        </div>
      </div>

      <div className="recommendation-card medium-priority">
        <div className="recommendation-header">
          <span className="recommendation-icon">💧</span>
          <span className="recommendation-title">Irrigation Schedule</span>
          <span className="priority-tag medium">MEDIUM PRIORITY</span>
        </div>
        <p>Schedule light irrigation (2-3 inches) after fertilizer application. Avoid overwatering during flowering.</p>
        <div className="recommendation-details">
          <div className="benefit">Expected Benefit<br/><span>Better grain formation</span></div>
          <div className="cost">Cost<br/><span>₹300/hectare</span></div>
          <div className="timeframe">Timeframe<br/><span>After fertilizer application</span></div>
        </div>
        <div className="recommendation-actions">
          <button className="apply-btn">Apply Recommendation</button>
          <button className="explain-btn">Explain Why</button>
          <button className="not-applicable-btn">Not Applicable</button>
        </div>
        <div className="recommendation-why">
          <span>Why this matters:</span> Soil moisture is at 45% and flowering stage requires consistent but not excessive water for optimal grain development.
        </div>
      </div>

      <div className="recommendation-card medium-priority">
        <div className="recommendation-header">
          <span className="recommendation-icon">🦟</span>
          <span className="recommendation-title">Pest Monitoring</span>
          <span className="priority-tag medium">MEDIUM PRIORITY</span>
        </div>
        <p>Increase monitoring for aphids and rust diseases. Weather conditions are favorable for pest activity.</p>
        <div className="recommendation-details">
          <div className="benefit">Expected Benefit<br/><span>Prevent 10-15% yield loss</span></div>
          <div className="cost">Cost<br/><span>₹200/hectare</span></div>
          <div className="timeframe">Timeframe<br/><span>Weekly monitoring</span></div>
        </div>
        <div className="recommendation-actions">
          <button className="apply-btn">Apply Recommendation</button>
          <button className="explain-btn">Explain Why</button>
          <button className="not-applicable-btn">Not Applicable</button>
        </div>
        <div className="recommendation-why">
          <span>Why this matters:</span> Temperature (22-28°C) and humidity (65%) create ideal conditions for aphid reproduction and rust spore germination.
        </div>
      </div>
    </section>

    <section className="advisory-cost-benefit">
      <h2>Cost-Benefit Analysis</h2>
      <div className="cost-benefit-bar">
        <div className="profit-bar" style={{width: '80%'}}></div>
      </div>
      <div className="cost-benefit-details">
        <div className="profit">+₹15,020<br/><span>Additional Profit</span></div>
        <div className="investment">₹2,900<br/><span>Extra Investment</span></div>
        <div className="roi">518%<br/><span>Return on Investment</span></div>
      </div>
      <div className="cost-benefit-bottom-line">
        <strong>Bottom Line:</strong> Following these recommendations costs just ₹2,900 more but could increase your profit by ₹15,020 - that's a 518% return on your additional investment!
      </div>
    </section>
  </div>
);

export default CropAdvisory;
