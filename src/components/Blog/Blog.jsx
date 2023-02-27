import React from "react";
import { WrapperSection } from "../Layout/WrapperSection";
import { SectionTitle } from "../UI/SectionTitle";

export const Blog = () => {
  return (
    <WrapperSection
      className="blogSection"
      id="blog"
    >
      <SectionTitle
        title="blog"
        index="04"
      />
    </WrapperSection>
  );
};
