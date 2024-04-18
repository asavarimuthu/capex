namespace capex;

using { cuid ,managed} from '@sap/cds/common';

entity Currency{
    currencycode:String;
    usdvalue:Decimal;
}

entity CIRLineItems{
   key ID:UUID;
   functiontype:String;
   capbudgettype:String;
   prjstage:String;
   prjtitle:String;
   prjtitloclang:String;
   prjdesc:String;
   costcenter:Integer;
   controlarea:Integer;
   companycode:Integer;
   createddate:Date;
   createddatestr:String;    //Field created to get the extracted value which is in string format
   closuredate:Date;      //if the closuredateS is in holiday next working day will be considered 
   closuredatestr:String;   //Field created to get the extracted value which is in string format
   totreqcapital:Integer;
   currency:String;
   fxrate:Decimal;
   totreqcapitalusd:Decimal;
   plantcode:Integer;
   gbszone:String;
   investtype:String;
   investnode:String;
   responsiblearea:String;
   prjtype:String;
   location:String;
   remarks:String;
   cirheader:Association to CIRHeaders;
}

entity CIRHeaders{
    key ID:UUID;
    cirno:String;
    status:Status;
    requestor:String;
    createddate:Date;
    approver:String;
    approveddate:Date;
    approvercomments:String;
    ecirno:String;
    items:Composition of many CIRLineItems on items.cirheader=$self;
}


type Status:String enum{
    Progress; Approved; Rejected;
} 
