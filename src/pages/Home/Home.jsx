import React from "react";
import styled from "styled-components";
import { About } from "../../components/About/About";
import { Header } from "../../components/Landing/Header";
import { Landing } from "../../components/Landing/Landing";

export const Home = () => {
  return (
    <Conatiner>
      <Header />
      <Landing />
      <About />
    </Conatiner>
  );
};

const Conatiner = styled.div`
  overflow: scroll;
  height: 100vh;
  scroll-snap-points-y: repeat(100vh);
  scroll-snap-type: y mandatory;
`;
