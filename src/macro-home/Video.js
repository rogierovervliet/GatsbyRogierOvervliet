// Components==============
import placeholder from "assets/placeholder.jpg";
import mp4 from "assets/test.mp4";
import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import styled from "styled-components";
// =========================

const VideoWrap = styled.div`
  width: 100%;
  position: relative;

  @media screen and (min-width: 700px) {
    max-width: 650px;
    margin: 0 auto;
  }

  @media screen and (min-width: 1250px) {
    max-width: 850px;
    margin: initial;
  }
`;

const VideoComp = styled.video`
  max-width: 100%;
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

  @media screen and (min-width: 1250px) {
    display: block;
  }
`;

const VideoBackground2 = styled.div`
  background: ${({ theme: { primary } }) => primary.s4};
  width: 100%;
  height: 100%;
  position: absolute;
  clip-path: polygon(0 20%, 100% 0, 100% 80%, 0 100%);
  transform: scale(1.5);
  z-index: -1;
  top: 0;

  @media screen and (min-width: 700px) {
    display: none;
  }
`;

const Mute = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;
  top: 0;
  transition: 0.2s;

  svg {
    position: absolute;
    width: 50px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  #color {
    fill: none;
  }

  &:hover {
    background: ${({ theme: { black } }) => black.replace("1)", "0.4)")};
    #color {
      fill: #fff;
    }
  }

  display: none;
  @media screen and (min-width: 1250px) {
    cursor: pointer;
    display: block;
  }
`;

export default function Video() {
  const [hover, setHover] = useState(false);

  const videoRef = useRef();

  const query =
    typeof window !== "undefined" && window.matchMedia("(min-width: 1250px)");

  const mute = () => {
    if (hover) {
      videoRef.current.muted
        ? (videoRef.current.muted = false)
        : (videoRef.current.muted = true);
    }
  };

  return (
    <VideoWrap
      onMouseEnter={() => {
        if (query.matches === true) {
          setHover(true);
        }
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
      onClick={mute}
    >
      <VideoComp
        // controls
        muted
        autoPlay
        loop
        playsInline
        ref={videoRef}
        crossOrigin="anonymous"
        poster={placeholder}
      >
        <source src={mp4} type="video/mp4" />
      </VideoComp>
      <Mute>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300.975 601.951">
          <path
            id="color"
            data-name="Icon metro-volume-mute"
            d="M282.052,605.807a21.488,21.488,0,0,1-15.207-6.3L101.158,433.821H24.069a21.5,21.5,0,0,1-21.5-21.5V197.341a21.5,21.5,0,0,1,21.5-21.5h77.089L266.846,10.154a21.5,21.5,0,0,1,36.7,15.2V584.309a21.5,21.5,0,0,1-21.5,21.5Z"
            transform="translate(-2.571 -3.856)"
          />
        </svg>
      </Mute>
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
      <VideoBackground2 />
    </VideoWrap>
  );
}
