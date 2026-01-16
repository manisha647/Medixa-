# Medixa-
An antibiotic prediction application 
MEDIXA is an explainable clinical decision-support system designed to reduce antibiotic failure and slow antimicrobial resistance at the most critical moment: the first prescription.
In emergency wards and resource-limited clinics, antibiotics are often prescribed before lab results arrive. A wrong first choice can harm patients and accelerate long-term resistance. MEDIXA addresses this gap by predicting the risk of antibiotic failure before prescription.

🔍 What MEDIXA Does
Evaluates whether a chosen antibiotic is likely to fail for a specific patient
Frames the problem as binary risk prediction: Low Risk / High Risk
Flags high-risk prescriptions only, avoiding alert fatigue
Provides clear, human-readable explanations for every alert

📊 How It Works
MEDIXA uses:
Patient history
Infection context
Prior antibiotic exposure
Local resistance patterns
The system does not recommend drugs—it supports clinicians by highlighting risk, not replacing judgment.

⚡ Key Features
Explainable AI (clinician-friendly reasoning)
Minimal data entry, fast workflow
Secure login & clean dashboard
Designed for high-pressure, real-world clinical settings

🎯 Impact
Improves first-line antibiotic decisions
Reduces unnecessary antibiotic misuse
Helps slow antibiotic resistance beforeit starts
“Helping doctors prioritize, predict, and decide — without replacing them.”

##  Installation Guide

### **Frontend Setup**
```bash
cd frontend
npm install
npm run dev
```
Backend Setup
```
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

## How to Use
1. Start the Application

Run the frontend and backend servers.

Open the frontend in your browser.

2.You Can login by 2 different users(doctors & Patients)

