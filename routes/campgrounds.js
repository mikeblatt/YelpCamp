var express = require("express");
var router = express.Router();
var Campground = require("../models/campground");
var middleware = require("../middleware");


//INDEX - SHOW ALL CAMPGROUNDS
router.get("/",function(req, res){
    Campground.find({},function(err,allCampgrounds){
        if(err){
            console.log(err);
        }
        else {
            res.render("campgrounds/index",{campgrounds:allCampgrounds});     
        }
    });
});

router.get("/new",middleware.isLoggedIn, function(req,res){
   res.render("campgrounds/new"); 
});

// CREATE
router.post("/", middleware.isLoggedIn,function(req,res){
   //get data from form, add to campgrounds array
   var name = req.body.name;
   var price = req.body.price;
   var image= req.body.image;
   var desc = req.body.description;
   var author = {
       id: req.user._id,
       username: req.user.username
   };
   var newCampground =  {name: name, price: price, image: image, description: desc, author: author};
   //Create a new campground and save to db
   Campground.create(newCampground ,function(err,newlycreatedcampground){
       if(err){
           console.log(err);
       } else {
           console.log("NEW CAMPGROUND ADDED");  
           console.log(newlycreatedcampground);
            //redirect to campgrounds page
            res.redirect("campgrounds");  
       }
   })
});

// SHOW - shows info about one particular campgrounds
router.get("/:id",function(req,res){
    // find campground with id
     Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){     
        if(err){
            console.log(err);
        } 
        else {
            // render page
            res.render("campgrounds/show",{campground: foundCampground});
 
        }
    });
});

// EDIT CAMPGROUND ROUTE
router.get("/:id/edit", middleware.checkCampgroundOwnership,function(req, res){
        Campground.findById(req.params.id, function(err,foundCampground){
        res.render("campgrounds/edit", {campground: foundCampground});
    });
});

// UPDATE GAMPGROUND ROUTE
router.put("/:id",middleware.checkCampgroundOwnership, function(req, res){
   //find and update correct campground
   Campground.findByIdAndUpdate(req.params.id, req.body.campground, function(err, updatedCampground){
       if(err){
           res.redirect("/campgrounds");
       } else {
           // redirect to show page
           res.redirect("/campgrounds/" + req.params.id);
       }
   });
});

// DELETE CAMPGROUND ROUTE
router.delete("/:id", middleware.checkCampgroundOwnership,function(req, res){
    Campground.findByIdAndRemove(req.params.id, function(err){
        if(err){
            res.redirect("/campgrounds"  + req.params.id);
        } else {
            res.redirect("/campgrounds")
        }
    })
});

module.exports = router;