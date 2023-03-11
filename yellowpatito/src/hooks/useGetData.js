import React from 'react';
import { getApiData } from './getApiData';

const UseGetData = () =>{
    const [data, setData] = React.useState(null);
    const [loading, setLoading] = React.useState(true);
    
  
    React.useEffect(() => {
      getApiData()
        .then(response => {
          setData(response.response.assumptionData[0]);
          setLoading(false);
        })
        .catch(error => {
          console.log(error);
          setLoading(false);
        });
    }, []);
  
    if (loading) {
      return <div>Cargando...</div>;
    }
    return data
}

export default UseGetData;