profileSchema = new SimpleSchema({
    name:{type:String,optional:true,defaultValue:''},
    surname:{type:String,optional:true,defaultValue:'',index:true},
    username:{type:String,optional:true,index:1,defaultValue:''},
    email:{type:String,optional:true,index:1,defaultValue:''}
});

financialProfileSchema = new SimpleSchema({
    piva:{type:String,optional:true,defaultValue:''}
});