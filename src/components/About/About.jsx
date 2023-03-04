import React from "react";
import { WrapperSection } from "../Layout/WrapperSection";
import { SectionTitle } from "../UI/SectionTitle";
import { Keywords } from "./Keywords";

export const About = () => {
  return (
    <WrapperSection
      className="aboutSection"
      id="about"
    >
      <SectionTitle
        title="about"
        index="01"
      />
      <Keywords />
    </WrapperSection>
  );
};
