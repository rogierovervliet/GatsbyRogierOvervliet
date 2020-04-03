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
      <Head
        title="Visie"
        description="Page description goes here"
        keywords="content"
      />
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
