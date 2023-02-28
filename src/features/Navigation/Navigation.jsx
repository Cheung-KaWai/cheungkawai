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
      <NavItem
        link="/#home"
        name="home"
      >
        home
      </NavItem>
      <NavItem
        link="/#about"
        name="about"
      >
        about
      </NavItem>
      <NavItem
        link="/#projects"
        name="projects"
      >
        projects
      </NavItem>
      <NavItem
        link="/#lab"
        name="lab"
      >
        lab
      </NavItem>
      <NavItem
        link="/#blog"
        name="blog"
      >
        blog
      </NavItem>
    </Flex>
  );
};
