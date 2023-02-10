import React from "react";
import { CgShoppingBag } from "react-icons/cg";
import styled from "styled-components";

const Cardd = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
`;
const Img = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 330px;
  height: 330px;
  background-color: #f5f5f5;
`;
const Texts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  align-items: flex-start;
  margin-bottom: 3px;
`;
const Status = styled.p`
  font-family: SF Pro Display;
  font-size: 12px;
  font-weight: 500;
  line-height: 14px;
  letter-spacing: 0em;
  text-align: left;
  color: #ff0000;
  text-transform: uppercase;
`;
const ProductName = styled.h1`
  font-family: SF Pro Display;
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  width: 318px;
  margin-bottom: 6px;
  width: 318px;
`;
const Cost = styled.p`
  font-family: SF Pro Display;
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  letter-spacing: 0em;
  text-align: left;
`;
const ShopBtn = styled.button`
  display: flex;
  align-items: center;
  font-family: SF Pro Display;
  font-size: 12px;
  font-weight: 500;
  line-height: 14px;
  letter-spacing: 0em;
  text-align: left;
  gap: 11px;
  background-color: transparent;
  padding: 9px 12px;
  border-radius: 100px;
`;
export default function Card({img}) {
  return (
    <>
      <Cardd>
        <Img>
          <img src={img} alt="" />
        </Img>
        <Texts>
          <Status>New</Status>
          <ProductName>Худи для мальчика с утеплителем Fellex®</ProductName>
          <Cost>7 000 000 so’m</Cost>
        </Texts>
        <ShopBtn>
          <CgShoppingBag />
          добавить в корзину
        </ShopBtn>
      </Cardd>
    </>
  );
}
