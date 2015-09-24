Deals = new Mongo.Collection('deals');

Deals.attachSchema( new SimpleSchema(  offersCommon.Schema ) );

Deals.allow({
  insert: function(userId, deal) {
    return userId;
  },
  update: function(userId, deal, fields, modifier) {
    return userId;
  },
  remove: function(userId, deal) {
    return userId;
  }
});