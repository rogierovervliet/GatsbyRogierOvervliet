// Components==============
import mp4 from "assets/test.mp4";
import { motion } from "framer-motion";
import React, { useState } from "react";
import styled from "styled-components";
import { Container } from "../style/Mixins";
// =========================

const Wrapper = styled.div`
  height: ${({ theme: { spacing } }) => `calc(100vh - ${spacing.s9})`};
  width: 100%;
  display: grid;
  justify-content: center;
  align-items: center;
`;

const VideoWrap = styled.div`
  max-width: 1000px;
  width: 100%;
  position: relative;
`;

const VideoBackground = styled(motion.div)`
  background: ${({ theme: { primary } }) => primary.s4};
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
  top: 0;

  display: none;

  @media screen and (min-width: 800px) {
    display: block;
  }
`;

const Video = styled.video`
  max-width: 100%;
  position: relative;
`;

export default function Hero({ content }) {
  const [hover, setHover] = useState(false);

  return (
    <Wrapper>
      <Container>
        <VideoWrap
          onMouseEnter={() => {
            setHover(true);
          }}
          onMouseLeave={() => {
            setHover(false);
          }}
        >
          <Video autoPlay muted loop>
            <source src={mp4} type="video/mp4" />
          </Video>
          <VideoBackground
            animate={hover ? "hover" : "noHover"}
            variants={{
              hover: {
                x: 0,
                y: 0,
                scale: 0.98
              },
              noHover: { x: 27.5, y: 27.5, scale: 1 }
            }}
            initial={{ x: 0, y: 0, scale: 0.98 }}
          />
        </VideoWrap>
      </Container>
    </Wrapper>
  );
}
