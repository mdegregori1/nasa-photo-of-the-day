import React, { useState, useEffect}  from "react";
import axios from "axios";
import NasaProps from "./NasaProps";

function NasaCall(){
    const [data, setData] = useState(null);

    //
    useEffect(()=>{
        axios
            .get('https://api.nasa.gov/planetary/apod?api_key=Buz2R3bZ2K2bTKD4xDwulhWS5GwCnfcLa9Qlt2b0')
            .then(response => {
                const newData = response.data;
                console.log("testing testing", newData);
                setData(newData);
            })
            .catch(error => {
                console.log("there's an issue retrieving the data", error);
            })
    }, [])

    if(data == null) {
        return (
            <div>
                <img src = "https://www.kickassfacts.com/wp-content/uploads/2018/07/loading-game-life.jpg"/>
                
            </div>
        );
    }
    return (
        <div>
            <NasaProps 
                title={data.title}
                url={data.hdurl}
                description={data.explanation}
                date={data.date}
                copyright={data.copyright}
            />
        </div>
    )
}
export default NasaCall;