const axios = require('axios');

const getApi = async () => {
  try {
    const response = await axios.get('http://18.220.234.192:4000/api/users/64040284d9a91413da049e67' );
    const data = response.data;
    return data
  } catch (error) {
    console.log(error);
    return error;
  }
};

module.exports = { getApi };
