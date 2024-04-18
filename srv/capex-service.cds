using { capex as cx } from '../db/data-model';

service capexService @(path:'/odata/v4'){
  entity cirheader as projection on cx.CIRHeaders;
  entity cirlineitem as projection on cx.CIRLineItems;
  entity currency as projection on cx.Currency;
}

