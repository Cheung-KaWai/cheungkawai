import gsap from "gsap";
import React, { useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import { colors, fonts } from "../../features/Theme/Theme";
import { Flex } from "../Layout/Flex";

export const Hero = () => {
  const heroSection = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.from(".title", { x: -100, opacity: 0, duration: 1 });
      tl.from(".subtitle", { y: 100, opacity: 0, duration: 1 });
    }, heroSection);

    return () => ctx.revert();
  }, []);

  return (
    <HeroSection ref={heroSection}>
      <Flex
        flexDirection="column"
        gap="1rem"
      >
        <Title className="title">kaizen | 改善</Title>
        <SubTitle className="subtitle">
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
