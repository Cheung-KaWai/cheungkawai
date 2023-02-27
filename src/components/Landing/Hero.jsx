import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useEffect, useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import { colors, fonts } from "../../features/Theme/Theme";
import { Flex } from "../Layout/Flex";

export const Hero = () => {
  const heroSection = useRef();
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.from(".title", { x: -200, opacity: 0, duration: 1 });
      tl.from(".subtitle", { y: 50, opacity: 0, duration: 1 });
    }, heroSection);
    return () => ctx.revert();
  }, []);

  // useEffect(() => {
  //   ScrollTrigger.create({
  //     trigger: ".title",
  //     start: "top",
  //     onEnter: () => console.log("enter"),
  //     onEnterBack: () => console.log("enterBack"),
  //     onLeave: () => console.log("leave"),
  //     onLeaveBack: () => console.log("leaveBack"),
  //     markers: { startColor: "green", endColor: "red", fontSize: "12px" },
  //   });
  // }, []);

  return (
    <HeroSection
      ref={heroSection}
      className="heroSection"
    >
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
