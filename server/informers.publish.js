'use strict'
Meteor.publish("informers", function () {
    return Informers.find({});
});
