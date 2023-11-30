const axios = require('axios')
module.exports = {
    async insertObject(uri, payload, headers, agent) {
        try {
            const response = await axios.post(`${uri}`, payload, { headers, httpsAgent: agent })
            return response.data
        } catch (error) {
            console.error(`Error at ${error}`)
        }
    },
    async getObject(uri, headers, agent) {
        try {
            const response = await axios.get(`${uri}`, { headers, httpsAgent: agent })
            return response.data
        } catch (error) {
            console.error(`Error at ${error}`)
        }
    }
}