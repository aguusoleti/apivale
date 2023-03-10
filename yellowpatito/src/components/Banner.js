import { Paper, Typography } from "@mui/material";
import React from "react";
import { getApiData } from "../hooks/useGetProducts";

function Banner() {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    getApiData().then(response => {
      setData(response.response.assumptionData[0]);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <div>Cargando...</div>;
  }

  return setTimeout(() => {

    console.log(data.churns)
    return (
      <div>
        <h1>{data.churns}</h1>
        <Paper>
          <Typography>Holaa</Typography>
          <Typography>{data.canales}</Typography>
          <Typography>{data.churns}</Typography>
          <Typography>{data.paises}</Typography>
          <Typography>{data.productos}</Typography>
          <Typography>{data.idUser}</Typography>
          <Typography>{data.__v}</Typography>
        </Paper>
      </div>
    );
  }, 10000);
}


export default Banner

