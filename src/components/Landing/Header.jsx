import React from "react";
import styled from "styled-components";
import { Navigation } from "../../features/Navigation/Navigation";
import { fonts } from "../../features/Theme/Theme";
import { Flex } from "../Layout/Flex";

export const Header = () => {
  return (
    <NavigationBar>
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

const NavigationBar = styled.nav`
  z-index: 1;
  position: absolute;
  width: 100vw;
  padding: 4rem;
`;
