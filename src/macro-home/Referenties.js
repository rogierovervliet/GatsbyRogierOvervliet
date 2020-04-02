// Components==============
import React, { useRef, useState } from "react";
import styled from "styled-components";
import Block from "../micro-components/Block";
import Carousel from "../micro-components/Carousel/Carousel";
import { useIsOverflown } from "../micro-components/useIsOverFlown";
import { BlockStyling, Container, L } from "../style/Mixins";
// =========================

const Wrapper = styled.div`
  margin-top: ${({ theme: { spacing } }) => spacing.s11};
  margin-bottom: ${({ theme: { spacing } }) => spacing.s10};

  h2 {
    margin-bottom: ${({ theme: { spacing } }) => spacing.s7};
    text-align: center;
  }
`;

const Card = styled.div`
  background-color: ${({ theme: { white } }) => white};
  border-radius: ${({ theme: { borderRadius } }) => borderRadius};
  box-shadow: ${({ theme: { shadow } }) => shadow.medium};
  margin: 1em auto;
  padding: ${({ theme: { spacing } }) => `${spacing.s6} ${spacing.s5}`};
  position: relative;

  .name {
    text-align: center;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
    margin-bottom: ${({ theme: { spacing } }) => spacing.s2};
  }

  .function {
    text-align: center;
    margin-bottom: ${({ theme: { spacing } }) => spacing.s4};
  }

  .plus {
    color: ${({ theme: { primary } }) => primary.s4};
    display: block;
    margin: 0 auto;
    margin-top: ${({ theme: { spacing } }) => spacing.s6};
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.semiBold};
  }
`;
const OverflowWrap = styled.div`
  height: 325px;
  overflow: ${({ overflow }) => overflow};
`;

const Overflow = ({ children }) => {
  const [overflow, setOverflow] = useState("hidden");

  const handleChange = () => {
    overflow === "hidden" ? setOverflow("auto") : setOverflow("hidden");
  };

  const overflowRef = useRef();

  const isOverFlown = useIsOverflown(overflowRef);

  return (
    <>
      <OverflowWrap overflow={overflow} ref={overflowRef}>
        {children}
      </OverflowWrap>{" "}
      <button className="plus" onClick={handleChange}>
        {overflow === "auto" ? "Lees minder" : isOverFlown ? "Lees meer" : ""}
      </button>
    </>
  );
};

export default function Referenties({ content }) {
  const referenties = content.map(e => {
    const naam = e.naam.nl;
    const functie = e.functie.nl;
    const tekst = e.tekst;

    return (
      <Card key={naam}>
        <Overflow>
          <L className="name">{naam}</L>
          <L className="function">{functie}</L>
          <BlockStyling>
            <Block content={tekst} />
          </BlockStyling>
        </Overflow>
      </Card>
    );
  });

  return (
    <Wrapper>
      <Container>
        <h2>Referenties</h2>
        <Carousel>{referenties}</Carousel>
      </Container>
    </Wrapper>
  );
}
