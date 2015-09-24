'use strict'
Meteor.publish("services", function () {
    var findCond = {
        userId:this.userId,
        $or:
            [
                { "published": null },
                { "published": false }
            ]
    }
    var servicesFound= services.find(findCond);

    Counts.publish(this, 'servicesCount' , servicesFound, {noReady: true});
    return services.find(findCond);
});