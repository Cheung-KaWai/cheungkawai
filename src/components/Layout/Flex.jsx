import React from "react";
import styled from "styled-components";

export const Flex = ({ children, ...props }) => {
  return <FlexStyled {...props}>{children}</FlexStyled>;
};

export const FlexStyled = styled.div`
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  background-color: ${(props) => props.backgroundColor};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  gap: ${(props) => props.gap};
  z-index: ${(props) => props.zIndex};
  position: ${(props) => props.position ?? "relative"};
  top: ${(props) => props.top};
  left: ${(props) => props.left};
`;
