import React from "react";
import UseGetData from "../../hooks/useGetData.js";
const Pais = () => {
  const data = UseGetData();
  console.log("soy data");
  console.log(data);
  console.log("Soy data");
  return (
    <>
      <p>
        holaaa
        {data.paises[0].value}
      </p>
    </>
  );
};

export default Pais;
