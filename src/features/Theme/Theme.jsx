import { createGlobalStyle } from "styled-components";

export const colors = {
  primary: "#0f0f0f",
  primaryFont: "#ffffff59",
  suttle: "#ffffff10",
};

export const fonts = {
  primary: "Poppins",
  secondary: "Roboto Slab",
};

export const GlobalStyles = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    cursor: none;
    scroll-behavior: smooth;
  }

  html{
    font-size: 62.5%;
  }

  body{
    color: ${(props) => props.fontColor};
    font-family:${(props) => props.font};
    font-size: 1.6rem;
  }

  ::-webkit-scrollbar { 
    display: none; 
}

`;
