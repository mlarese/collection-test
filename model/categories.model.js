Categories = new Mongo.Collection('categories');

Categories.allow({
  insert: function(userId, category) {
    return userId;
  },
  update: function(userId, category, fields, modifier) {
    return userId;
  },
  remove: function(userId, category) {
    return userId;
  }
});