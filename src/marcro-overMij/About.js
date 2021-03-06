// Components==============
import Img from "gatsby-image";
import { BlockStyling, Container } from "mixins";
import React, { useContext } from "react";
import styled from "styled-components";
import { ModalContext } from "../global-components/Layout/Layout";
import Block from "../micro-components/Block";
import { Button } from "../style/Mixins";
// =========================

const Wrapper = styled.div`
  padding: ${({ theme: { spacing } }) => `${spacing.s6} 0 ${spacing.s10}`};
  min-height: 100vh;
  position: relative;

  @media screen and (min-width: 1600px) {
    padding: ${({ theme: { spacing } }) => `${spacing.s9} 0 ${spacing.s10}`};
  }

  p {
    line-height: ${({ theme: { lineHeight } }) => lineHeight.s5};
    @media screen and (min-width: 1000px) {
      max-width: 50vw;
    }
  }
`;

const Title = styled.h1`
  text-align: center;
  line-height: ${({ theme: { lineHeight } }) => lineHeight.s4};
  margin-bottom: 0.5em;

  @media screen and (min-width: 1000px) {
    text-align: left;
  }
`;

const PictureWrapMobile = styled.div`
  position: relative;
  margin: ${({ theme: { spacing } }) => `${spacing.s8} 0  ${spacing.s9}`};

  @media screen and (min-width: 1000px) {
    display: none;
  }
`;

const Background = styled.div`
  background: ${({ theme: { primary } }) => primary.s4.replace("1)", "0.2)")};
  position: absolute;
  width: 140vw;
  height: 120%;
  top: -10%;
  left: -15%;

  @media screen and (min-width: 1000px) {
    width: 50vw;
    transform: translateX(25vw);
    left: -7%;
  }

  @media screen and (min-width: 1000px) {
    transform: translateX(0);
    width: 100%;
    height: 100%;
    left: 40px;
    top: -40px;
  }
`;

const IMG = styled(Img)`
  margin: 0 auto;

  @media screen and (min-width: 1000px) {
    width: 100%;
    max-width: initial;
    margin: 0;
  }
`;

const Text = styled(BlockStyling)`
  padding-bottom: ${({ theme: { spacing } }) => spacing.s2};

  blockquote {
    font-size: 24px;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.semiBold};
    color: ${({ theme: { primary } }) => primary.s7};
    line-height: ${({ theme: { lineHeight } }) => lineHeight.s4};

    @media screen and (min-width: 1300px) {
      position: absolute;
      max-width: 375px;
      right: calc(30px + 5vw);
      bottom: 170px;
      font-size: 28px;
    }
  }
`;

const Grid = styled.div`
  @media screen and (min-width: 1000px) {
    display: grid;
    grid-template-columns: 2fr 1.5fr;
  }
`;

const PictureWrapDesktop = styled.div`
  display: none;
  position: relative;

  @media screen and (min-width: 1000px) {
    width: 100%;
    max-width: 450px;
    display: block;
    align-self: center;
    transform: translateX(8vw);
  }
`;

export default function Content({ content }) {
  const { handleChange } = useContext(ModalContext);

  return (
    <Wrapper>
      <Container>
        <Grid>
          <div>
            <Title>{content.title}</Title>
            <PictureWrapMobile>
              <Background />
              <IMG fluid={content.headshot} alt="Rogier Overvliet" />
            </PictureWrapMobile>
            <div>
              <Text>
                <Block content={content.text} />
              </Text>
              <Button onClick={handleChange}>Neem contact op</Button>
            </div>
          </div>
          <PictureWrapDesktop>
            <Background />
            <IMG fluid={content.headshot} alt="Rogier Overvliet" />
          </PictureWrapDesktop>
        </Grid>
      </Container>
    </Wrapper>
  );
}
