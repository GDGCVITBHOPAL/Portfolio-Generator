import React from "react";
import styled from "styled-components";

//components
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div>
      <h2>Projects</h2>

      <ProjectsGrid>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </ProjectsGrid>
    </div>
  );
};

const ProjectsGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, minmax(300px, 1fr));
  grid-gap: 2rem;

  @media (max-width: 800px) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
`;

export default Projects;
