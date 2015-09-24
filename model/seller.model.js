Seller = new Mongo.Collection('seller');
Seller.attachSchema( new SimpleSchema({
  profile:{type:profileSchema,optional:true},
  financialProfile:{type:financialProfileSchema,optional:true},
  address:{type:addressSchema,optional:true},
  backendUserId:{type:String,optional:true},
  cashbach:{type:[String],optional:true},
  cashBackActive:{type:Boolean,optional:true,defaultValue:false},
  cashBackRequestedActivation:{type:Boolean,optional:true,defaultValue:false},
  status:{type:String,optional:true,defaultValue:'simple'}
}) );

var fn =  {
  byEmail : function(sellerEmail) {
    return Seller.findOne({'profile.email':sellerEmail});
  }
}
angular.extend(Seller,fn);

Seller.helpers ({

  partner:function(){
      return Partner.findOne({'sellersId':  this.profile.email});
  }
})

Seller.allow({
  insert: function(userId, seller) {
    return userId;
  },
  update: function(userId, seller, fields, modifier) {
    return userId;
  },
  remove: function(userId, seller) {
    return userId;
  }
});