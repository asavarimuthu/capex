const cds = require('@sap/cds');
const {transaction} = require('./handler');

class capexService extends cds.ApplicationService {
 init(){
   this.before("CREATE", "author", (req)=>transaction.commitAuthorBook(req));
   this.before("CREATE", "cirheader", (req)=>transaction.createCir(req));
    return super.init();
 }

}

module.exports = { capexService }