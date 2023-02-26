import React from "react";
import styled from "styled-components";
import { colors, fonts } from "../Theme/Theme";

export const NavItem = ({ children }) => {
  return <NavItemStyled onClick={() => console.log("hello")}>{children}</NavItemStyled>;
};

export const NavItemStyled = styled.a`
  text-decoration: none;
  color: ${colors.primaryFont};
  font-size: 1.4rem;
  font-family: ${fonts.primary};
  text-transform: uppercase;
  letter-spacing: 0.3ch;
  cursor: pointer;
`;
