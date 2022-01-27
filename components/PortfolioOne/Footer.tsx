import React from "react";
import { ProfileDataInterface } from "data/interfaces/previewInterfaces";
import SocialBtns from "./common/SocialBtns";
import styled from "styled-components";

const Footer = ({ portfolioData }: { portfolioData: ProfileDataInterface }) => {
  const {
    fullName,
    socials: { github, linkedin },
  } = portfolioData;

  return (
    <FooterContainer>
      <div>
        <FullName>{fullName}</FullName>
        <Copyright>© All rights are reserved | 2021</Copyright>
      </div>
      <SocialBtns githubUrl={github} linkedinUrl={linkedin} />
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  font-size: 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 600px) {
    display: block;
    text-align: center;
  }
`;
const FullName = styled.div`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;
const Copyright = styled.div`
  font-size: 1.25rem;
`;

export default Footer;
