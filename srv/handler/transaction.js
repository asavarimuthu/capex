const cds = require("@sap/cds");
const {CIRHeaders}=cds.entities;

const commitAuthorBook=async(req)=>{
    let {authorid}=req.data;

  /*  for(var i in req.data.books){
       req.data.books[i].author_authorid=authorid;
    } */
    return req;

};

const createCir=async(req)=>{

  //  var query= cds.parse.cql(`SELECT cirno from CIRHeaders order by cirno desc`);

  //  const cirno_temp = await cds.run(query);
  let date_time = new Date();
                const cirno=await SELECT
                .from(CIRHeaders)
                .columns(["cirno"])
                .orderBy(['cirno'],['desc']);
                req.data.cirno="CIR-"+(parseInt(cirno[cirno.length-1].cirno.split("-")[1])+1).toString();
                req.data.requestor="Savarimuthu";
                req.data.createddate=date_time.toISOString().split('T')[0];
                return req;
};
//orderBy: [{ref:["title"], sort:'asc' }],
module.exports = {
    commitAuthorBook,
    createCir
  } ;