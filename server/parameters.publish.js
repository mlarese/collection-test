'use strict'
Meteor.publish("parameters", function () {
    return Parameters.find({});
});