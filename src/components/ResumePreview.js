// src/components/ResumePreview.js
import React from "react";

function ResumePreview({ resumeData }) {
  return (
    <div className="preview">
      <h2>Resume Preview</h2>
      <h3>Professional Summary</h3>
      <p>{resumeData.professionalSummary}</p>

      <h3>Education</h3>
      {resumeData.education.map((edu, index) => (
        <div key={index}>
          <p>
            {edu.degree} from {edu.institution} ({edu.startDate} - {edu.endDate})
          </p>
        </div>
      ))}

      <h3>Skills</h3>
      <ul>
        {resumeData.skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>

      <h3>Experience</h3>
      {resumeData.experience.map((exp, index) => (
        <div key={index}>
          <p>
            {exp.jobTitle} at {exp.companyName} ({exp.startDate} - {exp.endDate})
          </p>
          <p>{exp.description}</p>
        </div>
      ))}

      <h3>Achievements</h3>
      <ul>
        {resumeData.achievements.map((achievement, index) => (
          <li key={index}>{achievement}</li>
        ))}
      </ul>
    </div>
  );
}

export default ResumePreview;
