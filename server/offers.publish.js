'use strict'
Meteor.publish("offers", function () {
    var findCond = {
        userId:this.userId,
        $or:
            [
                { "published": null },
                { "published": false }
            ]
    }
    var offersFound= Offers.find(findCond);

    Counts.publish(this, 'offersCount' , offersFound, {noReady: true});
    return Offers.find(findCond);
});