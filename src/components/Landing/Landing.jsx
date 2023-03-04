import React from "react";
import { Hero } from "./Hero";
import { CallToAction } from "./CallToAction";
import { WrapperSection } from "../Layout/WrapperSection";

export const Landing = () => {
  return (
    <WrapperSection
      id="home"
      className="heroSection"
    >
      <Hero />
      {/* <CallToAction /> */}
    </WrapperSection>
  );
};
