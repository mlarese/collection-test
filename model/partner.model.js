Partner = new Mongo.Collection('partner');

Partner.attachSchema( new SimpleSchema({
  profile:{type:profileSchema,optional:true},
  financialProfile:{type:financialProfileSchema,optional:true},
  address:{type:addressSchema,optional:true},
  active:{type:Boolean,optional:true,defaultValue:false},
  status:{type:String,optional:true,defaultValue:'simple'},
  sellersId:{type:[String],optional:true,defaultValue:[]}
}) );


Partner.helpers({
  sellers: function() { return Seller.find({'profile.email':{$in: this.sellersId}});   }
});

Partner.allow({
  insert: function(userId, partner) {
    return userId;
  },
  update: function(userId, partner, fields, modifier) {
    return userId;
  },
  remove: function(userId, partner) {
    return userId;
  }
});