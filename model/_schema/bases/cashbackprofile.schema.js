cashbackProfileSchema = new SimpleSchema({
    parent:{type:String,optional:true,defaultValue:'',index:1},
    parentType:{type:String,optional:true,defaultValue:'',index:1},
    affiliationDate:{type:Date,optional:true,index:1}
});