import React from "react";
import styled from "styled-components";
import { colors, fonts } from "../../features/Theme/Theme";
import { Flex } from "../Layout/Flex";

export const Hero = () => {
  return (
    <HeroSection>
      <Flex
        flexDirection="column"
        gap="1rem"
      >
        <Title>kaizen | 改善</Title>
        <SubTitle>
          Philosophy of continious improvement <br /> Becoming one percent better everyday
        </SubTitle>
      </Flex>
    </HeroSection>
  );
};

const HeroSection = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

const Title = styled.p`
  font-size: 2.4rem;
  font-family: ${fonts.secondary};
  text-transform: uppercase;
  font-weight: 300;
  letter-spacing: 0.3ch;
  color: #fff;

  &::before {
    content: "my life motto";
    font-size: 1.2rem;
    font-family: ${fonts.primary};
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(-120%, 50%);
    color: ${colors.primaryFont};
  }
`;

const SubTitle = styled.p`
  font-weight: 300;
  font-size: 1.4rem;
`;
