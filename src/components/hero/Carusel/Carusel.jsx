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
    autoplaySpeed: 5000,
    cssEase: "linear",
  };
 
  const Sliderr = styled(Slider)`
    width: 100%;
    height: 490px !important;
    position: relative;
  `;
  return (
      <Sliderr {...settings}>
        <Card />
        <Card />
        <Card />
        <Card />
      </Sliderr>
  );
};
