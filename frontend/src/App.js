import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/colors.css';
import './styles/layout.css';
import './styles/cards.css';
import './styles/sidebar.css';
import './styles/buttons.css';
import './styles/pestdetection.css';

const Dashboard = lazy(() => import('./pages/Dashboard'));
const CropAdvisory = lazy(() => import('./pages/CropAdvisory'));
const PestDetection = lazy(() => import('./pages/PestDetection'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/crop-advisory" element={<CropAdvisory />} />
          <Route path="/pest-detection" element={<PestDetection />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
