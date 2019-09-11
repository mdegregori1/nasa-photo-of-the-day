import React from "react";

const NasaCard = (props) => {
    // console.log('props', props)
    return (
        <div> 
            <h1>{props.cardTitle} </h1>
            <img src = {props.cardUrl} />
            <p>{props.cardDate}</p>
            <p>{props.cardDescription}</p>
           
        </div>
    )
}

export default NasaCard;

