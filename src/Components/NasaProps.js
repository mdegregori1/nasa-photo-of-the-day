import React from "react";
import styled from "styled-components";


const NasaProps = (props) => {
    let Copyright = null;
    if(props.copyright ){
        //if condition is true, then create a react element 
        Copyright = (<p> Copyright - {props.copyright}</p>)
    }
    return (
        <Container>
            <Nav>
                <Img2 src = "https://i.ibb.co/NsFs5KQ/NASALogo.png"/>
                <Title>Photo of the Day</Title>
                <h4>Project by Mauricio Degregori</h4>
            </Nav>
            <Main>
            <Img src  = {props.url}/>
            <Content>
                <Ntitle>{props.title}</Ntitle>
                    {Copyright}
                <p>{props.date}</p>
                <p>{props.description}</p>
            </Content>
            <footer></footer>
            </Main>
        </Container>
    )
}
//styled components
export default NasaProps;

const Img2 = styled.img`
height: 4rem;
width: 5rem;
`;

const Img = styled.img `
border: 2px solid black;
padding: 1%;
height: 50rem;
width: 50rem;
margin-right: 50px;
`;

const Container = styled.div`
font-family: 'Oswald', sans-serif;
`
const Title = styled.h1`

`;

const Content = styled.div`
width: 50%;
padding: 3%;
text-align: left;
`;

const Main = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 2%;
`
const Ntitle = styled.h4`
text-align: center;
margin-bottom: 50px;
`
const Nav = styled.div`
padding: 2%;
color: #fff;
background-color: black;
border: 1px solid black;
display: flex;
justify-content: space-between;
align-items: center;
`;