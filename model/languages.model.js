/**
 * Created by maurolarese on 20/08/15.
 */
Languages = new Mongo.Collection('languages' );

Languages.attachSchema(
    new SimpleSchema({
        title: { type: String  },
        code: { type: String  } ,
        active:{type:Boolean}
    })
);
