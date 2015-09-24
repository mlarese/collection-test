try {
    var purchase = Purchases.findOne() .buyer();
    var sellers = Informers.findOne().sellers().fetch();
    var informerBySeller = Informers.bySellerFly('alberto.valentini@gmail.com')  ;
    //console.log(sellers)
    console.log(informerBySeller.fetch())

}catch(e){
    console.log(e)
}