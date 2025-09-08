import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/sidebar.css';

const sidebarLinks = [
  { name: 'Dashboard', path: '/', icon: '🏠' },
  { name: 'Crop Advisory', path: '/crop-advisory', icon: '🌾' },
 { name: 'Pest Detection', path: '/pest-detection', icon: '🪲' },
  { name: 'Soil & Fertilizer', path: '/soil-fertilizer', icon: '🧪' },
  { name: 'Market Prices', path: '/market-prices', icon: '📈' },
  { name: 'Alerts', path: '/alerts', icon: '🔔' },
  { name: 'Community', path: '/community', icon: '💬' },
  { name: 'Settings', path: '/settings', icon: '⚙️' },
];

const officerLinks = [
  { name: 'Region Insights', path: '/region-insights', icon: '📍' },
  { name: 'Analytics', path: '/analytics', icon: '📊' },
];

const Sidebar = () => {
  const location = useLocation();
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <span className="logo">CropAdvisor</span>
        <span className="subtitle">Smart Farming</span>
      </div>
      <div className="sidebar-section-title">Main</div>
      <nav className="sidebar-nav">
        <ul>
          {sidebarLinks.map(link => (
            <li key={link.name} className={location.pathname === link.path ? 'active' : ''}>
              <Link to={link.path} className="sidebar-link">
                <span className="sidebar-icon">{link.icon}</span>
                <span className="sidebar-text">{link.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="sidebar-section-title officer">Officer Tools</div>
      <nav className="sidebar-nav">
        <ul>
          {officerLinks.map(link => (
            <li key={link.name} className={location.pathname === link.path ? 'active' : ''}>
              <Link to={link.path} className="sidebar-link">
                <span className="sidebar-icon">{link.icon}</span>
                <span className="sidebar-text">{link.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
