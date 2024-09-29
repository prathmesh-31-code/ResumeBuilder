// src/components/Skills.js
import React, { useState } from "react";

function Skills({ skills, onChange }) {
  const [input, setInput] = useState("");

  const addSkill = () => {
    if (input.trim()) {
      onChange([...skills, input.trim()]);
      setInput("");
    }
  };

  return (
    <div className="section">
      <h2>Skills</h2>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a skill"
      />
      <button onClick={addSkill}>Add</button>
      <div className="skill-list">
        {skills.map((skill, index) => (
          <span key={index} className="skill-item">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Skills;
