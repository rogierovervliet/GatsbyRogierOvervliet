// Components==============
import React from "react";
import styled from "styled-components";
import Head from "../global-components/Layout/Head";
// ========================

const Wrapper = styled.div`
  margin: 0 auto;
  width: 80%;

  h2 {
    text-align: center;
    padding-top: 25vh;
  }
`;

export default function Success() {
  return (
    <>
      <Head title="Success" path="success" noIndex="noindex" />
      <Wrapper>
        <h2>
          Ik heb uw bericht ontvangen. Ik zal zo snel mogelijk proberen terug te
          reageren.
        </h2>
      </Wrapper>
    </>
  );
}
