import gsap from "gsap";
import CSSRulePlugin from "gsap/CSSRulePlugin";
import React, { useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import { Navigation } from "../../features/Navigation/Navigation";
import { colors, fonts } from "../../features/Theme/Theme";
import { Flex } from "../Layout/Flex";

export const Header = () => {
  gsap.registerPlugin(CSSRulePlugin);
  const navBar = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".line", {
        width: 0,
        duration: 2,
      });
    }, navBar);

    return () => ctx.revert();
  }, []);

  return (
    <NavigationBar ref={navBar}>
      <Line className="line" />
      <Flex
        justifyContent="space-between"
        alignItems="center"
      >
        <Name>ka wai cheung</Name>
        <Navigation />
      </Flex>
    </NavigationBar>
  );
};

export const Name = styled.p`
  font-size: 2rem;
  font-weight: 200;
  letter-spacing: 0.3ch;
  text-transform: uppercase;
  font-family: ${fonts.secondary};
  position: relative;
  width: fit-content;
`;

const Line = styled.span`
  width: calc(100vw - 80px);
  height: 0.1px;
  position: absolute;
  top: 8rem;
  background-color: ${colors.primaryFont};
`;

const NavigationBar = styled.nav`
  z-index: 1;
  position: fixed;
  width: 100vw;
  padding: 4rem;
  background-color: ${colors.primary};
`;
