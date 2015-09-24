Syncs = new Mongo.Collection('syncs');


if(false)
    Syncs.attachSchema( new SimpleSchema({
        syncCode:{type:String },
        syncGroupCode:{type:String },
        startDate:{type:Date},
        endDate:{type:Date},

        syncType:{type:String },
        syncResult:{type:String },
        input:{type:Object,optional:true},
        output:{type:Object,optional:true}
    }) );

Syncs.allow({
  insert: function(userId, sync) {
    return userId;
  },
  update: function(userId, sync, fields, modifier) {
    return userId;
  },
  remove: function(userId, sync) {
    return userId;
  }
});