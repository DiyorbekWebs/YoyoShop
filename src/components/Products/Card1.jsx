import React from "react";
import styled from "styled-components";
import { Product1 } from "../../assets/img/img";
import { FiChevronsRight } from "react-icons/fi";
const Card = styled.div`
  padding: 72px 23px 41px 40px;
  display: flex;
  align-items: flex-end;
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
  font-family: "SF Pro Display";
  font-size: 16px;
  font-weight: 500;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;
  color: #ff2828;
`;
const Linnk = styled.p`
  font-family: SF Pro Display;
  font-size: 14px;
  font-weight: 500;
  line-height: 15px;
  letter-spacing: 0em;
  text-align: left;
  display: flex;
  align-items: center;
  gap: 7px;
  cursor: pointer;
`;
const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 191px;
`;
export default function Card1() {
  return (
    <>
      <Card>
        <Text>
          <Texts>
            <ClothesNum>144 одежд</ClothesNum>
            <Tittle>Одежды для женщин на любой вкус и сезон</Tittle>
            <Cost>от 60 000 uzs</Cost>
          </Texts>
          <Linnk>
            <FiChevronsRight />
            Подробнее
          </Linnk>
        </Text>
        <img src={Product1} alt="" />
      </Card>
    </>
  );
}
