offersCommon = {};
offersCommon.Schema={
    name: { type: String  },
    description: { type: String  },
    type: { type: String ,allowedValues:['offer','deal','service'] },
    creationDate: { type: Date  },
    dateFrom: { type: Date  },
    dateTo: { type: Date  },
    image:{type: String,optional:true},
    price:{type:Number},
    discount:{type:Number},
    userId:{type:String},
    userMail:{type:String},
    published:{type:Boolean,defaultValue:false},
    period:{type:String,optional:true}

}