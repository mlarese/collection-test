Meteor.startup(function() {
    if(Purchases.find().count() === 0) {

        Purchases.insert({_id:'1',sellerId:'1',buyerId:'1',description:'Albergo 5 stelle',category:'viaggi'});
        Purchases.insert({_id:'2',sellerId:'1',buyerId:'1',description:'Cena pesce',category:'ristoranti_pub'});
        Purchases.insert({_id:'3',sellerId:'2',buyerId:'2',description:'Albergo 5 stelle',category:'viaggi'});
        Purchases.insert({_id:'4',sellerId:'2',buyerId:'3',description:'Cena pesce',category:'ristoranti_pub'});
        Purchases.insert({_id:'5',sellerId:'2',buyerId:'3',description:'Viaggio aereo',category:'viaggi'});
        Purchases.insert({_id:'6',sellerId:'2',buyerId:'4',description:'Cena pesce',category:'ristoranti_pub'});

    }
 
});