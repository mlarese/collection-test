Meteor.startup(function() {
  var languages = [
    {"title": "Italiano", "code": "it_IT", "active": true},
    {"title": "English", "code": "en", "active": true}
  ];

  if (Languages.find({}).count() === 0) {
    for (var i = 0; i < languages.length; i++)
      Languages.insert(languages[i]);

  }
});