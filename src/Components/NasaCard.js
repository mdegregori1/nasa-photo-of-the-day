import React from "react";
import {
    CardText
  } from 'reactstrap';
import styled from "styled-components"

const NasaCard = (props) => {
  return (
    <Container>
      <Cards>
        <Title>{props.cardTitle} </Title>
        <Image top width="100%" src={props.cardUrl} alt="nasa stars" />
        <Content>
          <TextSub>{props.cardDate}</TextSub>
          <CardText>{props.cardDescription}</CardText>

        </Content>
      </Cards>
    </Container>
  );
};

export default NasaCard;

const Container= styled.div`
  width: 100%;
  font-family: 'Titillium Web', sans-serif;
  
  


`;

const Cards = styled.div`
     display: flex;
     align-items: center;
     justify-content: center;
     flex-wrap: wrap;



`;
const Title=styled.div`
  font-size: 25px;
  font-weight: bold;
  margin-top: 10px;





`;
const Image= styled.img`

  width: 100%;
  height: 70vh;
  padding: 25px 25px 0 25px;
  border-radius: 50px;

`;

const Content = styled.div`

  display: flex;
  align-items:center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0 30px 0 30px;

  



`;
const TextSub = styled.div`

  font-weight: bold;
  margin: 5px;



`;