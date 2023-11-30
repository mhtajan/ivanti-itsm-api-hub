const axios = require('axios')
const https = require('https');
require('dotenv').config();

const headers = {
    'Authorization': `${process.env.APIKEY}`, //add api key
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }

const agent = new https.Agent({
    rejectUnauthorized: false
  });


module.exports = {
  async createObject(uri,payload) {
    try {
      const response = await axios.post(`${uri}`, payload, { headers, httpsAgent: agent })
      return response.data
      
    } catch (error) {
        console.error(error)
    }
  }
  ,
  //refactoreds
  async getObject(uri) {
    try {
      const response = await axios.get(`${uri}`, { headers, httpsAgent: agent })
      return response.data
    } catch (error) {
      console.error(error)
    }
  }
};