// Components==============
import logo from "assets/Logo-Rogier-Overvliet.svg";
import { Link } from "gatsby";
import { Container } from "mixins";
import React, { useContext, useState } from "react";
import styled, { css } from "styled-components";
import { Button } from "../../style/Mixins";
import { ModalContext } from "../Layout/Layout";
import Hamburger from "./Hamburger";
import Menu from "./Menu";
// =========================

const NavWrapper = styled.div`
  background: ${({ theme: { white } }) => white};
  width: 100%;
  box-shadow: ${({ theme: { shadow } }) => shadow.small};

  ${({ fixed }) =>
    fixed === true &&
    css`
      position: fixed;
      top: 0;
      left: 0;
      z-index: 148;
    `}
`;

const Logo = styled.img`
  width: 225px;
`;

const FlexContainer = styled(Container)`
  display: flex;
  align-items: center;
  height: ${({ theme: { spacing } }) => spacing.s9};

  @media screen and (min-width: 850px) {
    justify-content: space-between;
  }
`;

const MenuItems = styled.ul`
  display: none;
  justify-content: flex-end;
  align-items: center;
  transition: 0.5s;
  color: ${({ theme: { gray } }) => gray.s7};

  @media screen and (min-width: 850px) {
    display: flex;
  }

  li {
    a {
    }
    padding-left: ${({ theme: { spacing } }) => spacing.s8};
    transition: 0.2s;

    a {
      color: ${({ theme: { gray } }) => gray.s7};
      font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
    }

    &:hover {
      transform: translateY(-2px);

      a {
        color: ${({ theme: { primary } }) => primary.s7};
      }
    }
  }
`;

export default function Nav() {
  const [menuState, setMenuState] = useState("closed");
  const { handleChange } = useContext(ModalContext);

  function changeMenu() {
    menuState === "closed" ? setMenuState("open") : setMenuState("closed");
  }

  const Query =
    typeof window !== "undefined" && window.matchMedia("(min-width: 850px)");

  return (
    <NavWrapper fixed={true}>
      <FlexContainer>
        <Hamburger menuState={menuState} changeMenu={changeMenu} />
        <Link
          to="/"
          style={{ position: "relative", zIndex: 1000 }}
          onClick={() => {
            if (!Query.matches && menuState === "open") {
              changeMenu();
            }
          }}
        >
          <Logo src={logo} alt="logo-Rogier-Overvliet" />
        </Link>
        <MenuItems>
          <li>
            <Link to="/overMij">OVER MIJ</Link>
          </li>
          <li>
            <Link to="/visie">VISIE</Link>
          </li>
          <li>
            <Link to="/blog">BLOG</Link>
          </li>
          <li>
            <Button onClick={handleChange}>CONTACT</Button>
          </li>
        </MenuItems>
      </FlexContainer>
      <Menu
        menuState={menuState}
        setMenuState={setMenuState}
        changeMenu={changeMenu}
      />
    </NavWrapper>
  );
}
