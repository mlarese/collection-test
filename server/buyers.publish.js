'use strict'
Meteor.publish("buyers", function () {
    return Buyers.find({});
});
