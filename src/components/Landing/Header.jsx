import React from "react";
import styled from "styled-components";
import { Navigation } from "../../features/Navigation/Navigation";
import { fonts } from "../../features/Theme/Theme";
import { Flex } from "../Layout/Flex";

export const Header = () => {
  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      zIndex={1}
      position="sticky"
    >
      <Name>ka wai cheung</Name>
      <Navigation />
    </Flex>
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
