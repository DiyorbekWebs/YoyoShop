import React, { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import Card from "./Card";
import "./carusel.css";
export const Carusel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    cssEase: "linear"
  };
  const Div = styled.div`
    width: 100%;
    height: 80vh;
    background-color: red;
  `;
  const Sliderr = styled(Slider)`
    position: relative;
  `;
  return (
    <div>
      <Sliderr {...settings}>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </Sliderr>
    </div>
  );
};
