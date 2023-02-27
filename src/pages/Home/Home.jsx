import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import { About } from "../../components/About/About";
import { Blog } from "../../components/Blog/Blog";
import { Lab } from "../../components/Lab/Lab";
import { Header } from "../../components/Landing/Header";
import { Landing } from "../../components/Landing/Landing";
import { Project } from "../../components/Projects/Project";
import { useNavigationStore } from "../../store/navigationStore";

export const Home = () => {
  gsap.registerPlugin(ScrollTrigger);
  const container = useRef();

  const updateNavigation = useNavigationStore((store) => store.update);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        scroller: container.current,
        trigger: ".heroSection",
        start: "top 20%",
        end: "center",
        onEnter: () => updateNavigation("home", true),
        onEnterBack: () => updateNavigation("home", true),
        onLeave: () => updateNavigation("home", false),
        onLeaveBack: () => updateNavigation("home", false),
      });

      ScrollTrigger.create({
        scroller: container.current,
        trigger: ".aboutSection",
        start: "top 20%",
        end: "center",
        onEnter: () => updateNavigation("about", true),
        onEnterBack: () => updateNavigation("about", true),
        onLeave: () => updateNavigation("about", false),
        onLeaveBack: () => updateNavigation("about", false),
      });

      ScrollTrigger.create({
        scroller: container.current,
        trigger: ".projectSection",
        start: "top 20%",
        end: "center",
        onEnter: () => updateNavigation("projects", true),
        onEnterBack: () => updateNavigation("projects", true),
        onLeave: () => updateNavigation("projects", false),
        onLeaveBack: () => updateNavigation("projects", false),
      });

      ScrollTrigger.create({
        scroller: container.current,
        trigger: ".labSection",
        start: "top 20%",
        end: "center",
        onEnter: () => updateNavigation("lab", true),
        onEnterBack: () => updateNavigation("lab", true),
        onLeave: () => updateNavigation("lab", false),
        onLeaveBack: () => updateNavigation("lab", false),
      });

      ScrollTrigger.create({
        scroller: container.current,
        trigger: ".blogSection",
        start: "top 20%",
        end: "center",
        onEnter: () => updateNavigation("blog", true),
        onEnterBack: () => updateNavigation("blog", true),
        onLeave: () => updateNavigation("blog", false),
        onLeaveBack: () => updateNavigation("blog", false),
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
      <Project />
      <Lab />
      <Blog />
    </Container>
  );
};

const Container = styled.div`
  overflow: scroll;
  height: 100vh;
  scroll-snap-points-y: repeat(100vh);
  scroll-snap-type: y mandatory;
`;
