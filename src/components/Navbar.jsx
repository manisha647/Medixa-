import React from 'react';

export default function Navbar({ navigate = () => {} }) {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <div className="brand">
          <div className="logo">🔷</div>
          <div className="brand-text">
            <div className="brand-name">AntiBiotiX AI</div>
            <div className="brand-sub">Clinical Decision Support</div>
          </div>
        </div>

        <nav className="nav-links">
          <button className="btn btn-outline" onClick={() => navigate('patient')}>Patient Portal</button>
          <button className="btn btn-ghost" onClick={() => navigate('doctor')}>Doctor Portal</button>
        </nav>
      </div>
    </header>
  );
}