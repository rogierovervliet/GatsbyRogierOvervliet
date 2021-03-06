// Components==============
import React from "react";
import styled from "styled-components";
import Block from "../micro-components/Block";
import { BlockStyling, Container } from "../style/Mixins";
// =========================

const Wrapper = styled.div`
  position: relative;
  padding-top: 1.5em;
  padding-bottom: ${({ theme: { spacing } }) => spacing.s10};

  h1 {
    margin-bottom: 0.5em;
    line-height: 1.6;
  }

  h5 {
    margin-bottom: ${({ theme: { spacing } }) => spacing.s3};

    :first-child {
      margin-top: 0;
    }
  }

  strong {
    font-size: 30px;
    color: ${({ theme: { primary } }) => primary.s4};
  }
`;

const CustomContainer = styled(Container)`
  max-width: 750px;
`;

const ScreenFiller = styled.div`
  display: none;

  @media screen and (min-width: 1300px) {
    display: block;
  }

  position: absolute;
  height: 100%;
  width: 35vw;
  background: ${({ theme: { primary } }) => primary.s4.replace("1)", "0.8)")};
  right: ${({ right }) => right};
  bottom: 0;
  clip-path: polygon(15% 0, 100% 0, 100% 100%, 0% 100%);
`;

export default function Vision({ content }) {
  return (
    <Wrapper>
      <CustomContainer>
        <h1>{content.title}</h1>
        <BlockStyling>
          <Block content={content.tekst} />
        </BlockStyling>
      </CustomContainer>
      <ScreenFiller right="-50px" />
      <ScreenFiller right="-30px" />
    </Wrapper>
  );
}
