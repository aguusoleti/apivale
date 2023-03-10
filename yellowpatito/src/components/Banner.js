// import { Paper, Typography } from "@mui/material";
// import React from "react";
// import { getApiData } from "../hooks/useGetProducts";

// function Banner() {
//   const [data, setData] = React.useState(null);
//   const [loading, setLoading] = React.useState(true);



//   React.useEffect(() => {
//     getApiData()
//       .then(response => {
//         setData(response.response.assumptionData[0]);
//         setLoading(false);
//       })
//       .catch(error => {
//         console.log(error);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return <div>Cargando...</div>;
//   }
  
//   return setTimeout(() => {
    
//     console.log(data )
//     console.log("soy banner" )
//     return (
//       <div>
//         <a>Hola</a>
//         <h1>{data.churns}</h1>
//           <Typography>Holaa</Typography>
//           <a>Holaaa{data.canales[0].name}</a>
//           <Typography>{data.churns}</Typography>
//           <Typography>{data.paises}</Typography>
//           <Typography>{data.productos}</Typography>
//           <Typography>{data.idUser}</Typography>
//           <Typography>{data.__v}</Typography>
//       </div>
//     );
//   }, 1000);
// }


// export default Banner

