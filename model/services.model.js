Services = new Mongo.Collection('services');
Services.attachSchema( new SimpleSchema(  offersCommon.Schema ) );
Services.allow({
  insert: function(userId, service) {
    return userId;
  },
  update: function(userId, service, fields, modifier) {
    return userId;
  },
  remove: function(userId, service) {
    return userId;
  }
});