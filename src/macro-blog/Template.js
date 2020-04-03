// Components==============
import Img from "gatsby-image";
import React from "react";
import styled from "styled-components";
import Block from "../micro-components/Block";
import Share from "../micro-components/Share";
import { BlockStyling, Container } from "../style/Mixins";
// =========================

const Wrapper = styled.div`
  margin: ${({ theme: { spacing } }) => `0 0 ${spacing.s10}`};

  .gatsby-image-wrapper {
    margin-bottom: ${({ theme: { spacing } }) => spacing.s6};
    height: 70vh;
  }
`;

const ImageWrap = styled.div`
  position: relative;
`;

const TextWrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  h1 {
    text-align: center;
    color: white;
    margin-bottom: ${({ theme: { spacing } }) => spacing.s1};
  }

  p {
    text-align: center;
    color: ${({ theme: { gray } }) => gray.s2};
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
  }
`;

const Bg = styled.div`
  background: ${({ theme: { black } }) => black.replace("1)", "0.8)")};
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

const Container2 = styled.div`
  max-width: 850px;
  margin: ${({ theme: { spacing } }) => spacing.s8} auto;

  @media screen and (min-width: 1000px) {
    margin: ${({ theme: { spacing } }) => spacing.s10} auto;
  }
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  padding-top: ${({ theme: { spacing } }) => spacing.s4};

  span {
    margin-right: ${({ theme: { spacing } }) => spacing.s4};
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.semiBold};
  }
`;

export default function Template({ content }) {
  return (
    <Wrapper>
      <ImageWrap>
        <Img fluid={content.picture} alt={content.name} />
        <Bg />
        <TextWrap>
          <h1>{content.title}</h1>
          <p>{content.date}</p>
        </TextWrap>
      </ImageWrap>
      <Container2>
        <Container>
          <BlockStyling>
            <Block content={content.text} />
          </BlockStyling>
          <Flex>
            <span>Deel deze post:</span>
            <Share />
          </Flex>
        </Container>
      </Container2>
    </Wrapper>
  );
}
