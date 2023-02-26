import React from "react";
import styled from "styled-components";
import { useCursorPosition } from "../../hooks/useCursorPosition";
import { colors } from "../Theme/Theme";

export const Cursor = (props) => {
  const { x, y } = useCursorPosition();
  return (
    <CursorStyled
      {...props}
      x={x}
      y={y}
    />
  );
};

const CursorStyled = styled.span.attrs((props) => ({
  style: {
    transform: `translate(${props.x - 10}px, ${props.y - 10}px)`,
  },
}))`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  border: 1px solid ${colors.primaryFont};
  position: fixed;
  top: 0;
  left: 0;
  transform-origin: -50% -50%;
  pointer-events: none;
`;
