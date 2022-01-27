import React, { useRef } from "react";
import styled, { css } from "styled-components";
import Image from "next/image";

//components
import Header from "./Header";
import Projects from "./Projects/Projects";

//interfaces
import { ProfileDataInterface } from "../../data/interfaces/previewInterfaces";

//assets
import githubIcon from "@assets/images/github.png";
import linkedinIcon from "@assets/images/linkedin.png";
import Contact from "./Contact";
import Footer from "./Footer";
import SocialBtns from "./common/SocialBtns";

interface ButtonProps {
  isOutlined?: boolean;
}

const PortfolioOne = ({
  portfolioData,
}: {
  portfolioData: ProfileDataInterface;
}) => {
  const {
    fullName,
    role,
    dpURL,
    socials: { github, linkedin },
  } = portfolioData;

  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <Page>
      <Header
        fullName={fullName}
        projectsRef={projectsRef}
        contactRef={contactRef}
      />

      <Banner>
        <BannerItem>
          <h1>Hey There!! 👋</h1>
          <h2>
            I{"'"}m {fullName} and {role}
          </h2>
          <Button>Hire Me</Button>
          <Button isOutlined>View CV</Button>
          <br />
          <SocialBtns githubUrl={github} linkedinUrl={linkedin} />
        </BannerItem>
        <BannerItem>
          <ProfileImage src={dpURL} />
        </BannerItem>
      </Banner>

      <Projects projectsRef={projectsRef} />

      <Contact contactRef={contactRef} />

      <Footer portfolioData={portfolioData} />
    </Page>
  );
};

const Page = styled.div`
  padding: 2rem 7vw;
  font-size: 1.5em;

  @media screen and (max-width: 600px) {
    font-size: 1.25em;
  }
`;

const Banner = styled.div`
  padding: 3rem 0;
  & h2 {
    color: #3d3d3d;
  }
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;

  @media screen and (max-width: 600px) {
    display: block;
  }
`;

const BannerItem = styled.div``;

const Button = styled.div<ButtonProps>`
  background: ${({ isOutlined }) =>
    isOutlined ? "transparent" : "var(--primary)"};
  display: inline-block;
  padding: 0.75rem 2rem;
  color: ${({ isOutlined }) => (!isOutlined ? "white" : "var(--primary)")};
  border: 2px solid var(--primary);
  margin-right: 1rem;
  cursor: pointer;
  font-size: 1.25rem;
  border-radius: 0.25rem;

  &:hover {
    opacity: ${({ isOutlined }) => (isOutlined ? 0.6 : 0.8)};
    transition: 0.2s;
  }
`;

const ProfileImage = styled.img`
  height: 45vh;
  width: 45vh;
  background: green;
  display: block;
  margin: 2rem auto;
  border-radius: 50%;

  @media screen and (max-width: 600px) {
    height: 35vh;
    width: 35vh;
    margin: 0rem auto;
  }
`;

const SocialIcon = styled.div`
  margin: 2rem 0;
  display: inline-block;
  cursor: pointer;

  &:last-of-type {
    margin-left: 1.5rem;
  }

  &:hover {
    transform: scale(1.05);
    transition: 0.2s;
    opacity: 0.8;
  }
`;

export default PortfolioOne;
