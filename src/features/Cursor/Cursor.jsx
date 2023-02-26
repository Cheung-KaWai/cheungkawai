import React from "react";
import styled from "styled-components";
import { useCursor } from "../../hooks/useCursor";
import { colors } from "../Theme/Theme";

export const Cursor = (props) => {
  const [{ x, y }, visible] = useCursor();

  const passProps = {
    ...props,
    x,
    y,
    opacity: visible ? 1 : 0,
  };

  return <CursorStyled {...passProps} />;
};

const CursorStyled = styled.span.attrs((props) => ({
  style: {
    transform: `translate(${props.x - 10}px, ${props.y - 10}px)`,
    opacity: props.opacity,
  },
}))`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  border: 1px solid ${colors.primaryFont};
  position: fixed;
  top: -1.5px;
  left: -1.5px;
  pointer-events: none;
  transition: opacity 0.5s ease-in;
`;
