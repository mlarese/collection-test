Offers = new Mongo.Collection('offers');
Offers.attachSchema( new SimpleSchema(  offersCommon.Schema ) );
Offers.allow({
  insert: function(userId, offer) {
    return userId;
  },
  update: function(userId, offer, fields, modifier) {
    return userId;
  },
  remove: function(userId, offer) {
    return userId;
  }
});