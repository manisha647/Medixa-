import React from 'react';

export default function HowItWorks() {
  return (
    <section className="how" id="how">
      <div className="container">
        <h2 className="how-title">How It Works</h2>
        <p className="how-sub">Designed for daily use in high-pressure, resource-limited settings with minimal data entry.</p>

        <div className="how-grid">
          <article className="how-card">
            <div className="how-badge">01</div>
            <div className="how-icon">👤</div>
            <h4>Enter Patient Data</h4>
            <p>Quick input of patient history, infection context, prior antibiotic exposure, and local resistance trends.</p>
          </article>

          <article className="how-card">
            <div className="how-badge">02</div>
            <div className="how-icon">🧠</div>
            <h4>AI Risk Analysis</h4>
            <p>Our explainable AI evaluates the selected antibiotic against patient-specific factors and resistance patterns.</p>
          </article>

          <article className="how-card">
            <div className="how-badge">03</div>
            <div className="how-icon">❗</div>
            <h4>Risk Classification</h4>
            <p>Binary classification (Low-Risk vs High-Risk) with clear, human-readable explanations for each prediction.</p>
          </article>

          <article className="how-card">
            <div className="how-badge">04</div>
            <div className="how-icon">🩺</div>
            <h4>Clinical Decision</h4>
            <p>Doctors receive actionable insights to confirm, reconsider, or monitor closely—maintaining full clinical control.</p>
          </article>
        </div>
      </div>
    </section>
  );
}
