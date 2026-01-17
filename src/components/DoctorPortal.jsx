import React, { useState } from 'react';
import { Search, AlertCircle, ArrowLeft, User, Activity, History } from 'lucide-react';

export default function DoctorPortal({ navigate = () => {} }) {
  const [username, setUsername] = useState('');
  const [searchPerformed, setSearchPerformed] = useState(false);

  // This data object matches your screenshot and will be passed to CheckRisk
  const patientData = {
    name: 'John Doe',
    username: '@john_doe',
    age: 97,
    gender: 'Female',
    weight: '86 kg',
    bloodType: 'O+',
    pregnancy: 'Pregnant',
    allergies: ['Penicillin', 'Sulfa'],
    priorAntibiotics: ['Amoxicillin', 'Ciprofloxacin', 'Doxycycline'],
    conditions: ['Type 2 Diabetes']
  };

  const riskFlags = [
    { id: 1, drug: 'Cefazolin', user: '@john_doe', risk: '78%' },
    { id: 2, drug: 'Ampicillin', user: '@manisha_singh0108', risk: '88%' },
    { id: 3, drug: 'Cefazolin', user: '@john_doe', risk: '75%' },
    { id: 4, drug: 'Cefazolin', user: '@john_doe', risk: '78.3%' },
    { id: 5, drug: 'Ampicillin', user: '@john_doe', risk: '75%' },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    if (username.toLowerCase().includes('john')) {
      setSearchPerformed(true);
    }
  };

  return (
    <section className="portal-container">
      <div className="portal-header">
        <button className="back-link" onClick={() => navigate('home')}>
          <ArrowLeft size={18} /> Back
        </button>
        <div className="portal-brand">
          <div className="brand-shield">🛡️</div>
          <h2>Doctor Portal</h2>
        </div>
        <div className="doctor-name">Dr. Manisha Kumari</div>
      </div>

      <div className="portal-grid">
        <div className="main-content-area">
          <div className="lookup-card">
            <div className="lookup-title-row">
              <Search size={20} />
              <h3>Patient Lookup</h3>
            </div>
            <p className="lookup-hint">Enter patient username to view history and perform risk assessment</p>
            <form className="search-input-group" onSubmit={handleSearch}>
              <input 
                type="text" 
                placeholder="Enter patient username..." 
                className="portal-input"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <button type="submit" className="portal-search-btn">
                <Search size={20} color="white" />
              </button>
            </form>
          </div>

          {searchPerformed && (
            <div className="patient-details-wrapper animate-fade-in">
              <div className="portal-tabs">
                <button className="p-tab active"><User size={16}/> Patient Info</button>
                <button 
                  className="p-tab" 
                  onClick={() => navigate('check', { patientUser: username, ...patientData })}
                >
                  <Activity size={16}/> Assess Risk
                </button>
                <button className="p-tab"><History size={16}/> History</button>
              </div>

              <div className="info-card">
                <div className="info-header">
                  <div className="info-title">
                    <h3>{patientData.name}</h3>
                    <span className="user-badge">{patientData.username}</span>
                  </div>
                </div>

                <div className="info-grid">
                  <div className="info-col">
                    <div className="data-point"><label>AGE</label><span>{patientData.age}</span></div>
                    <div className="data-point"><label>GENDER</label><span>{patientData.gender}</span></div>
                    <div className="data-point"><label>WEIGHT</label><span>{patientData.weight}</span></div>
                    <div className="data-point"><label>BLOOD TYPE</label><span>{patientData.bloodType}</span></div>
                    <div className="data-point"><label>PREGNANCY STATUS</label><span>{patientData.pregnancy}</span></div>
                  </div>

                  <div className="info-col">
                    <label className="section-label">ALLERGIES</label>
                    <div className="tag-row">
                      {patientData.allergies.map(a => <span key={a} className="tag tag-red">{a}</span>)}
                    </div>

                    <label className="section-label">PRIOR ANTIBIOTICS</label>
                    <div className="tag-row">
                      {patientData.priorAntibiotics.map(a => <span key={a} className="tag tag-blue">{a}</span>)}
                    </div>

                    <label className="section-label">CHRONIC CONDITIONS</label>
                    <div className="tag-row">
                      {patientData.conditions.map(c => <span key={c} className="tag tag-orange">{c}</span>)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <aside className="portal-sidebar">
          <div className="risk-sidebar">
            <div className="sidebar-title">
              <AlertCircle size={20} color="#b91c1c" />
              <h3>Recent High-Risk Flags</h3>
            </div>
            <div className="flag-list">
              {riskFlags.map((item) => (
                <div key={item.id} className="flag-card">
                  <div className="flag-drug">{item.drug}</div>
                  <div className="flag-username">{item.user}</div>
                  <div className="flag-score">Risk: {item.risk}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="quick-tips-card">
             <h4>Quick Tips</h4>
             <p>• High-risk alerts require confirmation or alternative consideration</p>
          </div>
        </aside>
      </div>
    </section>
  );
}