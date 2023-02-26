import React from "react";
import ReactDOM from "react-dom/client";
import { colors, fonts, GlobalStyles } from "./features/Theme/Theme";
import { Home } from "./pages/Home/Home";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyles
      fontColor={colors.primaryFont}
      font={fonts.primary}
    />
    <Home />
  </React.StrictMode>
);
