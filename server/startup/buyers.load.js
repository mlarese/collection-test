Meteor.startup(function() {
  if(Buyers.find().count() === 0) {
      Buyers.insert(
          {
              _id:'1',
              profile:{name:'Mauro',surname:'Larese',email:'mauro.larese@gmail.com'},
              cashbackProfile:{
                  parent:'alberto.valentini@gmail.com',
                  parentType: 'seller' ,
                  affiliationDate: new Date()
              }
          }
      );
      Buyers.insert({_id:'2',profile:{name:'Marino',surname:'Rossi',email:'rossi.marino@gmail.com' }});
      Buyers.insert({_id:'3',profile:{name:'Arnaldo',surname:'Verdi' ,email:'verdi.arnaldo@gmail.com'}});
      Buyers.insert({_id:'4',profile:{name:'Marino',surname:'Rossi' ,email:'rossi.marino@gmail.com'}});
      Buyers.insert({_id:'5',profile:{name:'Arnaldo',surname:'Danieli',email:'danieli.arnaldo@gmail.com' }});
      Buyers.insert({_id:'6',profile:{name:'Arnaldo',surname:'Rossi',email:'rossi.arnaldo@gmail.com' }});
  }
});


