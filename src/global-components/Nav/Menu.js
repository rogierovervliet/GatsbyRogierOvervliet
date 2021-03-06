// Components==============
import { Link } from "gatsby";
import { Container } from "mixins";
import React, { useContext } from "react";
import styled from "styled-components";
import { ModalContext } from "../Layout/Layout";
// =========================

const Hide = styled.div`
  @media screen and (min-width: 850px) {
    display: none;
  }
`;

const MenuWrapper = styled.div`
  background-color: ${({ theme: { white } }) => white};
  width: ${({ menuState }) => (menuState === "open" ? `300px` : `0`)};
  visibility: ${({ menuState }) =>
    menuState === "open" ? "visible" : `hidden`};
  position: fixed;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 150;
  transition: 0.4s;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  ul {
    opacity: ${({ menuState }) => (menuState === "open" ? "1" : `0`)};
    transition: 0.4s;
  }

  li {
    transition: 0.2s;
    padding: ${({ theme: { spacing } }) => `${spacing.s6} 0 `};
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};

    &:hover {
      color: ${({ theme: { primary } }) => primary.s4};
    }

    a {
      font-size: 18px;
    }
  }

  button {
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
  }
`;

const Blur = styled.div`
  position: fixed;
  opacity: ${({ menuState }) => (menuState === "open" ? `0.3` : `0`)};
  visibility: ${({ menuState }) =>
    menuState === "open" ? `visible` : `hidden`};
  height: 100vh;
  width: 100vw;
  z-index: 149;
  background-color: black;
  top: 0;
  left: 0;
  transition: 0.4s;
`;

export default function Menu({ menuState, changeMenu }) {
  const { handleChange } = useContext(ModalContext);

  return (
    <Hide>
      <MenuWrapper menuState={menuState}>
        <Container>
          <ul>
            <li>
              <Link onClick={changeMenu} to="/overMij">
                OVER MIJ
              </Link>
            </li>
            <li>
              <Link onClick={changeMenu} to="/visie">
                VISIE
              </Link>
            </li>
            <li>
              <Link onClick={changeMenu} to="/aanbod">
                AANBOD
              </Link>
            </li>

            <li>
              <button
                onClick={() => {
                  handleChange();
                  changeMenu();
                }}
              >
                CONTACT
              </button>
            </li>
          </ul>
        </Container>
      </MenuWrapper>
      <Blur menuState={menuState} onClick={changeMenu} />
    </Hide>
  );
}
