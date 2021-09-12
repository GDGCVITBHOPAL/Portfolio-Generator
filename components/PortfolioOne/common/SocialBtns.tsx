import React from "react";
import Image from "next/image";
import styled from "styled-components";

//assets
import githubIcon from "@assets/images/github.png";
import linkedinIcon from "@assets/images/linkedin.png";

const SocialBtns = ({
  githubUrl,
  linkedinUrl,
}: {
  githubUrl: string;
  linkedinUrl: string;
}) => {
  return (
    <div>
      <SocialIcon onClick={() => window.open(githubUrl)}>
        <Image src={githubIcon} alt="github" height={50} width={50} />
      </SocialIcon>
      <SocialIcon onClick={() => window.open(linkedinUrl)}>
        <Image src={linkedinIcon} alt="linkedin" height={50} width={50} />
      </SocialIcon>
    </div>
  );
};

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

export default SocialBtns;
