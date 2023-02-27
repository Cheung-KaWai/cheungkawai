import React from "react";
import styled from "styled-components";
import { useCursorStore } from "../../store/cursorStore";
import { useNavigationStore } from "../../store/navigationStore";
import { colors, fonts } from "../Theme/Theme";

export const NavItem = ({ children, link }) => {
  const updateCursor = useCursorStore((store) => store.update);
  const highlight = useNavigationStore((store) => store[link]);

  return (
    <NavItemStyled
      onMouseEnter={() => updateCursor("expand", true)}
      onMouseLeave={() => updateCursor("expand", false)}
      highlight={highlight}
      href={link}
    >
      {children}
    </NavItemStyled>
  );
};

export const NavItemStyled = styled.a`
  text-decoration: none;
  color: ${(props) => (props.highlight ? "#fff" : colors.primaryFont)};
  font-size: 1.4rem;
  font-family: ${fonts.primary};
  text-transform: uppercase;
  letter-spacing: 0.3ch;
  transition: color 0.3s ease-in;

  &:hover {
    color: #fff;
  }
`;
