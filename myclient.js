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

function sleep(milliSeconds) {
    var startTime = new Date().getTime();
    while (new Date().getTime() < startTime + milliSeconds);
};

_.extend(object, Backbone.Events);

object.on("alert", function(msg) {
    console.log("Triggered " + msg);
});

object.trigger("alert", "an event");

 app = Backbone.Model.extend({
    urlRoot : 'http://localhost:5002/news'

});


var news = Backbone.Model.extend({
    defaults: {
    title:"",
    id:""
    },
    urlRoot:"http://localhost:5002/news"
})
//53e03ac7421aa908b668a978
var news1 = Backbone.Model.extend({
    defaults: {
        title:"",
        id:""
    },
    urlRoot:"http://localhost:5002/news"
})

var NewsCollection = Backbone.Collection.extend({
    model : news,
    url: 'http://localhost:5002/news'
});

/*

var mynews1 = new news({"title":"hello222"});

mynews1.save({success:function(model,response)
{
    console.log(model);
    console.log("response")
    console.log(response);



},
    error:function(model, response){
        console.log(model);
        console.log(response);
        console.log('error');
    }
});

*/

//console.log(mynews1);
var mynews = new news1({id:'53cf5b9b421aa90829d0aed9'});

console.log(mynews);
mynews.fetch({success:function(model,response)
    {
        console.log(model);
        console.log("response")
        console.log(response);

        console.log("title"+ model.isNew())
        console.log("isnew="+ model.isNew())
        console.log("id="+model.id);
        console.log("title="+model.get("title"));


     //   var ret = model.destroy();

     //   console.log("ret="+ ret)

    },
        error:function(model, response){
            console.log(model);
            console.log(response);
            console.log('error');
        }
    }
);




var newsv = new NewsCollection();

newsv.fetch({success:function(collection,response)
    {
       console.log(collection);
      console.log(collection.length )
      console.log("response")
    //    console.log(response);


        var model0 = collection.at(0);
        console.log("model0="+model0);
        console.log("model0="+model0.get("title"));
        console.log("model0="+model0.id);


    },
        error:function(collection, response){
            console.log(collection);
            console.log(response);
            console.log('error');
        }
    }
);


