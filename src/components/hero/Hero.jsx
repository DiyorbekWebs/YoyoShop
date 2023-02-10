import React from "react";
import styled from "styled-components";
import { Carusel } from "./Carusel/Carusel";
const Hero = styled.section``;
const Box = styled.div``;
export default function HeroComponent() {
  return (
    <>
      <Hero>
        <div className="container">
          <Box>
            <Carusel/>
          </Box>
        </div>
      </Hero>
    </>
  );
}
