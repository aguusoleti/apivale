import React from "react";
import { Box, Tab, Tabs } from "@mui/material";
import UseGetData from "../hooks/useGetData.js";
const Pais = () => {
  const { paises } = UseGetData();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const selectedPais = paises.find((pais) => pais.label === value);

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        {paises &&
          paises.map((pais) => (
            <Tab value={pais.label} label={pais.label} key={pais.label} />
          ))}
      </Tabs>
      {selectedPais && <Country pais={selectedPais.label} />}
    </Box>
  );
};
const Country = ({ pais }) => {
  return (
    <section>
      <h2>{pais}</h2>
      {/* Aquí puedes mostrar la información que quieras del país */
      
      
      holaaa}
    </section>
  );
};

