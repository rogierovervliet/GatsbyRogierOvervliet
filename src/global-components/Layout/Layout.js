// Components==============
import React from "react";
import { hot } from "react-hot-loader/root";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyles from "../../style/GlobalStyles";
import { Variables } from "../../style/themes";
import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";
import IEWarning from "./IE/IEWarning";
// =========================

const Body = styled.div`
  min-height: ${({ theme: { spacing } }) =>
    `calc(100vh - 200px - ${spacing.s9})`};
  margin-top: ${({ theme: { spacing } }) => spacing.s9};
`;

function Layout({ children, location }) {
  // CODE ABOVE THIS LINE
  if (location.pathname === "/offline-plugin-app-shell-fallback") return null;
  return (
    <ThemeProvider theme={Variables}>
      <IEWarning />
      <Nav />
      <Body>{children}</Body>
      <Footer />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default hot(Layout);
