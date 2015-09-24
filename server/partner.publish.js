'use strict'
Meteor.publish("partner", function () {
    return Partner.find({});
});