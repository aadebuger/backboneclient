/**
 * Created with JetBrains WebStorm.
 * User: aadebuger
 * Date: 14-8-4
 * Time: 下午4:29
 * To change this template use File | Settings | File Templates.
 */
var $=require("jquery")
var Backbone = require("backbone")
var _= require("underscore")
var object = {};

Backbone.$ = $
_.extend(object, Backbone.Events);

object.on("alert", function(msg) {
    console.log("Triggered " + msg);
});

object.trigger("alert", "an event");

 app= Backbone.Model.extend({
    urlRoot : 'http://localhost:5001/books'

});
var app1 = new app();

app1.fetch({success:function(collection,response)
    {},
        error:function(collection, response){
            console.log(collection);
            console.log(response);
            console.log('error');
        }
    }
);

