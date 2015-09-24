Meteor.methods({
    calcCashBackTree:function(purchase_id){
        try {

            var purchase = Purchases.findOne(purchase_id);

            var buyer =  purchase.buyer();
            var seller =  purchase.seller();

            var cashbackTree = {
                relationalTree : {
                    informer: null,
                    partner: null,
                    seller: null
                },
                purchaseTree : {
                    informer:null,
                    partner:null,
                    seller:seller
                },
                familyTree : {
                    father:null,
                    son:null,
                    grandChild:null
                }
            }
 
            if(buyer.cashbackProfile) {
                if (buyer.cashbackProfile.parentType == 'seller') {
                    var relSeller= Seller.byEmail(buyer.cashbackProfile.parent) ;

                    if(relSeller){
                        var relPartner = relSeller.partner();
                        var relInformer = relSeller.informer();

                        cashbackTree.relationalTree.seller = relSeller  ;
                        cashbackTree.relationalTree.partner = relPartner  ;
                        cashbackTree.relationalTree.informer = relInformer  ;
                    }

                }
            }

            //console.log(sellers)
            //console.log(informerBySeller.fetch())

            //console.log('buyer='+buyer.profile.email)
            //console.log('seller='+seller.profile.email)

            console.log(cashbackTree)
        }catch(e){
            console.log("error:"+e);
        }
    }

})

if(Meteor.isServer) {
    var purchase = Purchases.findOne();
    Meteor.call('calcCashBackTree', purchase._id);
}