// Components==============
import { Link } from "gatsby";
import { Container } from "mixins";
import React, { useState } from "react";
import styled, { css } from "styled-components";
import { Button } from "../../style/Mixins";
import Hamburger from "./Hamburger";
import Menu from "./Menu";
// =========================

const NavWrapper = styled.div`
  background: ${({ theme: { white } }) => white};
  width: 100vw;
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
    padding-left: ${({ theme: { spacing } }) => spacing.s8};
    transition: 0.2s;
    color: ${({ theme: { gray } }) => gray.s7};
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};

    &:hover {
      transform: translateY(-2px);
      color: ${({ theme: { primary } }) => primary.s7};
    }
  }
`;

export default function Nav() {
  const [menuState, setMenuState] = useState("closed");

  function changeMenu() {
    menuState === "closed" ? setMenuState("open") : setMenuState("closed");
  }

  return (
    <NavWrapper fixed={true}>
      <FlexContainer>
        <Hamburger menuState={menuState} changeMenu={changeMenu} />
        <Link to="/">logo</Link>
        <MenuItems>
          <Link to="/#home">
            <li>HOME</li>
          </Link>
          <Link to="/#overMij">
            <li>BLOG</li>
          </Link>
          <Link to="/#projecten">
            <li>OVER MIJ</li>
          </Link>
          <Link to="/#contact">
            <li>
              <Button>CONTACT</Button>
            </li>
          </Link>
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
