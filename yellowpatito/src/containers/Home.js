// import React from 'react';
// import { getApiData } from '../hooks/getApi.js';

// const Home = () => {
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

//   console.log(data );
//   console.log("soy home" );
//   return (
//     <section className="main-container">
//       <div className="cards-container">
//         {/* <Banner /> */}
//         <div>
//         <p>{data.canales[0].name}</p>
//         <p>{data.canales[1].name}</p>
//         </div>
//         <div>
//         <p>{data.churns[0].name}</p>
//         <p>{data.churns[1].name}</p>
//         </div>
//         <div>
//         <p>{data.productos[0].name}</p>
//         <p>{data.productos[1].name}</p>
//         <p>{data.productos[2].name}</p>
//         </div>
//         <div>
//         <p>{data.paises[0].value}</p>
//         <p>{data.paises[1].value}</p>
//         </div>
//       </div>
//     </section>
//   );
// };
// export default Home