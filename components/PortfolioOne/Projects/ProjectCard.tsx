import React from "react";
import styled from "styled-components";

const ProjectCard = () => {
  return (
    <ProjectCardContainer>
      <Title>Project Name</Title>
      <Description>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut, minus.
        Beatae, veniam. Voluptatibus debitis sunt, aliquid consequuntur minima
        numquam iure dolorum expedita.
      </Description>

      <Counts>
        <Count>
          <Icon
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </Icon>
          10
        </Count>
        <Count>
          <Icon viewBox="0 0 24 24" width="16" height="16">
            <path
              fill="#000"
              fillRule="evenodd"
              d="M12 21a1.75 1.75 0 110-3.5 1.75 1.75 0 010 3.5zm-3.25-1.75a3.25 3.25 0 106.5 0 3.25 3.25 0 00-6.5 0zm-3-12.75a1.75 1.75 0 110-3.5 1.75 1.75 0 010 3.5zM2.5 4.75a3.25 3.25 0 106.5 0 3.25 3.25 0 00-6.5 0zM18.25 6.5a1.75 1.75 0 110-3.5 1.75 1.75 0 010 3.5zM15 4.75a3.25 3.25 0 106.5 0 3.25 3.25 0 00-6.5 0z"
            ></path>
            <path
              fill="#000"
              fillRule="evenodd"
              d="M6.5 7.75v1A2.25 2.25 0 008.75 11h6.5a2.25 2.25 0 002.25-2.25v-1H19v1a3.75 3.75 0 01-3.75 3.75h-6.5A3.75 3.75 0 015 8.75v-1h1.5z"
            ></path>
            <path
              fill="#000"
              fillRule="evenodd"
              d="M11.25 16.25v-5h1.5v5h-1.5z"
            ></path>
          </Icon>
          10
        </Count>
      </Counts>
    </ProjectCardContainer>
  );
};

const ProjectCardContainer = styled.div`
  box-shadow: 1px 1px 30px 1px #0000001f;
  border-radius: 0.5rem;
  padding: 1rem 1.25rem;
`;

const Title = styled.div`
  font-weight: bold;
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
`;
const Description = styled.div`
  font-size: 1rem;
  color: #707070;
  margin: 2rem 0;
`;

const Icon = styled.svg`
  height: 1.25rem;
`;

const Counts = styled.div`
  margin-top: 1rem;
  font-size: 1rem;
  display: flex;
  align-items: center;
`;

const Count = styled.div`
  font-size: 1rem;
  display: flex;
  align-items: center;

  &:last-of-type {
    margin-left: 1rem;
  }
`;

export default ProjectCard;
