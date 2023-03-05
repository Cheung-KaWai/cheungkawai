import React, { useState } from "react";
import styled from "styled-components";
import { colors } from "../../features/Theme/Theme";
import { useAboutStore } from "../../store/aboutStore";
import { useCursorStore } from "../../store/cursorStore";

export const KeywordItem = ({ keyword, index }) => {
  const updateCursor = useCursorStore((store) => store.update);
  const updateAbout = useAboutStore((store) => store.update);
  const [expand, setExpand] = useState(false);

  const handleClick = () => {
    updateAbout("offset", index);
    setExpand((prev) => {
      if (prev) updateAbout("offset", 0);
      return !prev;
    });
  };

  return (
    <KeywordContainer
      expand={expand}
      onClick={handleClick}
    >
      <Keyword
        onMouseEnter={() => updateCursor("expand", true)}
        onMouseLeave={() => updateCursor("expand", false)}
        expand={expand}
      >
        {keyword}
      </Keyword>
      <KeyWordContent></KeyWordContent>
    </KeywordContainer>
  );
};

const KeywordContainer = styled.div`
  height: ${(props) => (props.expand ? "44rem" : "4rem")};
  transition: height 0.3s;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Keyword = styled.p`
  position: relative;
  height: 4rem;
  padding: 1rem 0;
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 0.3ch;
  font-size: 1.4rem;
  color: ${(props) => props.expand && "#fff"};
  transition: color 0.3s;
  &::after {
    content: "";
    width: 100%;
    height: 0.1px;
    background-color: ${(props) => (props.expand ? "#fff" : colors.suttle)};
    position: absolute;
    left: 0;
    bottom: 0;
    transition: background-color 0.3s;
  }
  :hover {
    color: #fff;
    &::after {
      background-color: #fff;
    }
  }
`;

const KeyWordContent = styled.div`
  height: 40rem;
`;
