import React from "react";
import { getApi } from "./getApi.js";

const useGetData = () => {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    getApi()
      .then((response) => {
        setData(response.response.assumptionData[0]);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Cargando...</div>;
  }

  console.log(data);
  console.log("soy get DATA");

  return data;
};


export default useGetData;