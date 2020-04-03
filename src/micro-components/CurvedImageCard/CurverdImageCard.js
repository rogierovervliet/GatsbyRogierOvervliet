// Components==============
import Img from "gatsby-image";
import React from "react";
import styled from "styled-components";
import CurveImp from "./Curve.inline.svg";

// =========================

const Card = styled.div`
  position: relative;
  background-color: ${({ theme: { white } }) => white};
  border-radius: ${({ theme: { borderRadius2 } }) => borderRadius2};
  box-shadow: ${({ theme: { shadow } }) => shadow.medium};
  width: 100%;
  height: 375px;
  max-width: ${({ theme: { spacing } }) => spacing.s14};
  margin: 0 auto;
  overflow: hidden;
`;

const Image = styled(Img)`
  height: 60%;
`;

const CurveSvg = styled(CurveImp)`
  position: absolute;
  right: -5%;
  height: 10%;
  width: 110%;
  transform: translateY(-80%);

  #changeColor {
    fill: ${({ theme: { white } }) => white};
  }
`;

const Content = styled.div`
  z-index: 1;
  padding: ${({ theme: { spacing } }) => `0 ${spacing.s6} ${spacing.s6}`};
  height: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export default function CurvedImageCard({ img, children, alt }) {
  return (
    <Card>
      <Image fluid={img} alt={alt} />
      <CurveSvg />
      <Content>{children}</Content>
    </Card>
  );
}
