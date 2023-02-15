import React from "react";
import { FiChevronsRight } from "react-icons/fi";
import styled from "styled-components";
import { BackHero } from "../../../assets/img/img";
const Cardd = styled.div`
  width: 100%;
  height: 490px;
  background-color: #efe9e9;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;
const BackImg = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
`;
const Texts = styled.div`
  padding-left: 70px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 11px;
`;
const Tittle = styled.h1`
  font-family: SF Pro Display;
  font-size: 56px;
  font-weight: 500;
  line-height: 50px;
  letter-spacing: 0em;
  text-align: left;
  width: 600px;
`;
const Paragrf = styled.p`
  font-family: SF Pro Display;
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;
  width: 420px;
  margin-bottom: 26px;
`;
const Btn = styled.button`
  font-family: "SF Pro Display";
  font-size: 14px;
  font-weight: 500;
  line-height: 15px;
  letter-spacing: 0em;
  text-align: left;
  padding: 15px 23px;
  border: 1px solid #121212;
  border-radius: 100px;
  background-color: transparent;
  display: flex;
  align-items: flex-start;
  gap: 7px;
  cursor: pointer;
`;
export default function Card() {
  return (
    <>
      <Cardd>
        <Texts>
          <Tittle>Jackets for all kinds of deseases</Tittle>
          <Paragrf>
            Clothing is typically made of fabrics or textiles but over time has
            included garments made from animal skin
          </Paragrf>
          <Btn>
            <FiChevronsRight />
            Подробнее
          </Btn>
        </Texts>
        <BackImg src={BackHero} alt="" />
      </Cardd>
    </>
  );
}
