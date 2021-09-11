import React from "react";
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

interface ButtonProps {
  isOutlined?: boolean;
}

const PortfolioOne = ({
  portfolioData,
}: {
  portfolioData: ProfileDataInterface;
}) => {
  const { fullName, role, dpURL } = portfolioData;

  return (
    <Page>
      <Header fullName={fullName} />

      <Banner>
        <BannerItem>
          <h1>Hey There!! 👋</h1>
          <h2>
            I{"'"}m {fullName} and {role}
          </h2>
          <Button>Hire Me</Button>
          <Button isOutlined>View CV</Button>
          <br />
          <SocialIcon>
            <Image src={githubIcon} alt="github" height={50} width={50} />
          </SocialIcon>
          <SocialIcon>
            <Image src={linkedinIcon} alt="linkedin" height={50} width={50} />
          </SocialIcon>
        </BannerItem>
        <BannerItem>
          <ProfileImage src={dpURL} />
        </BannerItem>
      </Banner>

      <Projects />
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
  background: ${({ isOutlined }) => (isOutlined ? "transparent" : "#005554")};
  display: inline-block;
  padding: 0.75rem 2rem;
  color: ${({ isOutlined }) => (!isOutlined ? "white" : "#005554")};
  border: 2px solid #005554;
  margin-right: 1rem;
  cursor: pointer;

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
