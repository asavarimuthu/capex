const cds = require('@sap/cds');
const {transaction} = require('./handler');

class capexService extends cds.ApplicationService {
 init(){
    this.before("CREATE", "author", (req)=>transaction.commitAuthorBook(req));
    return super.init();
 }

 createAuthor(req){
   let authorid=req.data.authorid;

   for(var i in req.data.books){
      req.data.books[i].author_authorid=authorid;
   }

 }

}

module.exports = { capexService }