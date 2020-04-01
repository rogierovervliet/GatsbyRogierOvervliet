// Components==============
import React from "react";
import styled from "styled-components";
import Video from "./Video";
// =========================

const Wrapper = styled.div`
  height: ${({ theme: { spacing } }) => `calc(100vh - ${spacing.s9})`};
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  @media screen and (min-width: 1250px) {
    display: grid;
    grid-template-columns: 0.6fr 1fr;
    grid-gap: 5em;
    justify-content: center;
    margin: 0 8%;
  }
`;

const TekstContainer = styled.div`
  margin: 0 5%;
  margin-top: -3em;

  @media screen and (min-width: 768px) {
    margin: 0 6.5%;
  }

  @media screen and (min-width: 1250px) {
    margin: initial;
    align-self: center;
    transform: translateY(-10vh);
  }
`;

const VideoContainer = styled.div`
  @media screen and (min-width: 700px) {
    margin: 0 6.5%;
  }

  @media screen and (min-width: 1200px) {
    margin: 0 8%;
  }

  @media screen and (min-width: 1250px) {
    margin: initial;
    align-self: center;
    justify-self: end;
  }
`;

const Title = styled.h1`
  color: ${({ theme: { primary } }) => primary.s4};
  letter-spacing: 1.2px;

  @media screen and (min-width: 700px) {
    text-align: center;
    margin: 0 auto;
  }

  @media screen and (min-width: 1250px) {
    margin: initial;
    text-align: left;
  }
`;

const Tekst = styled.h2`
  line-height: ${({ theme: { lineHeight } }) => lineHeight.s3};
  margin-top: ${({ theme: { spacing } }) => spacing.s3};
  max-width: 450px;

  font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};

  @media screen and (min-width: 700px) {
    text-align: center;
    margin: ${({ theme: { spacing } }) => spacing.s3} auto 0;
  }

  @media screen and (min-width: 1250px) {
    margin: ${({ theme: { spacing } }) => spacing.s3} 0 0;
    text-align: left;
  }
`;

export default function Hero({ content }) {
  return (
    <Wrapper>
      <TekstContainer>
        <Title>{content.titel}</Title>
        <Tekst>{content.tekst}</Tekst>
      </TekstContainer>
      <VideoContainer>
        <Video />
      </VideoContainer>
    </Wrapper>
  );
}
