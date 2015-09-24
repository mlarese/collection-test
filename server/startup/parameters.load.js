Meteor.startup(function() {
    var cashBackTableParam ={
        code:'cash-back-table',
        icon:'fa fa-calculator',
        description:'Tabella di distribuzione cashback',
        changeDate:new Date(),
        yubyapp:0,
        systemInformer:0,
        systemPartner:0,
        systemVendor:0,
        systemAgent:0,
        informer:0,
        partner:0,
        vendor:0,
        agent:0,
        buyerlev1:0,
        buyerlev2:0,
        buyerlev3:0

    }

    var schedulerParam={
        code:'scheduler',
        icon:'icon-clock',
        description:'Schedulazione processi automatici',
        changeDate:new Date(),
        schedCashback:'m',
        schedUsers:'d',
        schedProducts:'d'

    }


    if(Parameters.find().count() === 0) {
        Parameters.insert(cashBackTableParam);
        Parameters.insert(schedulerParam);
    }else {
        if (Parameters.find({code: cashBackTableParam.code}).count() === 0) {
            Parameters.insert(cashBackTableParam);
        }
        if (Parameters.find({code: schedulerParam.code}).count() === 0) {
            Parameters.insert(schedulerParam);
        }
    }
});