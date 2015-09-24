'use strict'
Meteor.publish("categories", function () {
    return categories.find({});
});
