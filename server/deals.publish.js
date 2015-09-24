'use strict'
Meteor.publish("deals", function () {
    var findCond = {
        userId:this.userId,
        $or:
            [
                { "published": null },
                { "published": false }
            ]
    }

    var dealsFound= Deals.find(findCond);

    Counts.publish(this, 'dealsCount' , dealsFound, {noReady: true});
    return Deals.find(findCond);
});