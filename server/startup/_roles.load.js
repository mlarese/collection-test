Meteor.startup(function() {
    var admin = {
        email: 'sysadmin@quocash.com',
        userName:'sysadmin@quocash.com',
        password: 'Mammola.64',
        profile: {
            userName:'sysadmin',
            name: 'Amministratore di sistema'
        }
    }

    var buyer = {
        email: 'david.semenzato@gmail.com',
        userName:'david.semenzato@gmail.com',
        password: 'david',
        profile: {
            userName:'david.semenzato',
            name: 'Davide semenzato'
        }
    }

    var vendor = {
        email: 'alberto.valentini@gmail.com',
        userName:'alberto.valentini@gmail.com',
        password: 'alberto',
        profile: {
            userName:'alberto.valentini',
            name: 'Alberto Valentini'
        }
    }

    var createAdmins = function(){
        var user = Accounts.createUser(admin);
        Meteor.users.update({_id: user}, {$set:{'emails.0.verified': true}});
        Roles.addUsersToRoles(user, 'sys-admin');
        console.log("Created admin")
    };

    var createBuyer = function(){
        var user = Accounts.createUser(buyer);
        Meteor.users.update({_id: user}, {$set:{'emails.0.verified': true}});
        Roles.addUsersToRoles(user, 'buyer');
        console.log("Created buyer")
    };

    var createVendor = function(){
        var user = Accounts.createUser(vendor);
            Meteor.users.update({_id: user}, {$set: {'emails.0.verified': true}});
            Roles.addUsersToRoles(user, 'vendor');
            console.log("Created vendor")
    };


    if (Meteor.users.find().fetch().length === 0) {
        createAdmins();
        createBuyer();
        createVendor();
    }else{
        if(Meteor.users.find({"profile.userName": admin.profile.userName}).fetch()==0){
            try {createAdmins();}catch(e){}
        }
        if(Meteor.users.find({"profile.userName": vendor.profile.userName}).fetch()==0){
            try {createVendor();}catch(e){}
        }
        if(Meteor.users.find({"profile.userName": buyer.profile.userName}).fetch()==0){
            try {createBuyer();}catch(e){}
        }
    }

});