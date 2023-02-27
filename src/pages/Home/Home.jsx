import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useEffect, useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import { About } from "../../components/About/About";
import { Header } from "../../components/Landing/Header";
import { Landing } from "../../components/Landing/Landing";
import { useNavigationStore } from "../../store/navigationStore";

export const Home = () => {
  gsap.registerPlugin(ScrollTrigger);
  const container = useRef();

  const updateNavigation = useNavigationStore((store) => store.update);
  console.log("rerender");

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        scroller: container.current,
        trigger: ".heroSection",
        start: "top 1O%",
        end: "center",
        onEnter: () => updateNavigation("home", true),
        onEnterBack: () => updateNavigation("home", true),
        onLeave: () => updateNavigation("home", false),
        onLeaveBack: () => updateNavigation("home", false),
        markers: { startColor: "green", endColor: "red", fontSize: "12px" },
      });

      ScrollTrigger.create({
        scroller: container.current,
        trigger: ".aboutSection",
        start: "top 1O%",
        end: "center",
        onEnter: () => updateNavigation("about", true),
        onEnterBack: () => updateNavigation("about", true),
        onLeave: () => updateNavigation("about", false),
        onLeaveBack: () => updateNavigation("about", false),
        markers: { startColor: "green", endColor: "red", fontSize: "12px" },
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <Container
      className="container"
      ref={container}
    >
      <Header />
      <Landing />
      <About />
    </Container>
  );
};

const Container = styled.div`
  overflow: scroll;
  height: 100vh;
  scroll-snap-points-y: repeat(100vh);
  scroll-snap-type: y mandatory;
`;
