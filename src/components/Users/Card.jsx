import React from "react";
import styled from "styled-components";
import { UserImg } from "../../assets/img/img";
const Cardd = styled.div`
  padding: 57px 136px 44px 52px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 28px;
  background-color: #f5f3f3;
`;
const Paragrf = styled.p`
  font-family: SF Pro Display;
  font-size: 18px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: left;
  color: #5b5b5b;
  width: 250px;
`;
const User = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;
const Texts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;
const Text1 = styled.h4`
  font-family: SF Pro Display;
  font-size: 16px;
  font-weight: 500;
  line-height: 25px;
  letter-spacing: 0em;
  text-align: left;
`;
const Text2 = styled.p`
  font-family: Times New Roman;
  font-size: 14px;
  font-style: italic;
  font-weight: 400;
  line-height: 15px;
  letter-spacing: 0em;
  text-align: left;
  opacity: 0.75;
`;
export default function Card() {
  return (
    <>
      <Cardd>
        <Paragrf>все товары есть в наличии на складе</Paragrf>
        <User>
          <img src={UserImg} alt="" />
          <Texts>
            <Text1>Wade Warren</Text1>
            <Text2>Электро-скутер</Text2>
          </Texts>
        </User>
      </Cardd>
    </>
  );
}