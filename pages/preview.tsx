import type { NextPage } from "next";
import React, { useState } from "react";
import styled from "styled-components";

//components
import PortfolioOne from "../components/PortfolioOne/PortfolioOne";

//interfaces
import { ProfileDataInterface } from "../data/interfaces/previewInterfaces";

const Preview: NextPage = () => {
  const [portfolioData, setPortfolioData] = useState<ProfileDataInterface>({
    fullName: "John Doe",
    role: "Software Engineer Competitive Coder & Web Developer",
    dpURL:
      "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/21760012/original/d4c0c142f91f012c9a8a9c9aeef3bac28036f15b/create-your-cartoon-style-flat-avatar-or-icon.jpg",
    email: "string",
    socials: {
      linkedin: "string",
      github: "string",
    },
  });

  return (
    <div>
      <PortfolioOne portfolioData={portfolioData} />
      <Button>
        Download Code
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
          />
        </svg>
      </Button>
    </div>
  );
};

const Button = styled.button`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background: dodgerblue;
  color: white;
  border: none;
  padding: 0.75rem 2rem;
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  font-size: 1.25rem;
  cursor: pointer;
  border-radius: 0.5rem;
  width: max-content;
  display: flex;
  align-items: center;
  z-index: 2;

  & svg {
    height: 2rem;
    margin-left: 0.5rem;
  }

  &:hover {
    opacity: 0.8;
  }
`;

export default Preview;
