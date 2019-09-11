import React, { useEffect, useState } from "react";
import axios from "axios";
import NasaCard from "./NasaCard";

//add to state
function NasaImage() {
   
    const[pictures,setPictures] = useState("");

  
    useEffect(() => {
      axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
        .then(response => {
        //   console.log("Nasa Image Data", response);
        const pictures = response.data
        
         setPictures(pictures);
    
        })
        .catch(error => {
          console.log("The data is faulty!", error);
        });
    }, []);
    return (
        <div>
          
         
              <NasaCard cardTitle={pictures.title} cardUrl={pictures.hdurl} cardDescription={pictures.explanation} cardDate={pictures.date}/>

        </div>
    
      );
    }


export default NasaImage;


