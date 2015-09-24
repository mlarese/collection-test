Meteor.startup(function() {
  if(VendorAffiliates.find().count() === 0) {
    var vendorAffiliates = [
      {
        'name': 'vendorAffiliate 1'
      },
      {
        'name': 'vendorAffiliate 2'
      }
    ];
    vendorAffiliates.forEach(function(vendorAffiliate) {
      VendorAffiliates.insert(vendorAffiliate);
    });
  }
});