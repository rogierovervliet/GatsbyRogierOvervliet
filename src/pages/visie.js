// Components==============
import { graphql } from "gatsby";
import React from "react";
import Head from "../global-components/Layout/Head";
import Vision from "../macro-visie/Vision";
// =========================

export default function visie({ data }) {
  const vision = {
    title: data.sanityAbout.titel2.nl,
    tekst: data.sanityAbout._rawTekst2
  };

  return (
    <>
      <Head title="Visie" description={`Mijn motivatie maakt een vertaalslag van het verleden, met een brug in het heden naar de toekomst van de volgende generatie. Dit komt tot uiting in de betrokkenheid naar de kwetsbaren in de samenleving en op de arbeidsmarkt. … "x over mij" verder lezen`} />
      <Vision content={vision} />
    </>
  );
}

export const query = graphql`
  query VisionQuery {
    sanityAbout {
      titel2 {
        nl
      }
      _rawTekst2
    }
  }
`;
