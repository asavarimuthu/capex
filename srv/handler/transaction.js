const cds = require("@sap/cds");
const {CIRHeaders,Currency}=cds.entities;

const createCir=async(req)=>{

  //  var query= cds.parse.cql(`SELECT cirno from CIRHeaders order by cirno desc`);

  //  const cirno_temp = await cds.run(query);
  let date_time = new Date();
               const usdvalue=await SELECT
               .from(Currency)
               .where({currencycode: req .data.items[0].currency}); 

           
               req.data.items[0].fxrate=(1/usdvalue[0].usdvalue).toFixed(3);
               req.data.items[0].totreqcapitalusd=(req.data.items[0].fxrate*req.data.items[0].totreqcapital).toFixed(3);
             

                const cirno=await SELECT
                .from(CIRHeaders)
                .columns(["cirno"])
                .orderBy(['cirno'],['desc']);
                if(cirno.length>0){
                  req.data.cirno="CIR-"+(parseInt(cirno[cirno.length-1].cirno.split("-")[1])+1).toString();
                }
                else{
                  req.data.cirno="CIR-1";
                }

              
                //to change the createddate from string to date format.
                let createdDtTmp=req.data.items[0].createddatestr.split("/");
                req.data.items[0].createddate=createdDtTmp[2]+"-"+createdDtTmp[1]+"-"+createdDtTmp[0]; //line items

                let closureDtTmp=req.data.items[0].closuredatestr.split("/");
                 //Check whether the closure date is Saturday or Sunday
                 const datetemp = new Date(closureDtTmp[1]+"/"+closureDtTmp[0]+"/"+closureDtTmp[2]);
                 const day=datetemp.getDay();
                 if(day===6){
                  datetemp.setDate(datetemp.getDate()+2);
                 }
                 else if(day===0){
                  datetemp.setDate(datetemp.getDate()+1);
                 }

                req.data.items[0].closuredate=datetemp.toISOString().split('T')[0]; //line items

                req.data.requestor="Savarimuthu";
                req.data.createddate=date_time.toISOString().split('T')[0];
                return req;
};

const updateCir=async(req)=>{

   /*  await UPDATE(CIRHeaders)
     .set("status=",req.data.status)
     .where("cirno=",req.data.cirno) */
     return req;

};
//orderBy: [{ref:["title"], sort:'asc' }],
module.exports = {
    createCir,
    updateCir
  } ;