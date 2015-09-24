Meteor.methods({
    calcCashBackTree:function(){
        try {
            console.log(arguments)
            var purchase = Purchases.findOne();

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
                    var relSeller= Seller.byEmail(buyer.cashbackProfile.parent);
                    var relPartner = relSeller.partner();
                    console.log(relSeller.profile.email)
                    console.log(relPartner.profile.email)
                    cashbackTree.relationalTree.seller = relSeller ;
                    cashbackTree.relationalTree.partner = relPartner ;
                }
            }

            //console.log(sellers)
            //console.log(informerBySeller.fetch())

            //console.log('buyer='+buyer.profile.email)
            //console.log('seller='+seller.profile.email)

            //console.log(cashbackTree)
        }catch(e){
            console.log("error:"+e);
        }
    }

})

var purchase = Purchases.findOne();
Meteor.call('calcCashBackTree',purchase);