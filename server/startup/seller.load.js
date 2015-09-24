Meteor.startup(function() {
  if(Seller.find().count() === 0) {

      Seller.insert({ _id:'1', profile:{name:'Hotel al garda',email:'hotelgarda@gmail.com'} });
      Seller.insert({ _id:'2', profile:{name:'Pescheria al pesce fresco',email:'alberto.valentini@gmail.com'} });

  }
});