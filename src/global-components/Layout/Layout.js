// Components==============
import React, { useState } from "react";
import { hot } from "react-hot-loader/root";
import styled, { ThemeProvider } from "styled-components";
import ContactForm from "../../macro-contact/index";
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

export const ModalContext = React.createContext();

function Layout({ children }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleChange = () => {
    modalIsOpen === true ? setModalIsOpen(false) : setModalIsOpen(true);
  };

  const modalValue = {
    modalIsOpen,
    handleChange
  };

  // CODE ABOVE THIS LINE
  // if (location.pathname === "/offline-plugin-app-shell-fallback") return null;
  return (
    <ThemeProvider theme={Variables}>
      <ModalContext.Provider value={modalValue}>
        <IEWarning />
        <Nav />
        <Body>{children}</Body>
        <ContactForm />
        <Footer />
        <GlobalStyles />
      </ModalContext.Provider>
    </ThemeProvider>
  );
}

export default hot(Layout);
