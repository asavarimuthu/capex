using capexService as service from '../../srv/capex-service';

annotate service.cirlineitem with @(
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Label : 'functiontype',
            Value : functiontype,
        },
        {
            $Type : 'UI.DataField',
            Label : 'capbudgettype',
            Value : capbudgettype,
        },
        {
            $Type : 'UI.DataField',
            Label : 'prjstage',
            Value : prjstage,
        },
        {
            $Type : 'UI.DataField',
            Label : 'prjtitle',
            Value : prjtitle,
        },
        {
            $Type : 'UI.DataField',
            Label : 'prjtitloclang',
            Value : prjtitloclang,
        },
    ]
);
annotate service.cirlineitem with {
    cirnol @Common.ValueList : {
        $Type : 'Common.ValueListType',
        CollectionPath : 'cirheader',
        Parameters : [
            {
                $Type : 'Common.ValueListParameterInOut',
                LocalDataProperty : cirnol_ID,
                ValueListProperty : 'ID',
            },
            {
                $Type : 'Common.ValueListParameterDisplayOnly',
                ValueListProperty : 'status',
            },
            {
                $Type : 'Common.ValueListParameterDisplayOnly',
                ValueListProperty : 'requestor',
            },
            {
                $Type : 'Common.ValueListParameterDisplayOnly',
                ValueListProperty : 'createddate',
            },
            {
                $Type : 'Common.ValueListParameterDisplayOnly',
                ValueListProperty : 'approver',
            },
        ],
    }
};
annotate service.cirlineitem with @(
    UI.FieldGroup #GeneratedGroup1 : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Label : 'functiontype',
                Value : functiontype,
            },
            {
                $Type : 'UI.DataField',
                Label : 'capbudgettype',
                Value : capbudgettype,
            },
            {
                $Type : 'UI.DataField',
                Label : 'prjstage',
                Value : prjstage,
            },
            {
                $Type : 'UI.DataField',
                Label : 'prjtitle',
                Value : prjtitle,
            },
            {
                $Type : 'UI.DataField',
                Label : 'prjtitloclang',
                Value : prjtitloclang,
            },
            {
                $Type : 'UI.DataField',
                Label : 'prjdesc',
                Value : prjdesc,
            },
            {
                $Type : 'UI.DataField',
                Label : 'costcenter',
                Value : costcenter,
            },
            {
                $Type : 'UI.DataField',
                Label : 'controlarea',
                Value : controlarea,
            },
            {
                $Type : 'UI.DataField',
                Label : 'companycode',
                Value : companycode,
            },
            {
                $Type : 'UI.DataField',
                Label : 'totreqcapital',
                Value : totreqcapital,
            },
            {
                $Type : 'UI.DataField',
                Label : 'currency',
                Value : currency,
            },
            {
                $Type : 'UI.DataField',
                Label : 'fxrate',
                Value : fxrate,
            },
            {
                $Type : 'UI.DataField',
                Label : 'totreqcapitalusd',
                Value : totreqcapitalusd,
            },
            {
                $Type : 'UI.DataField',
                Label : 'plantcode',
                Value : plantcode,
            },
            {
                $Type : 'UI.DataField',
                Label : 'gbszone',
                Value : gbszone,
            },
            {
                $Type : 'UI.DataField',
                Label : 'investtype',
                Value : investtype,
            },
            {
                $Type : 'UI.DataField',
                Label : 'investnode',
                Value : investnode,
            },
            {
                $Type : 'UI.DataField',
                Label : 'responsiblearea',
                Value : responsiblearea,
            },
            {
                $Type : 'UI.DataField',
                Label : 'prjtype',
                Value : prjtype,
            },
            {
                $Type : 'UI.DataField',
                Label : 'location',
                Value : location,
            },
            {
                $Type : 'UI.DataField',
                Label : 'remarks',
                Value : remarks,
            },
        ],
    },
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'GeneratedFacet1',
            Label : 'General Information',
            Target : '@UI.FieldGroup#GeneratedGroup1',
        },
    ]
);
