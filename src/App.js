// src/App.js
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import ProfessionalSummary from "./components/ProfessionalSummary";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Achievements from "./components/Achievements";
import ResumePreview from "./components/ResumePreview";
import "./styles.css";

function App() {
  const [resumeData, setResumeData] = useState({
    professionalSummary: "",
    education: [],
    skills: [],
    experience: [],
    achievements: [],
  });

  // Update function to handle state changes from child components
  const updateResumeData = (field, value) => {
    setResumeData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  return (
    <div className="resume-builder">
      <Navbar />
      <div className="container">
        <div className="form-section">
          <ProfessionalSummary
            professionalSummary={resumeData.professionalSummary}
            onChange={(value) => updateResumeData("professionalSummary", value)}
          />
          <Education
            education={resumeData.education}
            onChange={(value) => updateResumeData("education", value)}
          />
          <Skills
            skills={resumeData.skills}
            onChange={(value) => updateResumeData("skills", value)}
          />
          <Experience
            experience={resumeData.experience}
            onChange={(value) => updateResumeData("experience", value)}
          />
          <Achievements
            achievements={resumeData.achievements}
            onChange={(value) => updateResumeData("achievements", value)}
          />
        </div>
        <div className="preview-section">
          <ResumePreview resumeData={resumeData} />
        </div>
      </div>
    </div>
  );
}

export default App;
