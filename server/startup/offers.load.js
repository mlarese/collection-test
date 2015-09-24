Meteor.startup(function() {

  if(Offers.find().count() === 0) {

    items= [{
      name: 'Offerta estate 2000',
      description: 'Offerta estate 2000 per famiglie',
      type: 'offer',
      creationDate: new Date(),
      dateFrom: new Date(),
      dateTo: new Date() ,
      image:"",
      price: 11,
      discount: 10,
      userId: 'myfbk2yTN9tYMx9Sz',
      userMail: 'mauro.larese@gmail.com'
    },{
      name: 'Offerta estate 2000',
      description: 'Offerta estate 2000 per famiglie',
      type: 'offer',
      creationDate: new Date(),
      dateFrom: new Date(),
      dateTo: new Date() ,
      image:"",
      price: 11,
      discount: 10,
      userId: 'myfbk2yTN9tYMx9Sz',
      userMail: 'mauro.larese@gmail.com'
    },{
      name: 'Offerta estate 2000',
      description: 'Offerta estate 2000 per famiglie',
      type: 'offer',
      creationDate: new Date(),
      dateFrom: new Date(),
      dateTo: new Date() ,
      image:"",
      price: 11,
      discount: 10,
      userId: 'myfbk2yTN9tYMx9Sz',
      userMail: 'mauro.larese@gmail.com'
    }]

    //for (var i = 0; i < items.length; i++) Offers.insert(items[i]);
  }
});