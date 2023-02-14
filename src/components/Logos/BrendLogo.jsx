import React from "react";
import styled from "styled-components";
import {
  Logo,
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
  logo7,
  logo8,
} from "../../assets/img/img";
const Logos = styled.div`
  overflow: hidden;
  padding: 100px 0px 180px 0px;
`;
const Container = styled.div`
width: 100%;
height: auto;
margin: 0 auto;
display: flex;
align-items: center;
justify-content: center;
gap: 49px;
`
export default function LogoBrend() {
  return (
    <>
      <Logos>
        <Container>
          <img src={logo3} alt="" />
          <img src={logo4} alt="" />
          <img src={logo5} alt="" />
          <img src={logo6} alt="" />
          <img src={logo7} alt="" />
          <img src={logo2} alt="" />
          <img src={logo8} alt="" />
          <img src={logo5} alt="" />
          <img src={logo6} alt="" />
          <img src={logo3} alt="" />
          <img src={logo4} alt="" />
          <img src={logo7} alt="" />
        </Container>
      </Logos>
    </>
  );
}
