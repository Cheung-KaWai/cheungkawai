import React from "react";
import { WrapperSection } from "../Layout/WrapperSection";
import { SectionTitle } from "../UI/SectionTitle";

export const Project = () => {
  return (
    <WrapperSection
      className="projectSection"
      id="projects"
    >
      <SectionTitle
        title="projects"
        index="02"
      />
    </WrapperSection>
  );
};
