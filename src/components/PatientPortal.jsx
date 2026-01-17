import React, { useState } from 'react';
import CheckRisk from './CheckRisk';

export default function PatientPortal({ navigate = () => {} }){
  const [activeTab, setActiveTab] = useState('profile');
  const [history] = useState([
    { id: 1, antibiotic: 'Ampicillin', infection: 'Skin/Soft Tissue Infection', risk: 'HIGH RISK' }
  ]);

  return (
    <section className="patient" id="patient">
      <div className="container">
        <div className="patient-header">
          <button className="back" onClick={() => navigate('home')}>← Back</button>
          <div className="patient-title">Patient Portal</div>
          <div className="patient-user">manishakmanu5788@gmail.com</div>
        </div>

        <div className="patient-card">
          <div className="tab-island-wrap">
            <div className="tab-island">
              <button
                className={`tab ${activeTab === 'profile' ? 'active' : ''}`}
                onClick={() => setActiveTab('profile')}
              >
                My Profile
              </button>

              <button
                className={`tab ${activeTab === 'check' ? 'active' : ''}`}
                onClick={() => setActiveTab('check')}
              >
                Check Risk
              </button>

              <button
                className={`tab ${activeTab === 'history' ? 'active' : ''}`}
                onClick={() => setActiveTab('history')}
              >
                History
              </button>
            </div>
          </div>

          {activeTab === 'profile' && (
            <form className="profile-form">
            <h3>Your Health Profile</h3>
            <p className="muted">Fill in your health information to get accurate risk assessments</p>

            <div className="form-grid">
              <label>
                <div className="label">Username *</div>
                <input placeholder="Create a unique username" />
              </label>

              <label>
                <div className="label">Full Name *</div>
                <input placeholder="Your full name" />
              </label>

              <label>
                <div className="label">Age</div>
                <input placeholder="Age in years" />
              </label>

              <label>
                <div className="label">Gender</div>
                <select>
                  <option>Select gender</option>
                  <option>Female</option>
                  <option>Male</option>
                  <option>Prefer not to say</option>
                </select>
              </label>

              <label>
                <div className="label">Weight (kg)</div>
                <input placeholder="Weight in kg" />
              </label>

              <label>
                <div className="label">Blood Type</div>
                <select>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                  <option value="Unknown">Unknown</option>
                </select>
              </label>

              <label className="full">
                <div className="label">Pregnancy Status</div>
                <select>
                  <option>Not Applicable</option>
                  <option>Pregnant</option>
                  <option>Postpartum</option>
                </select>
              </label>
            </div>

            <div className="section">
              <h4>Allergies</h4>
              <div className="row">
                <select>
                  <option value="">Select or type allergy</option>
                  <option value="Penicillin">Penicillin</option>
                  <option value="Sulfa">Sulfa</option>
                  <option value="Cephalosporins">Cephalosporins</option>
                  <option value="Fluoroquinolones">Fluoroquinolones</option>
                  <option value="Macrolides">Macrolides</option>
                  <option value="Tetracyclines">Tetracyclines</option>
                </select>
                <button className="btn btn-outline">+</button>
              </div>
            </div>

            <div className="section">
              <h4>Prior Antibiotic Exposure</h4>
              <div className="row">
                <select>
                  <option value="">Select antibiotic</option>
                  <option value="Amoxicillin">Amoxicillin</option>
                  <option value="Azithromycin">Azithromycin</option>
                  <option value="Ciprofloxacin">Ciprofloxacin</option>
                  <option value="Doxycycline">Doxycycline</option>
                  <option value="Metronidazole">Metronidazole</option>
                  <option value="Cephalexin">Cephalexin</option>
                  <option value="Clindamycin">Clindamycin</option>
                  <option value="Trimethoprim">Trimethoprim</option>
                </select>
                <button className="btn btn-outline" type="button">+</button>
              </div>
            </div>

            <div className="section">
              <h4>Chronic Conditions</h4>
              <div className="row">
                <input placeholder="e.g., Diabetes, Kidney Disease" />
                <button className="btn btn-outline" type="button">+</button>
              </div>
            </div>

            <div className="section">
              <h4>Recent Infection History</h4>
              <textarea placeholder="Describe any recent infections" rows={3}></textarea>
            </div>

            <div className="section">
              <h4>Chronic Diseases</h4>
              <div className="checkbox-grid">
                <label><input type="checkbox" /> Diabetes</label>
                <label><input type="checkbox" /> Hypertension (High BP)</label>
                <label><input type="checkbox" /> Thyroid Disorder</label>
                <label><input type="checkbox" /> Kidney Disease</label>
                <label><input type="checkbox" /> Liver Disease</label>
              </div>
            </div>

            <div className="section">
              <h4>Additional Health Information</h4>
              <div className="checkbox-grid single">
                <label><input type="checkbox" /> Immunocompromised (weakened immune system)</label>
                <label><input type="checkbox" /> Hospitalized in the last 90 days</label>
              </div>
            </div>

            <div className="form-actions">
              <button className="save-full" type="button" onClick={() => navigate('check')}>Save Information</button>
            </div>
            </form>
          )}

          {activeTab === 'history' && (
            <div className="history-section">
              <h3>Assessment History</h3>
              <p className="muted">Your previous antibiotic risk assessments</p>

              <div className="history-list">
                {history.map(item => (
                  <div key={item.id} className="history-card">
                    <div className="history-left">
                      <div className="history-antibiotic">{item.antibiotic}</div>
                      <div className="history-sub">{item.infection}</div>
                    </div>
                    <div className="history-right">
                      <div className={`risk-badge ${item.risk === 'HIGH RISK' ? 'high' : ''}`}>{item.risk}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          {activeTab === 'check' && (
            <div className="check-embed">
              <CheckRisk navigate={navigate} showHeader={false} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
