// Components==============
import logo from "assets/Logo-Rogier-Overvliet3.svg";
import Img from "gatsby-image";
import React from "react";
import styled from "styled-components";
import Block from "../micro-components/Block";
import { BlockStyling, flexUnit } from "../style/Mixins";
// =========================

const Wrapper = styled.div`
  margin-top: ${({ theme: { spacing } }) => spacing.s11};

  @media screen and (min-width: 1000px) {
    margin-top: ${({ theme: { spacing } }) => spacing.s12};
  }

  position: relative;
  width: 100vw;
  height: 100vh;

  .gatsby-image-wrapper {
    z-index: -1;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
`;

const Shader = styled.div`
  background: ${({ theme: { black } }) => black.replace("1)", "0.8)")};
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
`;

const QuoteWrap = styled.div`
  position: absolute;
  z-index: 1;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  width: 85%;
  max-width: 750px;
  text-align: center;

  img {
    min-width: 200px;
    width: 15vw;
    margin: 0 auto ${({ theme: { spacing } }) => spacing.s8};
  }

  blockquote {
    color: white;
    ${flexUnit(2.5, 18, 22, "vw", "font-size")};
    line-height: ${({ theme: { lineHeight } }) => lineHeight.s5};
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.semiBold};
  }
`;

export default function Quote({ content }) {
  return (
    <Wrapper>
      <Img
        fluid={content.picture.asset.fluid}
        alt="Rogier Overvliet background"
      />
      <Shader />
      <QuoteWrap>
        <img src={logo} alt="logo Rogier Overvliet" />
        <BlockStyling>
          <Block content={content.text} />
        </BlockStyling>
      </QuoteWrap>
    </Wrapper>
  );
}
