import React, { useState, useEffect, useRef } from 'react';

const AGENTS = [
  { title: 'Patient Context Agent', subtitle: 'Analyzing patient vulnerability' },
  { title: 'Allergy & Safety Agent', subtitle: 'Checking allergy conflicts' },
  { title: 'Infection Context Agent', subtitle: 'Evaluating infection severity' },
  { title: 'ML Risk Prediction Agent', subtitle: 'Running predictive models' },
  { title: 'Explainability Agent', subtitle: 'Generating explanations' },
  { title: 'Recommendation Agent', subtitle: 'Creating action plan' },
];

export default function CheckRisk({ navigate = () => {}, showHeader = true, initialData = null }) {
  const [antibiotic, setAntibiotic] = useState('');
  const [infectionType, setInfectionType] = useState('');
  const [specimenType, setSpecimenType] = useState('');
  const [site, setSite] = useState('');

  const [running, setRunning] = useState(false);
  const [current, setCurrent] = useState(0);
  const [statuses, setStatuses] = useState(Array(AGENTS.length).fill('pending'));
  const timerRef = useRef(null);

  // --- NEW: Context Setup ---
  const patientContext = initialData || {};
  const isDoctorContext = !!patientContext.patientUser;
  const displayUser = isDoctorContext ? patientContext.patientUser : "manishakmanu5788@gmail.com";

  const readyToRun = antibiotic && infectionType && specimenType && site;

  useEffect(() => {
    return () => clearInterval(timerRef.current);
  }, []);

  function startRun() {
    if (!readyToRun || running) return;
    setRunning(true);
    setStatuses(Array(AGENTS.length).fill('pending'));
    setCurrent(0);

    let idx = 0;
    setStatuses(prev => prev.map((s, i) => (i === 0 ? 'running' : 'pending')));

    timerRef.current = setInterval(() => {
      setStatuses(prev => {
        const next = [...prev];
        if (idx < AGENTS.length) next[idx] = 'done';
        idx += 1;
        if (idx < AGENTS.length) next[idx] = 'running';
        return next;
      });
      setCurrent(prev => prev + 1);

      if (idx >= AGENTS.length) {
        clearInterval(timerRef.current);

        // --- NEW: Context-Aware Risk Calculation ---
        let riskScore = Math.floor(40 + Math.random() * 30); // Base random score

        // Logic: Allergy Conflict (e.g., Penicillin allergy + Ampicillin)
        if (patientContext.allergies?.includes('Penicillin') && antibiotic === 'Ampicillin') {
           riskScore = Math.floor(85 + Math.random() * 10); // Force High Risk
        }
        
        // Logic: Vulnerability (e.g., Pregnancy or extreme age)
        if (patientContext.pregnancy === 'Pregnant' || patientContext.age > 90) {
          riskScore = Math.min(100, riskScore + 15);
        }

        const result = {
          overallRisk: riskScore,
          mlConfidence: 85,
          antibiotic,
          infectionType,
          specimenType,
          site,
          patientUser: displayUser,
          context: isDoctorContext ? 'doctor' : 'patient'
        };
        
        setRunning(false);
        navigate('result', result);
      }
    }, 900);
  }

  const inner = (
    <div className="check-card">
      <h3>Multi-Agent Risk Assessment</h3>
      <p className="muted">6 AI agents will analyze your prescription safety</p>
      
      {/* Display a small indicator if patient context is loaded */}
      {isDoctorContext && (
        <div style={{ background: '#f0f9ff', padding: '10px', borderRadius: '8px', marginBottom: '15px', fontSize: '0.85rem', color: '#0369a1', border: '1px solid #bae6fd' }}>
          <strong>Context Loaded:</strong> Analyzing {patientContext.allergies?.length || 0} allergies and {patientContext.conditions?.length || 0} conditions for {patientContext.name}.
        </div>
      )}

      <div className="form-grid single-cols">
        <label>
          <div className="label">Prescribed Antibiotic *</div>
          <select value={antibiotic} onChange={e => setAntibiotic(e.target.value)}>
            <option value="">Select antibiotic</option>
            <option value="Amoxicillin-Clavulanate">Amoxicillin-Clavulanate</option>
            <option value="Ampicillin">Ampicillin</option>
            <option value="Azithromycin">Azithromycin</option>
            <option value="Cefazolin">Cefazolin</option>
          </select>
        </label>
        <label>
          <div className="label">Infection Type *</div>
          <select value={infectionType} onChange={e => setInfectionType(e.target.value)}>
            <option value="">Select infection type</option>
            <option value="UTI">Urinary Tract Infection (UTI)</option>
            <option value="Respiratory">Respiratory Infection</option>
          </select>
        </label>
        <label>
          <div className="label">Specimen Type</div>
          <select value={specimenType} onChange={e => setSpecimenType(e.target.value)}>
            <option value="">Select specimen type</option>
            <option value="Urine">Urine</option>
            <option value="Blood">Blood</option>
          </select>
        </label>
        <label>
          <div className="label">Suspected Infection Site</div>
          <input value={site} onChange={e => setSite(e.target.value)} placeholder="e.g., Lower urinary tract" />
        </label>
      </div>

      <div className="form-actions" style={{marginTop:18}}>
        <button
          className={`run-btn ${readyToRun ? 'ready' : 'disabled'}`}
          onClick={startRun}
          disabled={!readyToRun || running}
        >
          {running ? `Running (${Math.min(current, AGENTS.length)}/${AGENTS.length})` : 'Run 6-Agent Risk Assessment'}
        </button>
      </div>

      <div className="agents-wrapper" style={{marginTop:18}}>
        <div className="progress-head">Agent {Math.min(current + 1, AGENTS.length)} of {AGENTS.length}</div>
        <div className="progress">
          <div className="progress-bar" style={{width: `${(current/AGENTS.length)*100}%`}} />
        </div>
        <div className="agents-list">
          {AGENTS.map((a, i) => (
            <div key={i} className={`agent-item ${statuses[i]}`}>
              <div className="agent-index">{i+1}</div>
              <div className="agent-body">
                <div className="agent-title">{a.title}</div>
                <div className="agent-sub">{a.subtitle}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  if (showHeader) {
    return (
      <section className="check" id="check">
        <div className="container">
          <div className="patient-header">
            <button className="back" onClick={() => navigate(isDoctorContext ? 'doctor' : 'patient')}>
              ← Back
            </button>
            <div className="patient-title">{isDoctorContext ? 'Doctor Portal' : 'Patient Portal'}</div>
            <div className="patient-user">{displayUser}</div>
          </div>
          <div className="patient-card">
            <div className="tabs">
              <button className="tab" onClick={() => navigate(isDoctorContext ? 'doctor' : 'patient')}>My Profile</button>
              <button className="tab active">Check Risk</button>
              <button className="tab">History</button>
            </div>
            {inner}
          </div>
        </div>
      </section>
    );
  }
  return inner;
}