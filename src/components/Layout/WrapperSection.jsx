import React from "react";
import styled from "styled-components";
import { colors } from "../../features/Theme/Theme";

export const WrapperSection = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: ${colors.primary};
  padding: 10rem 4rem 4rem 4rem;
  scroll-snap-align: start;
  position: relative;
`;
