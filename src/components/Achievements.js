// src/components/Achievements.js
import React, { useState } from "react";

function Achievements({ achievements, onChange }) {
  const [input, setInput] = useState("");

  const addAchievement = () => {
    if (input.trim()) {
      onChange([...achievements, input.trim()]);
      setInput("");
    }
  };

  return (
    <div className="section">
      <h2>Achievements</h2>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add an achievement"
      />
      <button onClick={addAchievement}>Add</button>
      <div className="achievement-list">
        {achievements.map((achievement, index) => (
          <span key={index} className="achievement-item">
            {achievement}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Achievements;
