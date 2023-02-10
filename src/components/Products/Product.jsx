import React from "react";
import styled from "styled-components";
import { Product3, Product4 } from "../../assets/img/img";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";
const Box = styled.div`
  padding: 47px 0px;
  display: flex;
  align-items: flex-start;
  gap: 20px;
`;
const Product = styled.section``;
const Right = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: flex-start;
`;
const RightBottom = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
export default function Products() {
  return (
    <Product>
      <div className="container">
        <Box>
          <Card1 />
          <Right>
            <Card2 />
            <RightBottom>
              <Card3 img={Product3} />
              <Card3 img={Product4} />
            </RightBottom>
          </Right>
        </Box>
      </div>
    </Product>
  );
}
