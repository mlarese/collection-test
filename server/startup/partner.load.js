Meteor.startup(function() {
    if(Partner.find().count() === 0) {

        Partner.insert({
            _id:'1', profile:{name:'Time to marketing',email:'ttm@gmail.com'} ,
            sellersId:['hotelgarda@gmail.com','alberto.valentini@gmail.com']
        });
        Partner.insert({
            _id:'2', profile:{name:'Tws',email:'tws@gmail.com'}
        });

    }
 
});