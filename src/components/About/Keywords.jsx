import React from "react";
import styled from "styled-components";
import { colors } from "../../features/Theme/Theme";
import { useCursorStore } from "../../store/cursorStore";
import { Flex } from "../Layout/Flex";

export const Keywords = () => {
  const updateCursor = useCursorStore((store) => store.update);
  return (
    <Flex
      gap="1rem"
      flexDirection="column"
      width="100%"
    >
      <KeywordItem
        onMouseEnter={() => updateCursor("expand", true)}
        onMouseLeave={() => updateCursor("expand", false)}
      >
        me
      </KeywordItem>
      <KeywordItem
        onMouseEnter={() => updateCursor("expand", true)}
        onMouseLeave={() => updateCursor("expand", false)}
      >
        coding
      </KeywordItem>
      <KeywordItem
        onMouseEnter={() => updateCursor("expand", true)}
        onMouseLeave={() => updateCursor("expand", false)}
      >
        cycling
      </KeywordItem>
      <KeywordItem
        onMouseEnter={() => updateCursor("expand", true)}
        onMouseLeave={() => updateCursor("expand", false)}
      >
        running
      </KeywordItem>
      <KeywordItem
        onMouseEnter={() => updateCursor("expand", true)}
        onMouseLeave={() => updateCursor("expand", false)}
      >
        japan
      </KeywordItem>
      <KeywordItem
        onMouseEnter={() => updateCursor("expand", true)}
        onMouseLeave={() => updateCursor("expand", false)}
      >
        anime
      </KeywordItem>
      <KeywordItem
        onMouseEnter={() => updateCursor("expand", true)}
        onMouseLeave={() => updateCursor("expand", false)}
      >
        badminton
      </KeywordItem>
      <KeywordItem
        onMouseEnter={() => updateCursor("expand", true)}
        onMouseLeave={() => updateCursor("expand", false)}
      >
        piano
      </KeywordItem>
    </Flex>
  );
};

const KeywordItem = styled.p`
  position: relative;
  padding: 1rem 0;
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 0.3ch;
  font-size: 1.4rem;
  transition: color 0.3s;
  &::after {
    content: "";
    width: 100%;
    height: 0.1px;
    background-color: ${colors.suttle};
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
// const Grid = styled.div`
//   width: 100%;
//   height: 100%;
//   display: grid;
//   grid-template-columns: repeat(5, 1fr);
//   grid-template-rows: repeat(5, 1fr);
//   gap: 0.5rem;
// `;
// const KeywordItem = styled.div`
//   width: 100%;
//   height: 100%;
//   background-color: red;
// `;
