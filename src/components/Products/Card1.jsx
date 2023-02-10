import React from "react";
import styled from "styled-components";
import { Product1 } from "../../assets/img/img";
import { FiChevronsRight } from "react-icons/fi";
const Card = styled.div`
  padding: 75px 23px 31px 40px;
  display: flex;
  align-items: center;
  background-color: #f5f5f5;
`;
const Texts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
const ClothesNum = styled.p`
  font-family: SF Pro Display;
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;
  opacity: 0.75;
`;
const Tittle = styled.h1`
  font-family: SF Pro Display;
  font-size: 32px;
  font-weight: 500;
  line-height: 38px;
  letter-spacing: 0em;
  text-align: left;
  width: 335px;
`;
const Cost = styled.p`
  font-family: SF Pro Display;
  font-size: 16px;
  font-weight: 600;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;
  color: #ff2828;
  margin-bottom: 177px;
`;
const Linnk = styled.p`
  font-family: Inter;
  font-size: 14px;
  font-weight: 500;
  line-height: 15px;
  letter-spacing: 0em;
  text-align: left;
  display: flex;
  align-items: center;
  gap: 7px;
`;
export default function Card1() {
  return (
    <>
      <Card>
        <Texts>
          <ClothesNum>144 одежд</ClothesNum>
          <Tittle>Одежды для женщин на любой вкус и сезон</Tittle>
          <Cost>от 60 000 uzs</Cost>
          <Linnk><FiChevronsRight/>Подробнее</Linnk>
        </Texts>
        <img src={Product1} alt="" />
      </Card>
    </>
  );
}
