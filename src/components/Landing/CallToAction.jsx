import React from "react";
import styled, { keyframes } from "styled-components";
import { colors } from "../../features/Theme/Theme";

export const CallToAction = () => {
  return <CallToActionStyled />;
};

const scroll = keyframes`
  50%{
    opacity: 0;
		top: 2.5rem
  }
  100%{
    opacity: 0;
		top: 2.5rem
  }
`;

const CallToActionStyled = styled.span`
  position: relative;
  top: 90%;
  left: 50%;
  display: block;
  width: 2rem;
  height: 4rem;
  border: 1px solid;
  border-radius: 1rem;

  &::before {
    content: "";
    width: 0.5rem;
    height: 0.5rem;
    position: absolute;
    top: 0.6rem;
    left: 50%;
    transform: translateX(-50%);
    background-color: ${colors.primaryFont};
    border-radius: 50%;
    opacity: 1;
    animation: ${scroll} 4s infinite;
  }
`;
