Informers = new Mongo.Collection('informers');

Informers.attachSchema( new SimpleSchema({
  profile:{type:profileSchema,optional:true},
  financialProfile:{type:financialProfileSchema,optional:true},
  address:{type:addressSchema,optional:true},
  active:{type:Boolean,optional:true,defaultValue:false},
  status:{type:String,optional:true,defaultValue:'simple'},
  sellersId:{type:[String],optional:true,defaultValue:[],index:1}
}) );

Informers.helpers({
    sellers: function() { return Seller.find({'profile.email':{$in: this.sellersId}});   }
});

var fn =  {
    bySeller : function(sellerEmail) {
        return Informers.find({'sellersId':sellerEmail});
    },
    bySellerFly : function(sellerEmail) {
        return Informers.find({'sellersId':sellerEmail},{fields:{address:0,financialProfile:0}  });
    }
}


angular.extend(Informers,fn);
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