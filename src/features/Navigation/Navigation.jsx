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
      <NavItem>home </NavItem>
      <NavItem>about </NavItem>
      <NavItem>lab </NavItem>
      <NavItem>articles</NavItem>
    </Flex>
  );
};
