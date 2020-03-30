// Components==============
import React from "react";
import Head from "../global-components/Layout/Head";
// =========================

export default function Index({ data }) {
  return (
    <>
      <Head
        title="Home"
        description="Page description goes here"
        keywords="content"
      />
      <h1>{data.sanityHome.WelkomTitel.nl}</h1>
    </>
  );
}

export const query = graphql`
  query PageQ {
    sanityHome {
      WelkomTitel {
        nl
      }
    }
  }
`;
