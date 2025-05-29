import React from 'react';
import { FaBookReader, FaRegBookmark } from "react-icons/fa";
import TimelineItem from './TimelineItem';
import SkillItem from './SkillItem';

const Resume = () => {
  return (
    <section>
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaBookReader />
          </div>
          <h3 className="h3">Education</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItem
            title="Indian Institute Of Information Technology,Sricity"
            date="2022 — 2026"
            description="B-Tech in Computer Science and Engineering (8.08/10)"
          />
          <TimelineItem
            title="lakshya School,Kakinada"
            date="2020 — 2022"
            description="MPC CBSE Board (90/100)%"
          />
          <TimelineItem
            title="Sri Chaitanya Techno School, Amalapuram"
            date="2016 — 2019"
            description="State Board (10/10)"
          />
        </ol>
      </div>

      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaRegBookmark />
          </div>
          <h3 className="h3">Experience</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItem
            title="Data Science Intern - Nexus Info"
            date="07 2024 — 08 2024"
            description="• Engineered new technical features to enhance predictive model performance, improving accuracy by 25%
• Completed 3 end-to-end data science tasks, including preprocessing, model tuning, and evaluation"
          />
          <TimelineItem
            title="Data Science Intern - Oasis Info Byte"
            date="10 2023 — 11 2023"
            description="• Gained hands-on experience with machine learning models like Linear Regression, Logistic Regression, Gradient Boosting Regressor, XGBoost Regressor, and Random Forest Regressor"
          />
        </ol>
      </div>

      <div className="skill">
        <h3 className="h3 skills-title">My skills</h3>
        <ul className="skills-list content-card">
        <SkillItem title="Problem-Solving" value={80} />
          <SkillItem title="Data Structures and Algorithms" value={70} />
          <SkillItem title="Frontend Development" value={60} />
          <SkillItem title="Backend Development" value={70} />
          <SkillItem title="Artificial Intelligence" value={70} />
          <SkillItem title="Machine Learning" value={75} />
          <SkillItem title="Deep Learning" value={60} />
          <SkillItem title="Aws" value={50} />
        </ul>
      </div>
    </section>
  );
};

export default Resume;