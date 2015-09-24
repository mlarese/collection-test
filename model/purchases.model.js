Purchases = new Mongo.Collection('purchases');

Purchases.attachSchema( new SimpleSchema({
    sellerId: {type: String, optional: true, defaultValue: '', index: 1},
    buyerId: {type: String, optional: true, defaultValue: '', index: 1},
    price: {type: Number, optional: true, defaultValue: 0},
    discounted: {type: Number, optional: true, defaultValue: 0},
    deleted: {type: Boolean, optional: true, defaultValue: false, index: 1},
    active: {type: Boolean, optional: true, defaultValue: true, index: 1},
    purchaseDate: {
        type: Date,
        optional: true,
        index: 1,
        autoValue: function () {
            if (this.isInsert)  return new Date;
            else if (this.isUpsert)  return {$setOnInsert: new Date};
            else this.unset();
        }
    },
    creationDate: {type: creationSchema}

}));

Purchases.helpers({
    buyer: function() { return Buyers.findOne(this.buyerId); },
    seller: function() { return Sellers.findOne(this.sellerId); }
});


Purchases.allow({
    insert: function(userId, purchase) {
        return userId;
    },
    update: function(userId, purchase, fields, modifier) {
        return userId;
    },
    remove: function(userId, purchase) {
        return userId;
    }
});
