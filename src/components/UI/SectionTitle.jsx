import React from "react";
import styled from "styled-components";
import { colors, fonts } from "../../features/Theme/Theme";

export const SectionTitle = ({ title, ...props }) => {
  return <SectionTitleStyled {...props}>{title}</SectionTitleStyled>;
};

const SectionTitleStyled = styled.h2`
  font-size: 1.4rem;
  font-weight: 300;
  text-transform: uppercase;
  position: absolute;
  top: 50%;
  left: 4rem;
  letter-spacing: 0.3ch;

  &::after {
    content: "${(props) => props.index}";
    display: block;
    font-family: ${fonts.secondary};
    color: ${colors.suttle};
  }
`;
