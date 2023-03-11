import React from 'react';
import Products from '../../components/pais/Pais.js/index.js.js';
import UseGetData from '../../hooks/useGetData.js';

const Producto = () => {
  const { productos } = UseGetData();
  console.log(productos)
  return (
    <section>
      {productos && productos.length > 0 && productos.map((producto)=>{
        <>
          <div >
            <p>{producto.value}</p>
            <Products productos={producto} key={producto} /> 
          </div>
        </>

      }) (
      )}
    </section>
  );
};

export default Producto