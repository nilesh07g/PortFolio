import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import { MdLaunch } from 'react-icons/md';
import { FaArrowLeft } from 'react-icons/fa';

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await fetch('/projects.json');
        const projects = await response.json();
        const foundProject = projects.find(p => p.id === parseInt(id));
        setProject(foundProject);
      } catch (error) {
        console.error('Error fetching project:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [id]);

  const handleImageError = () => {
    setImageError(true);
  };

  if (loading) {
    return (
      <section className="portfolio" data-page="portfolio">
        <div className="loading-spinner"></div>
      </section>
    );
  }

  if (!project) {
    return (
      <section className="portfolio" data-page="portfolio">
        <header>
          <h2 className="h2 article-title">Project Not Found</h2>
        </header>
        <button
          onClick={() => navigate('/portfolio')}
          className="btn btn-primary"
        >
          Back to Portfolio
        </button>
      </section>
    );
  }

  return (
    <section className="portfolio" data-page="portfolio">
      <header>
        <button
          onClick={() => navigate('/portfolio')}
          className="back-button"
        >
          <FaArrowLeft /> Back to Portfolio
        </button>
        <h2 className="h2 article-title">{project.title}</h2>
      </header>

      <div className="project-details">
        <div className="project-image">
          {!imageError ? (
            <img
              src={`/images/${project.image.split('/').pop()}`}
              alt={project.title}
              loading="lazy"
              onError={handleImageError}
            />
          ) : (
            <div className="image-placeholder">
              <span>Image not available</span>
            </div>
          )}
        </div>

        <div className="project-info">
          <div className="project-category">
            <span className="category-tag">{project.category}</span>
          </div>

          <div className="project-description">
            <h3 className="h3">Description</h3>
            <p>{project.description}</p>
          </div>

          <div className="project-technologies">
            <h3 className="h3">Technologies Used</h3>
            <ul className="technology-list">
              {project.technologies.map((tech, index) => (
                <li key={index} className="technology-item">
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          <div className="project-features">
            <h3 className="h3">Key Features</h3>
            <ul className="feature-list">
              {project.features.map((feature, index) => (
                <li key={index} className="feature-item">
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="project-links">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link github"
              >
                <FaGithub /> View Code
              </a>
            )}
            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link demo"
              >
                <MdLaunch /> Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails; 