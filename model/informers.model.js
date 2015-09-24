Informers = new Mongo.Collection('informers');

Informers.attachSchema( new SimpleSchema({
  profile:{type:profileSchema,optional:true},
  financialProfile:{type:financialProfileSchema,optional:true},
  address:{type:addressSchema,optional:true},
  active:{type:Boolean,optional:true,defaultValue:false},
  status:{type:String,optional:true,defaultValue:'simple'},
  sellersId:{type:[String],optional:true,defaultValue:[]}
}) );

Informers.helpers({
    sellers: function() {
        return Sellers.find({'profile.email':{$in: sellersId}});
    }
});

Informers.allow({
  insert: function(userId, informer) {
    return userId;
  },
  update: function(userId, informer, fields, modifier) {
    return userId;
  },
  remove: function(userId, informer) {
    return userId;
  }
});