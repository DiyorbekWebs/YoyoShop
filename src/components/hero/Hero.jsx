import React from "react";
import styled from "styled-components";
import { Carusel } from "./Carusel/Carusel";
const Hero = styled.section``;
const Box = styled.div``;
const Carusell = styled(Carusel)`
  width: 100%;
  height: 490px;
  background-color: blue;
`;
export default function HeroComponent() {
  return (
    <>
      <Hero>
        <div className="container">
          <Box>
            <Carusell />
          </Box>
        </div>
      </Hero>
    </>
  );
}
