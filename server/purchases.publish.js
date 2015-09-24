'use strict'
Meteor.publish("purchases", function () {
    return Purchases.find({});
});