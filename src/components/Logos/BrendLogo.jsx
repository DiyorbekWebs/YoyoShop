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
  display: flex;
  align-items: center;
  gap: 49px;
  overflow: hidden;
  padding: 100px 0px 180px 0px;
`;
export default function LogoBrend() {
  return (
    <>
      <Logos>
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
      </Logos>
    </>
  );
}
