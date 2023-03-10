const axios = require('axios');

const getApiData = async () => {
  try {
    const response = await axios.get('http://18.220.234.192:4000/api/users/64040284d9a91413da049e67' );
    const data = response.data;
    console.log("hola")
    return data
  } catch (error) {
    console.log(error);
    return error;
  }
};

module.exports = { getApiData };
