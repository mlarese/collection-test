Buyers = new Mongo.Collection('buyers');

Buyers.attachSchema( new SimpleSchema({
    profile:{type:profileSchema,optional:true},
    financialProfile:{type:financialProfileSchema,optional:true},
    address:{type:addressSchema,optional:true},
    backendUserId:{type:String,optional:true},
    preferences: {type:userPreferencesSchema,optional:true},
    wish1:{type:String,optional:true,defaultValue:''},
    wish2:{type:String,optional:true,defaultValue:''},
    wish3:{type:String,optional:true,defaultValue:''},
    cashbackProfile:{type:cashbackProfileSchema,optional:true},
    cashbach:{type:[String],optional:true},
    cashBackActive:{type:Boolean,optional:true,defaultValue:false},
    cashBackRequestedActivation:{type:Boolean,optional:true,defaultValue:false},
    status:{type:String,optional:true,defaultValue:'simple'}
}) );


Buyers.allow({
  insert: function(userId, buyer) {
    return userId;
  },
  update: function(userId, buyer, fields, modifier) {
    return userId;
  },
  remove: function(userId, buyer) {
    return userId;
  }
});