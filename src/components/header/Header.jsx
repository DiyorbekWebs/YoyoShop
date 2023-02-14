import React from "react";
import styled from "styled-components";
import { TbGridDots } from "react-icons/tb";
import { Analytcs, Logo } from "../../assets/img/img";
import { AiOutlineSearch, AiOutlineHeart, AiOutlineUser } from "react-icons/ai";
import { SiSimpleanalytics } from "react-icons/si";
import { CgShoppingBag } from "react-icons/cg";

const Nav = styled.nav`
  padding: 14px 0px;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;
const HeaderTop = styled.ul`
  display: flex;
  gap: 20px;
  justify-content: flex-start;
  align-items: center;
`;
const Item = styled.li`
  font-family: SF Pro Display;
  font-size: 15px;
  font-weight: 400;
  line-height: 15px;
  letter-spacing: 0em;
  text-align: left;
`;
const HeaderBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Item2 = styled.li`
  font-family: SF Pro Display;
  font-size: 14px;
  font-weight: 500;
  line-height: 15px;
  letter-spacing: 0em;
  text-align: left;
`;
const List = styled.ul`
  display: flex;
  gap: 36px;
  align-items: center;
`;
const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 66px;
`;
const Category = styled.div`
  display: flex;
  align-items: center;
  gap: 64px;
  padding: 4px 4px 4px 24px;
  border: 1px solid #eeeeee;
  border-radius: 100px;
`;
const AllCategoryBtn = styled.div`
  font-family: SF Pro Display;
  font-size: 18px;
  font-weight: 500;
  line-height: 15px;
  color: #ff5c00;
  display: flex;
  align-items: flex-start;
  gap: 5px;
  padding: 11px 23px;
  border: 1px solid #ff5c00;
  border-radius: 30px;
`;
const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 36px;
`;
const Icons = styled.ul`
  display: flex;
  gap: 47px;
  align-items: center;
`;
const Icon = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 24px;
`;
const LoginBtn = styled.div`
  font-family: SF Pro Display;
  font-size: 14px;
  font-weight: 500;
  line-height: 15px;
  letter-spacing: 0em;
  text-align: left;
  color: #ff5c00;
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 14px 23px;
  border: 2px solid #ff5c00;
  border-radius: 100px;
  cursor: pointer;
`;
const ProductCount = styled.p`
  font-family: Inter;
  font-size: 18px;
  font-weight: 500;
  line-height: 17px;
  letter-spacing: 0em;
  text-align: left;
  color: #ff5c00;
`;
export default function Header() {
  return (
    <>
      <div className="container">
        <Nav>
          <HeaderTop>
            <Item>О магазине</Item>
            <Item>Доставка и оплата</Item>
            <Item>Политика безопасности</Item>
            <Item>Условия соглашения</Item>
            <Item>Публичная оферта</Item>
            <Item>Наши гарантии</Item>
          </HeaderTop>
          <HeaderBottom>
            <Left>
              <img src={Logo} alt="Logo" />
              <Category>
                <List>
                  <Item2>мальчики</Item2>
                  <Item2>женщины</Item2>
                  <Item2>младенцы</Item2>
                </List>
                <AllCategoryBtn>
                  <TbGridDots /> все категории
                </AllCategoryBtn>
              </Category>
            </Left>
            <Right>
              <Icons>
                <Icon>
                  <AiOutlineSearch />
                </Icon>
                <Icon>
                  <AiOutlineHeart />
                  <ProductCount>0</ProductCount>
                </Icon>
                <Icon>
                  <SiSimpleanalytics />
                  <ProductCount>0</ProductCount>
                </Icon>
                <Icon>
                  <CgShoppingBag />
                  <ProductCount>0</ProductCount>
                </Icon>
              </Icons>
              <LoginBtn>
                <AiOutlineUser />
                Войти
              </LoginBtn>
            </Right>
          </HeaderBottom>
        </Nav>
      </div>
    </>
  );
}
