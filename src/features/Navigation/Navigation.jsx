import React from "react";
import { Flex } from "../../components/Layout/Flex";
import { NavItem } from "./NavItem";

export const Navigation = () => {
  return (
    <Flex
      justifyItems="space-between"
      width="fit-content"
      gap="2rem"
    >
      <NavItem link="/#home">home </NavItem>
      <NavItem link="/#about">about </NavItem>
      <NavItem link="/#projects">projects </NavItem>
      <NavItem link="/#lab">lab </NavItem>
      <NavItem link="/#blog"> blog</NavItem>
    </Flex>
  );
};
