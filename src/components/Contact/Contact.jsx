import React from "react";
import { FiChevronsRight } from "react-icons/fi";
import styled from "styled-components";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import "../../assets/fonts/stylesheet.css";
import { Map } from "../../assets/img/img";
import { BiChevronRight } from "react-icons/bi";
const Contactt = styled.div`
  padding: 0px 0px 95px 0px;
`;
const Box = styled.div`
  display: flex;
  gap: 20px;
  position: relative;
`;
const Card = styled.div`
  padding: 66px 56px 47px 46px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 18px;
  background: #FFFFFF;
box-shadow: 17px 8px 54px rgba(0, 0, 0, 0.05);
`;

const Text1 = styled.p`
  font-family: SF Pro Display;
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  letter-spacing: 0em;
  text-align: left;
  opacity: 0.75;
`;
const Texts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 6px;
`;
const Tittle = styled.h1`
  font-family: SF Pro Display;
  font-size: 14px;
  font-weight: 500;
  font-size: 24px;
  letter-spacing: 0em;
  text-align: left;
  width: 400px;
`;
const LocationBtn = styled.button`
  display: flex;
  align-items: flex-end;
  gap: 7px;
  font-family: SF Pro Display;
  font-size: 14px;
  font-weight: 500;
  line-height: 15px;
  letter-spacing: 0em;
  text-align: left;
  color: #ff5c00;
  background-color: transparent;
  border: 1px solid #ff5c00;
  border-radius: 100px;
  padding: 13px 23px;
  margin-bottom: 32px;
`;
const Socials = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 28px;
`;
const List = styled.ul`
  display: flex;
  align-items: center;
  gap: 38px;
`;
const Icon = styled.li`
  font-size: 24px;
`;
const Text2 = styled.p`
  font-family: SF Pro Display;
  font-size: 16px;
  font-weight: 500;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;
  width: 375px;
`;
const InputBox = styled.div`
  display: flex;
  align-items: center;
  gap: 110px;
  padding: 4px 4px 4px 27px;
  border: 1px solid lightgrey;
  border-radius: 10px;
`;
const Input = styled.input`
  outline: none;
  border: none;
  &::placeholder{
    font-family: 'SF Pro Display';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 108.5%;
color: #121212;
opacity: 0.4;
}
`;
const Btn = styled.div`
  padding: 14px 22px;
  border: 2px solid #b9b9b9;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
`;
const Elipse = styled.div`
position: absolute;
  width: 100%;
  height: 500px;
  z-index: 3;
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(255, 255, 255, 0) 0%,
    #ffffff 100%
  );
`;
const Div = styled.div`
position: relative;
`;
const Mapp = styled.img`
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
`
export default function Contact() {
  return (
    <>
      <Contactt>
        <div className="container">
          <Box>
            <Card>
              <Texts>
                <Text1>И конечно же,</Text1>
                <Tittle>
                  Обращайтесь в магазин, мы поможем решить ситуацию в вашу
                  пользу.
                </Tittle>
              </Texts>
              <LocationBtn>
                <FiChevronsRight />
                открыть локацию
              </LocationBtn>
              <Socials>
                <Text1>наши социальные медии:</Text1>
                <List>
                  <Icon>
                    <FaFacebookF />
                  </Icon>
                  <Icon>
                    <AiFillInstagram />
                  </Icon>
                  <Icon>
                    <FaTwitter />
                  </Icon>
                </List>
              </Socials>
              <Text2>
                Подпишитесь на e-mail рассылку и получите скидку на первый
                заказ!
              </Text2>
              <InputBox>
                <Input placeholder="Ваш email address" type="text" />
                <Btn><BiChevronRight /></Btn>
              </InputBox>
            </Card>
            <Mapp src={Map} alt="" />
          </Box>
        </div>
      </Contactt>
    </>
  );
}
