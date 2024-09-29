// src/components/ProfessionalSummary.js
import React from "react";

function ProfessionalSummary({ professionalSummary, onChange }) {
  return (
    <div className="section">
      <h2>Professional Summary</h2>
      <textarea
        value={professionalSummary}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Write a brief professional summary"
        rows="4"
        className="input-area"
      />
    </div>
  );
}

export default ProfessionalSummary;
