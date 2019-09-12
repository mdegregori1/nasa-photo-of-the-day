// Necessary Imports 
import React from "react";
import {
    CardText
  } from 'reactstrap';
import styled from "styled-components"
// Add function
const NasaCard = (props) => {
  return (
    <Container>
      <Cards>
        <Title>{props.cardTitle} </Title>
        <Image top width="75%" src={props.cardUrl} alt="nasa stars" />
        <Content>
          <TextSub>{props.cardDate}</TextSub>
          <CardText>{props.cardDescription}</CardText>

        </Content>
      </Cards>
    </Container>
  );
};
//export variable 
export default NasaCard;
// design for Card Elements 
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


  height: 70vh;
  padding: 25px 25px 0 25px;
  border-radius: 50px;

`;

const Content = styled.div`

  display: flex;
  align-items:center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0 200px 0 200px;

  



`;
const TextSub = styled.div`

  font-weight: bold;
  margin: 5px;



`;