Meteor.startup(function() {
  if(Informers.find().count() === 0) {
    Informers.insert({
      _id:'1',
      profile:{name:'Confederazione albergatori',
      email:'confal@gmail.com'},
      sellersId:['hotelgarda@gmail.com','marco.anselmi@gmail.com','marino.sozzi@gmail.com']
    });
    Informers.insert({
      _id:'2',
      profile:{name:'Associazione ristoratori',
      email:'assorisi@gmail.com'},
      sellersId:['alberto.valentini@gmail.com']
    });
  }
});