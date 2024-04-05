namespace capex;

using { cuid ,managed} from '@sap/cds/common';

entity Books {
  key bookid:Integer;//UUID;
  title  : String;
  descr  : String;
  price:Integer;
  stock:Integer;
  author : Association to Authors;
}
entity Authors{
  key authorid:Integer; //UUID;
  authorname   : String;
  books  : Composition of  many Books on books.author=$self;
} 

/*
entity CIRLineItems{
    key ID:UUID;
   functiontype:String;
   cirno:String;
   capbudgettype:String;
   prjstage:String;
   prjtitle:String;
   prjtitloclang:String;
   prjdesc:String;
   costcenter:String;
   controlarea:Integer;
   companycode:Integer;
   totreqcapital:Integer;
   currency:String;
   fxrate:Decimal;
   totreqcapitalusd:Integer;
   plantcode:Integer;
   gbszone:String;
   investtype:String;
   investnode:String;
   responsiblearea:Integer;
   prjtype:Integer;
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
    Approved; Rejected;
} 
*/