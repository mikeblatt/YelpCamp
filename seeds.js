var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
        name: "Cloud's Rest", 
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTymesmVZfE5gF5IndQzMQnFXaz2X09r70R71AaqWB3sp_T5gN9", 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            
    },
    {
        name: "Desert Mesa", 
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbLiCPM3ikR6LOLWhnngy94hO-INe4eG5Ce8Os4oGN8EuAR6pG",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        name: "Canyon Floor", 
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKTF7IdQ_DXtz-NbJRJuebNfNhx7nhCBkqJi6y_5ENgNQeLB_f",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        
    }
    ]

function seedDB (){
    Campground.remove({},function(err){
        if(err){
            console.log(err);
        } else {
            console.log("Campgrounds removed");    
        }
       
        // data.forEach(function(seed){
        //     Campground.create(seed,function(err,campground){
        //         if(err){
        //             console.log(err);
        //         } else {
        //             console.log("Added a campground");
        //             // Create a comment
        //             Comment.create(
        //                 {
        //                     text: "This place is great, but I wish there was internet.",
        //                     author: "Homer"
                            
        //                 }, function(err,comment){
        //                     if(err){
        //                         console.log(err);
        //                     } else {
        //                         campground.comments.push(comment._id);
        //                         campground.save();
        //                         console.log("Created new comment");
        //                     }
        //                 });
        //         }
        //     })    
        // });
    });
}

module.exports = seedDB;