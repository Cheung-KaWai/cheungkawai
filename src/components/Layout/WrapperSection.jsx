import React from "react";
import styled from "styled-components";
import { colors } from "../../features/Theme/Theme";

export const WrapperSection = ({ children, ...props }) => {
  return (
    <Section {...props}>
      <Wrapper>
        <Content>{children}</Content>
      </Wrapper>
    </Section>
  );
};

const Section = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: ${colors.primary};
  padding: 12rem 4rem 4rem 4rem;
  position: relative;
  scroll-snap-align: start;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  width: 70rem;
  height: 50rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
