import React from 'react';

export default function CheckResult({ result = {}, navigate = () => {} }) {
  const overall = result.overallRisk ?? 88;
  const confidence = result.mlConfidence ?? 85;
  const antibiotic = result.antibiotic ?? 'Ampicillin';

  return (
    <section className="result" id="result">
      <div className="container">
        <div className="tab-island-wrap">
          <div className="tab-island">
            <button className="tab" onClick={() => navigate('patient')}>My Profile</button>
            <button className="tab active" onClick={() => navigate('patient')}>Check Risk</button>
            <button className="tab" onClick={() => navigate('patient')}>History</button>
          </div>
        </div>
        <div className="patient-card">
          <div className="result-banner high">
            <div>
              <div className="result-title">HIGH RISK DETECTED</div>
              <div className="result-sub">Multi-Agent Risk Assessment Complete</div>
            </div>
            <div className="result-score">{overall}%<div className="result-label">Overall Risk</div></div>
          </div>

          <div className="result-summary">
            <div className="summary-left">
              <div className="small">Antibiotic Assessed</div>
              <div className="antibiotic">{antibiotic}</div>
              <div className="muted">Class: Penicillins</div>
            </div>
            <div className="summary-right">
              <div className="small">ML Confidence</div>
              <div className="ml-score">{confidence}%</div>
            </div>
          </div>

          <div className="agent-results">
            <div className="agent-card">
              <div className="agent-head">
                <div>
                  <div className="agent-title">Agent 1: Patient Context</div>
                  <div className="muted">Patient vulnerability assessment</div>
                </div>
              </div>
              <div className="agent-body">
                <div className="small">Vulnerability Score</div>
                <div className="vscore">70/100</div>
                <div className="muted">Risk Flags:</div>
                <ul className="flags">
                  <li>Age 80</li>
                  <li>Diabetes</li>
                  <li>Chronic condition</li>
                </ul>
              </div>
            </div>

            <div className="agent-card">
              <div className="agent-head">
                <div>
                  <div className="agent-title">Agent 2: Allergy & Safety</div>
                  <div className="muted">Allergy conflict detection</div>
                </div>
              </div>
              <div className="agent-body">
                <div className="ok">✓ No direct allergy conflicts detected</div>
                <div className="muted">Cross-Reactivity Warnings:</div>
                <ul className="warnings">
                  <li>Potential cross-reactivity with other Penicillins (e.g., Amoxicillin)</li>
                  <li>Potential cross-reactivity with Cephalosporins (up to 10%)</li>
                </ul>
              </div>
            </div>

            <div className="agent-card">
              <div className="agent-head">
                <div>
                  <div className="agent-title">Agent 3: Infection Context</div>
                  <div className="muted">Infection severity analysis</div>
                </div>
                <div className="severity-badge">MODERATE</div>
              </div>
              <div className="agent-body">
                <div className="small">Infection Severity</div>
                <div className="muted">Context Notes:</div>
                <ul className="context-notes">
                  <li>Sputum specimen indicates pulmonary involvement; potential for aspiration pneumonia or systemic infection.</li>
                  <li>Skin/soft tissue infection raises concern for associated deeper infections or abscess formation.</li>
                  <li>Typical pathogens may include Staphylococcus aureus or Streptococcus species, which could complicate the clinical picture if systemic spread occurs.</li>
                  <li>Lack of specified site limits assessment of severity, making it difficult to determine potential complications.</li>
                </ul>
              </div>
            </div>

            <div className="agent-card ml-agent">
              <div className="agent-head">
                <div>
                  <div className="agent-title">Agent 4: ML Risk Prediction</div>
                  <div className="muted">Machine learning analysis</div>
                </div>
              </div>
              <div className="agent-body">
                <div className="ml-grid">
                  <div className="ml-box">
                    <div className="ml-label">Risk Probability</div>
                    <div className="ml-value">72%</div>
                  </div>
                  <div className="ml-box">
                    <div className="ml-label">Model Confidence</div>
                    <div className="ml-value">85%</div>
                  </div>
                </div>
                <div className="muted">Model: Ensemble (Isolation Forest + XGBoost) analyzing 3 patient factors, 0 allergy conflicts, and infection severity patterns.</div>
              </div>
            </div>

            <div className="agent-card explain-agent">
              <div className="agent-head">
                <div>
                  <div className="agent-title">Agent 5: Explainability</div>
                  <div className="muted">Why this risk score?</div>
                </div>
              </div>
              <div className="agent-body">
                <ol className="explain-list">
                  <li>The risk score of 88 indicates a high likelihood of serious health complications due to the patient's advanced age of 80, which increases vulnerability to infections and other medical conditions.</li>
                  <li>The presence of diabetes and a chronic condition further elevates the patient's risk level, as these factors can impair immune function and healing, making infections harder to manage.</li>
                  <li>Moderate infection severity coupled with laboratory findings suggesting pulmonary involvement raises concern for potentially severe conditions such as aspiration pneumonia or systemic infection, which can have serious outcomes.</li>
                  <li>Potential cross-reactivity with other antibiotics, particularly with Penicillins and Cephalosporins, may complicate treatment choices, as the patient may not tolerate certain medications effectively.</li>
                  <li>The lack of a clearly defined infection site makes it challenging to assess the extent and severity of the infection, increasing the uncertainty of potential complications and further justifying the high risk score.</li>
                </ol>
              </div>
            </div>

            <div className="agent-card">
              <div className="agent-head">
                <div>
                  <div className="agent-title">Agent 6: Clinical Recommendations</div>
                  <div className="muted">Actionable guidance</div>
                </div>
              </div>
              <div className="agent-body">
                <div className="small">Alternative Antibiotic Classes to Consider:</div>
                <div className="alt-classes">
                  <span className="pill">Cephalosporins</span>
                  <span className="pill">Macrolides</span>
                  <span className="pill">Tetracyclines</span>
                  <span className="pill">Glycopeptides</span>
                  <span className="pill">Aminoglycosides</span>
                </div>

                <div className="small" style={{marginTop:12}}>Clinical Guidance:</div>
                <div className="guidance-box">
                  Given the high risk level associated with Ampicillin and the potential for cross-reactivity with other Penicillins and Cephalosporins, it is crucial to weigh the risks and benefits of continuing with Ampicillin. Consider consulting with an infectious disease specialist if necessary, particularly given the moderate severity of the infection.
                </div>

                <div className="small" style={{marginTop:12}}>Next Steps:</div>
                <ol className="next-steps">
                  <li><span className="step-num">1</span> Review the patient's full medical history for any other allergies or contraindications.</li>
                  <li><span className="step-num">2</span> Consider the alternatives provided and discuss with the patient to determine preference and any concerns.</li>
                  <li><span className="step-num">3</span> Monitor the patient closely for any signs of allergic reactions or adverse effects if Ampicillin is administered.</li>
                </ol>

                <div className="disclaimer">
                  <strong>Disclaimer:</strong> This is decision support, not a prescription. Final clinical decisions rest with the treating physician based on full patient context and local resistance patterns.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
