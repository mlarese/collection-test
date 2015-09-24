Meteor.publish("active_languages", function () {
    return Languages.find({});
});
