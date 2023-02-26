import React from "react";
import { Navigation } from "../../features/Navigation/Navigation";
import styled from "styled-components";
import { colors, fonts } from "../../features/Theme/Theme";
import { Header } from "./Header";

export const Landing = () => {
  return (
    <Wrapper>
      <Header />
    </Wrapper>
  );
};

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${colors.primary};
  padding: 4rem;
`;
