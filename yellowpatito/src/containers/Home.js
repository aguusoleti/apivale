//rsc
import { Typography } from "@mui/material";
import React from "react";
import Banner from "../components/Banner";
;
import { getApiData } from "../hooks/useGetProducts";
// import "../styles/Styles.scss";

const Home = () => {

const info = getApiData().then(response => {
  console.log(response.response.assumptionData); // Accede a los 15 elementos de la respuesta de la API
});
  return (
    <section className="main-container">
      <div className="cards-container">
       
 
          <Banner />
      
      </div>
    </section>
  );
};

export default Home;
