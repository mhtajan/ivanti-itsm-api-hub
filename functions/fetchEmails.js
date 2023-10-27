const middleware = require('../middleware/middleware.js')
const fs = require('fs');
require('dotenv').config();

const tenantUri = process.env.TENANT_URI

const emails = {}
async function fetchEmails(page = 0, accumulatedResults = []) {
    const pageSize = 100; // Adjust page size to 100
    const skip = page * pageSize;
  
    const result = await middleware.getObject(`${tenantUri}api/odata/businessobject/employees?$Status=Active&$Select=PrimaryEmail&$top=${pageSize}&$skip=${skip}`);

    if (Array.isArray(result.value)) {
      accumulatedResults = accumulatedResults.concat(result.value);
    }
  
    if (result['@odata.count'] > skip + pageSize) {
      return fetchEmails(page + 1, accumulatedResults);
    } else {
      emails.values = accumulatedResults;
      const jsonData = JSON.stringify(accumulatedResults, null, 2); // The second argument (null) is for custom formatting
    fs.writeFileSync('emails.json', jsonData);
      console.log(emails);
      setTimeout(()=> {
        if (fs.existsSync('emails.json')){
            fs.unlinkSync('emails.json')
            console.log('deleted emails.json')
        }
      }, 24 * 60 * 60 * 1000) //24hours deletion
    }

  }
  
  fetchEmails();
  module.exports = {
    fetchEmails
  }


// add last run date then compare it to current date if greater than 1 day difference delete the emails.json