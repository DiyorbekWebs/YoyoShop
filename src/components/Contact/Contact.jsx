import React from "react";
import { FiChevronsRight } from "react-icons/fi";
import styled from "styled-components";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import "../../assets/fonts/stylesheet.css";
const Contactt = styled.div`
  padding: 0px 0px 95px 0px;
`;
const Box = styled.div`
  display: flex;
  padding: 0px 80px;
`;
const Card = styled.div`
  padding: 66px 56px 47px 46px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 18px;
  box-shadow: 0px 0px 10px lightgrey;
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
  align-items: center;
  gap: 7px;
  font-family: Inter;
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
  gap: 80px;
  padding: 4px 4px 4px 27px;
  border: 1px solid lightgrey;
  border-radius: 10px;
`;
const Input = styled.input`
  outline: none;
  border: none;
`;
const Btn = styled.div`
  padding: 14px 23px;
  border: 1px solid black;
  border-radius: 10px;
`;
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
                <Btn>{">"}</Btn>
              </InputBox>
            </Card>
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d7175.200463171542!2d69.32552836283764!3d41.31524555482112!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDE4JzU0LjAiTiA2OcKwMTknNDQuOCJF!5e0!3m2!1sru!2s!4v1676050043943!5m2!1sru!2s"
                width={750}
                height={500}
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Box>
        </div>
      </Contactt>
    </>
  );
}
