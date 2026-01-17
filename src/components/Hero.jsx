import React from 'react';

export default function Hero({ navigate = () => {} }) {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="eyebrow">Clinical Decision Support System</div>

        <h1 className="hero-title">
          Predict Antibiotic Risk
          <br />
          <span className="accent">Before Prescription</span>
        </h1>

        <p className="hero-sub">
          Helping doctors prioritize, predict, and decide—without replacing them.
          An explainable AI system that flags high-risk antibiotic prescriptions before the first dose.
        </p>

        <div className="hero-ctas">
          <button className="btn btn-primary" onClick={() => navigate('patient')}>Patient Portal →</button>
          <button className="btn btn-white" onClick={() => navigate('doctor')}>Doctor Portal →</button>
        </div>

        <div className="features-grid">
          <article className="card">
            <div className="card-icon">✅</div>
            <h4>Low-Risk Confirmation</h4>
            <p>Proceed with confidence when prescriptions are validated as low-risk for the patient.</p>
          </article>

          <article className="card">
            <div className="card-icon">⚠️</div>
            <h4>High-Risk Alerts</h4>
            <p>Clear warnings with explainable factors when antibiotic failure risk is elevated.</p>
          </article>

          <article className="card">
            <div className="card-icon">🛡️</div>
            <h4>Combat Resistance</h4>
            <p>Reduce unnecessary antibiotic misuse and slow the spread of antibiotic resistance.</p>
          </article>
        </div>
      </div>
    </section>
  );
}