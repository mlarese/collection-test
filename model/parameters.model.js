Parameters = new Mongo.Collection('parameters');

Parameters.allow({
  insert: function(userId, parameter) {
    return userId;
  },
  update: function(userId, parameter, fields, modifier) {
    return userId;
  },
  remove: function(userId, parameter) {
    return userId;
  }
});
