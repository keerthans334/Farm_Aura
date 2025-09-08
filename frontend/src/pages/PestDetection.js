import React from 'react';
import '../styles/cards.css';
import '../styles/pestdetection.css';

const PestDetection = () => (
  <div className="pest-detection-page">
    <header className="pest-header">
      <h1>Pest & Disease Detection</h1>
      <p className="pest-subtitle">Upload crop images for AI-powered pest identification</p>
    </header>

    <section className="upload-section">
      <h2 className="upload-title"><span className="upload-icon">📷</span> Upload Crop Image</h2>
      <div className="upload-box">
        <div className="upload-image-icon">
          <span role="img" aria-label="upload"> <svg width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="24" cy="24" r="24" fill="#EAF7EA"/><path d="M24 14a1 1 0 0 1 1 1v10.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-5 5a1 1 0 0 1-1.414 0l-5-5a1 1 0 1 1 1.414-1.414L23 25.586V15a1 1 0 0 1 1-1Z" fill="#4CAF50"/></svg></span>
        </div>
        <div className="upload-instructions">
          <strong>Upload a crop image</strong>
          <p>Take a clear photo of affected leaves, stems, or crops for accurate pest detection</p>
        </div>
        <div className="upload-actions">
          <button className="take-photo-btn"> <span role="img" aria-label="camera">📷</span> Take Photo</button>
          <button className="upload-file-btn"> <span role="img" aria-label="upload">⤴️</span> Upload File</button>
        </div>
      </div>
    </section>

    <section className="recent-scans-section">
      <h2>Recent Scans</h2>
      <div className="scan-card">
        <div className="scan-icon"> <span role="img" aria-label="bug">🪲</span> </div>
        <div className="scan-info">
          <div className="scan-title">Aphids</div>
          <div className="scan-desc">Neem oil spray recommended</div>
          <div className="scan-time">2 hours ago</div>
        </div>
        <div className="scan-status">
          <span className="severity medium">Medium</span>
          <span className="confidence">92%</span>
        </div>
        <div className="scan-actions">
          <button className="view-details-btn">View Details</button>
          <button className="get-treatment-btn">Get Treatment</button>
        </div>
      </div>
      <div className="scan-card">
        <div className="scan-icon"> <span role="img" aria-label="leaf">🪴</span> </div>
        <div className="scan-info">
          <div className="scan-title">Healthy Crop</div>
          <div className="scan-desc">Continue regular monitoring</div>
          <div className="scan-time">1 day ago</div>
        </div>
        <div className="scan-status">
          <span className="severity none">None</span>
          <span className="confidence">88%</span>
        </div>
        <div className="scan-actions">
          <button className="view-details-btn">View Details</button>
        </div>
      </div>
    </section>

    <section className="photography-tips-section">
      <h2>Photography Tips</h2>
      <div className="tips-container">
        <div className="tips-best">
          <div className="tips-title best"><span role="img" aria-label="check">✅</span> Best Practices</div>
          <ul>
            <li>Take photos in good natural light</li>
            <li>Focus on affected areas clearly</li>
            <li>Include some healthy parts for comparison</li>
            <li>Hold camera steady to avoid blur</li>
          </ul>
        </div>
        <div className="tips-avoid">
          <div className="tips-title avoid"><span role="img" aria-label="cross">❌</span> Avoid These</div>
          <ul>
            <li>Blurry or too dark images</li>
            <li>Photos taken from too far away</li>
            <li>Images with heavy shadows</li>
            <li>Multiple different issues in one photo</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
);

export default PestDetection;
