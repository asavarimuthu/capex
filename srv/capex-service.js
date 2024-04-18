const cds = require('@sap/cds');
const {transaction} = require('./handler');

class capexService extends cds.ApplicationService {
 init(){
   this.before("CREATE", "cirheader", (req)=>transaction.createCir(req));
   this.before("UPDATE", "cirheader", (req)=>transaction.updateCir(req));
    return super.init();
 }

}

module.exports = { capexService }