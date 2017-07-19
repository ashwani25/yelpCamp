var express=require("express");
var router=express.Router();
var campground=require("../models/campgrounds");
var middleware=require("../middleware");

//var user=require("../models/user");
//var comment=require("../models/comment");
/*var bodyParser=require("body-parser")
router.use(bodyParser.urlencoded({extended:true}));
router.use(function(req,res,next){
    res.locals.currentuser=req.user;
    next();
});*/


//show campgrounds page
router.get("/",function(req,res){
    campground.find({},function(err,campground){
        if(err){
            console.log(err);
        }else{
    
            res.render("campgrounds/index",{campgrounds:campground});
        }
    })
    
});
//add new campground
router.get("/new",middleware.isloggedin, function(req,res){
    res.render("campgrounds/new");
});

router.post("/",middleware.isloggedin, function(req,res){
    
   var name=req.body.name;
   var img=req.body.img;
   var desc=req.body.description;
   var author={
       id:req.user._id,
       username:req.user.username
   }
   var newcampground={name:name,img:img,description:desc,author:author};
    campground.create(newcampground,function(err,campground){
        if(err){
            console.log(err);
        }else{

            res.redirect("/campgrounds");
        }
    });
    
});
router.get("/:id", function(req,res){
    campground.findById(req.params.id).populate("comments").exec(function(err,foundcamp){
    
        if(err){
            console.log(err);
        }else{
            res.render("campgrounds/show",{campground:foundcamp});
        }
    });
    
});
router.get("/:id/edit",middleware.checkOwnership, function(req,res){
    campground.findById(req.params.id,function(err,foundcamp){
        if(err){
            res.redirect("/campgrounds");
        }else{
            res.render("campgrounds/edit",{campground:foundcamp});
        }
    });
});
router.put("/:id",middleware.checkOwnership, function(req,res){
    campground.findByIdAndUpdate(req.params.id,req.body.campground,function(err,campground){
        if(err){
            res.redirect("/campgrounds");
        }else{
            res.redirect("/campgrounds/"+req.params.id);
           }
    });
});
router.delete("/:id",middleware.checkOwnership, function(req,res){
    campground.findByIdAndRemove(req.params.id,function(err){
        if(err){
            res.redirect("/campgrounds");
        }else{
            res.redirect("/campgrounds");
        }
    });
});




module.exports=router;