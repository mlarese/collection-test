Meteor.publish("syncs", function () {
    return Syncs.find();
});