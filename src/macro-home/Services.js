// Components==============
import Img from "gatsby-image";
import React from "react";
import styled from "styled-components";
import Block from "../micro-components/Block";
import { BlockStyling, flexUnit } from "../style/Mixins";
// =========================

const Wrapper = styled.div`
  margin-top: ${({ theme: { spacing } }) => spacing.s10};
`;

const MainTitle = styled.h2`
  text-align: center;
  margin-bottom: ${({ theme: { spacing } }) => spacing.s7};

  @media screen and (min-width: 800px) {
    margin-bottom: ${({ theme: { spacing } }) => spacing.s9};
  }
`;

const CustomContainer = styled.div`
  margin: 0 5%;

  @media screen and (min-width: 768px) {
    margin: 0 6.5%;
  }

  @media screen and (min-width: 1200px) {
    margin: 0 8%;
  }

  @media screen and (min-width: 1600px) {
    margin: 0 14%;
  }
`;

const Service = styled.div`
  position: relative;

  @media screen and (min-width: 800px) {
    display: grid;
    grid-template-columns: ${({ position }) =>
      position === "L" ? `1.5fr 1fr` : `1fr 1.5fr`};
    grid-column-gap: ${({ theme: { spacing } }) => spacing.s8};
    align-items: center;
    align-content: center;
    margin-bottom: ${({ theme: { spacing }, serviceIndex }) =>
      serviceIndex !== 3 && spacing.s12};
  }

  @media screen and (min-width: 1600px) {
    margin-bottom: ${({ theme: { spacing }, serviceIndex }) =>
      serviceIndex !== 3 && spacing.s13};
  }

  .justify {
    grid-column: ${({ position }) => (position === "L" ? 1 : 2)};
    justify-self: ${({ position }) => (position === "L" ? `start` : `end`)};
    grid-row: 1;
  }

  .gatsby-image-wrapper {
    max-width: 350px;
    height: 220px;
    margin: 0 auto;
    margin-bottom: ${({ theme: { spacing }, serviceIndex }) =>
      serviceIndex !== 3 && spacing.s10};

    @media screen and (min-width: 600px) {
      max-width: 420px;
      height: 250px;
    }

    @media screen and (min-width: 800px) {
      width: 100%;
      grid-column: ${({ position }) => (position === "R" ? 1 : 2)};
      justify-self: ${({ position }) => (position === "R" ? `start` : `end`)};
      grid-row: 1;
      margin: 0;
    }
  }

  .bg {
    display: none;

    @media screen and (min-width: 800px) {
      display: ${({ serviceIndex }) =>
        serviceIndex === 1 || serviceIndex === 3 ? "none" : "block"};
      position: absolute;
      width: 100vw;
      max-width: 1000px;
      height: 145%;
      background: ${({ theme: { primary } }) =>
        primary.s4.replace("1)", "0.02)")};
      top: ${({ serviceIndex }) => serviceIndex === 0 && "170px"};
      left: ${({ serviceIndex }) => serviceIndex === 0 && "-30vw;"};
      right: ${({ serviceIndex }) => serviceIndex === 2 && "-30vw;"};
      clip-path: ${({ serviceIndex }) =>
        serviceIndex === 0
          ? "polygon(0 0, 95% 0, 100% 100%, 0% 100%)"
          : "polygon(5% 0, 100% 0, 100% 100%, 0% 100%)"};
    }

    @media screen and (min-width: 1600px) {
      max-width: 1150px;
    }
  }

  .bgMobile {
    position: absolute;
    width: 120vw;
    height: 90%;
    background: ${({ theme: { primary } }) =>
      primary.s4.replace("1)", "0.03)")};
    bottom: -12.5vh;
    left: -10vw;
    clip-path: ${({ position }) =>
      position === `L`
        ? `polygon(0 0, 90% 25%, 100% 90%, 0% 100%)`
        : `polygon(0% 15%, 100% 0, 100% 100%, 0% 80%);
    `};

    @media screen and (min-width: 800px) {
      display: none;
    }
  }
`;

const Title = styled.h2`
  ${flexUnit(2, 21, 25, "vw", "font-size")};
  margin-bottom: ${({ theme: { spacing } }) => spacing.s4};
`;

const Style = styled(BlockStyling)`
  max-width: 700px;
`;

function isEven(value) {
  if (value % 2 === 0) return "L";
  else return "R";
}

export default function Services({ content }) {
  const combinedContent = content.picture.map((e, index) => {
    const raw = content.array[index];

    const combinedArr = { ...e, raw };

    return combinedArr;
  });

  const services = combinedContent.map((e, index) => {
    const picture = e.afbeelding.asset.fluid;
    const name = e.raw.naam.nl;
    const text = e.raw.tekst;

    return (
      <Service key={name} position={isEven(index)} serviceIndex={index}>
        <div className="justify">
          <Title>{name}</Title>
          <Style>
            <Block content={text} />
          </Style>
          <div className="bgMobile" />
          <div className="bg" />
        </div>
        <Img fluid={picture} alt={name} />
      </Service>
    );
  });

  return (
    <Wrapper>
      <CustomContainer>
        <MainTitle>{content.titel}</MainTitle>
        {services}
      </CustomContainer>
    </Wrapper>
  );
}
