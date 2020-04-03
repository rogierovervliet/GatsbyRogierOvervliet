// Components==============
import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import CurvedImageCard from "../micro-components/CurvedImageCard/CurverdImageCard";
import { Button, Container } from "../style/Mixins";
// =========================

const Wrapper = styled.div`
  margin: ${({ theme: { spacing } }) => `${spacing.s11} 0 ${spacing.s10}`};
`;

const Grid = styled(Container)`
  display: grid;
  grid-gap: 6em 3em;

  @media screen and (min-width: 300px) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }

  @media screen and (min-width: 1600px) {
    margin: 0 15%;
  }
`;

const Card = styled(CurvedImageCard)`
  background-color: ${({ theme: { white } }) => white};
  border-radius: ${({ theme: { borderRadius } }) => borderRadius};
  box-shadow: ${({ theme: { shadow } }) => shadow.medium};
  padding: ${({ theme: { spacing } }) => `${spacing.s6} ${spacing.s7}`};
`;

const Title = styled.h3`
  text-align: center;
  margin-top: ${({ theme: { spacing } }) => spacing.s1};
`;

const LinkWrap = styled(Link)``;

export default function Overview({ content }) {
  const posts = content.map(e => {
    const title = e.titel.nl;
    const slug = title
      .toLowerCase()
      .replace(/\s+/g, "-")
      .slice(0, 200);
    const image = e.Afbeelding.asset.fluid;

    return (
      <Card img={image} alt={title} key={title}>
        <Title>{title}</Title>

        <LinkWrap to={`/${slug}`}>
          <Button>Lees blog</Button>
        </LinkWrap>
      </Card>
    );
  });

  return (
    <Wrapper>
      <Grid>{posts}</Grid>
    </Wrapper>
  );
}
