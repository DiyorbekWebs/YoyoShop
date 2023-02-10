import React from "react";
import { FiChevronRight } from "react-icons/fi";
import styled from "styled-components";
import { Product5, Product6, Product7, Product8 } from "../../assets/img/img";
import Card from "./Card";
const Product = styled.section`
  padding: 73px 0px 120px 0px;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
`;
const Linnk = styled.p`
  font-family: SF Pro Display;
  font-size: 24px;
  font-weight: 500;
  line-height: 29px;
  letter-spacing: 0em;
  text-align: left;
  display: flex;
  align-items: center;
  gap: 4px;
`;
const Cards = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;
export default function TopProduct() {
  return (
    <>
      <Product>
        <div className="container">
          <Box>
            <Linnk>
              Топ бестселлеров
              <FiChevronRight />
            </Linnk>
            <Cards>
              <Card img={Product5} />
              <Card img={Product6} />
              <Card img={Product7} />
              <Card img={Product8} />
            </Cards>
          </Box>
        </div>
      </Product>
    </>
  );
}
