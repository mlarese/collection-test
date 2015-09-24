VendorAffiliates = new Mongo.Collection('vendorAffiliates');

VendorAffiliates.allow({
  insert: function(userId, vendorAffiliate) {
    return userId;
  },
  update: function(userId, vendorAffiliate, fields, modifier) {
    return userId;
  },
  remove: function(userId, vendorAffiliate) {
    return userId;
  }
});