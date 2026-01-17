import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import PatientPortal from './components/PatientPortal';
import DoctorPortal from './components/DoctorPortal';
import CheckRisk from './components/CheckRisk';
import CheckResult from './components/CheckResult';
import './styles.css';

export default function App() {
  const [route, setRoute] = useState('home');
  const [lastResult, setLastResult] = useState(null);

  function navigate(to, payload) {
    if (payload) setLastResult(payload);
    setRoute(to);
    window.scrollTo(0, 0);
  }

  return (
    <>
      <Navbar navigate={navigate} />
      <main>
        {route === 'home' && (
          <>
            <Hero navigate={navigate} />
            <HowItWorks />
          </>
        )}

        {route === 'patient' && <PatientPortal navigate={navigate} />}
        {route === 'doctor' && <DoctorPortal navigate={navigate} />} 
        
        {/* Passes lastResult (username) to CheckRisk */}
        {route === 'check' && (
          <CheckRisk navigate={navigate} initialData={lastResult} />
        )}
        
        {/* Passes lastResult (simulation scores) to CheckResult */}
        {route === 'result' && (
          <CheckResult result={lastResult} navigate={navigate} />
        )}
      </main>
    </>
  );
}