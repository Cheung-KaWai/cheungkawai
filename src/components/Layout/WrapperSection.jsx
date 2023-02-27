import React from "react";
import styled from "styled-components";
import { colors } from "../../features/Theme/Theme";

export const WrapperSection = ({ children, ...props }) => {
  return <Wrapper {...props}>{children}</Wrapper>;
};

const Wrapper = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: ${colors.primary};
  padding: 12rem 4rem 4rem 4rem;
  position: relative;
  scroll-snap-align: start;
`;
