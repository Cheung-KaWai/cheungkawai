import React from "react";
import styled from "styled-components";
import { useCursor } from "../../hooks/useCursor";
import { useCursorStore } from "../../store/cursorStore";
import { colors } from "../Theme/Theme";

export const Cursor = (props) => {
  const [{ x, y }, visible] = useCursor();
  const expand = useCursorStore((store) => store.expand);

  const passProps = {
    ...props,
    x,
    y,
    opacity: visible ? 1 : 0,
    expand: expand ? 2 : 1,
  };

  return <CursorStyled {...passProps} />;
};

const CursorStyled = styled.div.attrs((props) => ({
  style: {
    top: `${props.y - 15}px`,
    left: `${props.x - 15}px`,
    transform: `scale(${props.expand})`,
    opacity: props.opacity,
  },
}))`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  border: 1px solid ${colors.primaryFont};
  position: fixed;
  pointer-events: none;
  transition: transform 0.3s ease-in, opacity 0.5s ease-in;
`;
