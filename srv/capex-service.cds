using { capex as cx } from '../db/data-model';

service capexService @(path:'/odata/v4'){
  entity cirheader as projection on cx.CIRHeaders;

 entity cirlineitem as projection on cx.CIRLineItems;
  entity author as projection on cx.Authors;
   
   entity book as projection on cx.Books;
}

