import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import Card from "./Card";
const User = styled.div`
  padding: 45px 0px;
  display: flex;
  flex-direction: column;
  gap: 28px;
  overflow: hidden;
`;
const Tittle = styled.h1`
  font-family: SF Pro Display;
  font-size: 24px;
  font-weight: 500;
  line-height: 29px;
  letter-spacing: 0em;
  text-align: left;
`;
const Cards = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;
const Box = styled.div``;
export default function Users() {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow:3.3,
    slidesToScroll: 1,
  };
  const Sliderr = styled(Slider)`
    width: 100% !important;
    height: 280px;
`;
  return (
    <>
      <User>
        <div className="container">
          <Box>
            <Tittle>Что говорят наши клиенты</Tittle>
          </Box>
        </div>
        <Sliderr {...settings}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Sliderr>
      </User>
    </>
  );
}
