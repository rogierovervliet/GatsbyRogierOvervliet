// Components==============
import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
// =========================

const Burger = styled.div`
  cursor: pointer;
  position: fixed;
  right: 20px;
  top: 13px;
  height: 45px;
  width: 45px;
  z-index: 153;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media screen and (min-width: 850px) {
    display: none;
  }
`;

const Bar = styled(motion.div)`
  background: ${({ theme: { black } }) => black};
  height: 8%;
  width: 55%;

  margin-bottom: 4px;
  border-radius: 25px;
`;

const Top = styled(Bar)``;

const Center = styled(Bar)`
  width: 45%;
`;

const Bottom = styled(Bar)`
  margin-bottom: 0;
`;

export default function Hamburger({ menuState, changeMenu }) {
  return (
    <Burger onClick={changeMenu}>
      <Top
        animate={menuState === "closed" ? `menuOpen` : `menuClosed`}
        variants={{
          menuClosed: {
            rotate: 45,
            y: 8
          },

          menuOpen: {
            rotate: 0,
            y: 0
          }
        }}
        initial={false}
      />
      <Center
        animate={menuState === "closed" ? `menuOpen` : `menuClosed`}
        variants={{
          menuClosed: {
            x: 100
          },

          menuOpen: {
            x: 0
          }
        }}
        initial={false}
        ter
      />
      <Bottom
        animate={menuState === "closed" ? `menuOpen` : `menuClosed`}
        variants={{
          menuClosed: {
            rotate: 320,
            y: -8
          },

          menuOpen: {
            rotate: 0,
            y: 0
          }
        }}
        initial={false}
      />
    </Burger>
  );
}
