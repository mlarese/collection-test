Meteor.startup(function() {
  if(Categories.find().count() === 0) {
    var categories = [
      {
        'name': 'category 1'
      },
      {
        'name': 'category 2'
      }
    ];
    categories.forEach(function(category) {
      Categories.insert(category);
    });
  }
});