const cds = require("@sap/cds");

const commitAuthorBook=async(req)=>{
    let {authorid}=req.data;

    for(var i in req.data.books){
       req.data.books[i].author_authorid=authorid;
    }
    return req;

}

module.exports = {
    commitAuthorBook
  };