import React, { useState } from "react";
import styled, { css } from "styled-components";

//interfaces
interface MenusContainerProps {
  isMenuOpen: boolean;
}

const Header = ({ fullName }: { fullName: string }) => {
  //Data
  const Menus = ["Projects", "Contact"];

  //State
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <Navbar>
      <FullName>{fullName}</FullName>

      <Menu>
        <Hamburger
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          onClick={() => setIsMenuOpen(true)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </Hamburger>
        <MenusContainer isMenuOpen={isMenuOpen}>
          <CloseIcon
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={() => setIsMenuOpen(false)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </CloseIcon>
          {Menus.map((menu) => (
            <MenuItem key={menu}>{menu}</MenuItem>
          ))}
        </MenusContainer>
      </Menu>
    </Navbar>
  );
};

const Navbar = styled.div`
  display: flex;
  justify-content: space-between;

  cursor: pointer;
`;

const FullName = styled.div`
  font-size: 1.75rem;
`;
const Menu = styled.div`
  display: flex;
  cursor: pointer;
`;

const MenusContainer = styled.div<MenusContainerProps>`
  display: flex;
  align-items: center;
  transform: translateX(0);
  justify-content: center;
  transition: transform 0.2s ease-out;

  @media screen and (max-width: 600px) {
    background: #005554;
    color: white;
    position: fixed;
    flex-direction: column;
    top: 0;
    left: 30%;
    right: 0;
    bottom: 0;
    z-index: 1;

    ${({ isMenuOpen }) =>
      !isMenuOpen &&
      css`
        transform: translateX(100%);
      `};
  }
`;

const MenuItem = styled.span`
  display: flex;
  cursor: pointer;
  margin-left: 2rem;
  font-size: 1.25rem;
  position: relative;

  &::after {
    content: "";
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: black;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  &:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

  &:hover {
    opacity: 0.7;
  }

  @media screen and (max-width: 600px) {
    margin: 1rem auto;
  }
`;

const CloseIcon = styled.svg`
  height: 2rem;
  position: absolute;
  top: 1rem;
  left: 1rem;
  @media screen and (min-width: 600px) {
    display: none;
  }
`;
const Hamburger = styled.svg`
  height: 2rem;
  @media screen and (min-width: 600px) {
    display: none;
  }
`;

export default Header;
