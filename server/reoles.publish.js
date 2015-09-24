/**
 * Created by mauro.larese on 07/09/2015.
 */
Meteor.publish(null, function (){
    return Meteor.roles.find({})
})