// src/components/Education.js
import React from "react";

function Education({ education, onChange }) {
  const addEducation = () => {
    onChange([...education, { degree: "", institution: "", startDate: "", endDate: "" }]);
  };

  const handleChange = (index, event) => {
    const newEducationList = [...education];
    newEducationList[index][event.target.name] = event.target.value;
    onChange(newEducationList);
  };

  return (
    <div className="section">
      <h2>Education</h2>
      {education.map((item, index) => (
        <div key={index} className="education-item">
          <input
            name="degree"
            value={item.degree}
            onChange={(event) => handleChange(index, event)}
            placeholder="Degree"
          />
          <input
            name="institution"
            value={item.institution}
            onChange={(event) => handleChange(index, event)}
            placeholder="Institution"
          />
          <input
            name="startDate"
            value={item.startDate}
            onChange={(event) => handleChange(index, event)}
            placeholder="Start Date"
          />
          <input
            name="endDate"
            value={item.endDate}
            onChange={(event) => handleChange(index, event)}
            placeholder="End Date"
          />
        </div>
      ))}
      <button onClick={addEducation}>Add More</button>
    </div>
  );
}

export default Education;
