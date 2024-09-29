// src/components/Experience.js
import React from "react";

function Experience({ experience, onChange }) {
  const addExperience = () => {
    onChange([...experience, { jobTitle: "", companyName: "", startDate: "", endDate: "", description: "" }]);
  };

  const handleChange = (index, event) => {
    const newExperienceList = [...experience];
    newExperienceList[index][event.target.name] = event.target.value;
    onChange(newExperienceList);
  };

  return (
    <div className="section">
      <h2>Experience</h2>
      {experience.map((item, index) => (
        <div key={index} className="experience-item">
          <input
            name="jobTitle"
            value={item.jobTitle}
            onChange={(event) => handleChange(index, event)}
            placeholder="Job Title"
          />
          <input
            name="companyName"
            value={item.companyName}
            onChange={(event) => handleChange(index, event)}
            placeholder="Company"
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
          <textarea
            name="description"
            value={item.description}
            onChange={(event) => handleChange(index, event)}
            placeholder="Description"
          />
        </div>
      ))}
      <button onClick={addExperience}>Add More</button>
    </div>
  );
}

export default Experience;
