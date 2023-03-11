import React from "react";
import UseGetData from "../../hooks/useGetData.js";
import Country from "../../components/pais.js"
const Pais = () => {
  const { paises } = UseGetData();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, paises) => {
    setValue(paises);
  };
console.log(paises)
  return (
    <section>
      {paises && paises.length > 0 && paises.map((pais)=>{
        <>
          <div >
            {console.log('hola estoy en el div' + pais.label)} 
            <Country country={pais.label} key={pais} /> 
          </div>
        </>

      }) 
      }
    </section>
  );
};

export default Pais;
