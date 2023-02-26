import React from "react";
import styled from "styled-components";
import { useCursorStore } from "../../store/cursorStore";
import { colors, fonts } from "../Theme/Theme";

export const NavItem = ({ children }) => {
  const updateCursor = useCursorStore((store) => store.update);

  return (
    <NavItemStyled
      onMouseEnter={() => updateCursor("expand", true)}
      onMouseLeave={() => updateCursor("expand", false)}
    >
      {children}
    </NavItemStyled>
  );
};

export const NavItemStyled = styled.a`
  text-decoration: none;
  color: ${colors.primaryFont};
  font-size: 1.4rem;
  font-family: ${fonts.primary};
  text-transform: uppercase;
  letter-spacing: 0.3ch;
`;
