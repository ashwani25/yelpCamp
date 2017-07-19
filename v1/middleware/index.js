var comment=require("../models/comment");
var campground=require("../models/campgrounds");


var middlewareobj={
    checkOwnership:function(req,res,next){
        
    if(req.isAuthenticated()){
    campground.findById(req.params.id,function(err,campground){
        if(err){
            res.redirect("back");
        }else{
            if(campground.author.id.equals(req.user._id)){
                next();
            }else{
                req.flash("error","you don't have permission to do that");
                res.redirect("back");
            }
        }
    });
    }else{
        req.flash("error","you need to be logged in first");
        res.redirect("/login");
    }
},
checkOwnershipcomment:function(req,res,next){
    if(req.isAuthenticated()){
    comment.findById(req.params.comment_id,function(err,comment){
        if(err){
            res.redirect("back");
        }else{
            if(comment.author.id.equals(req.user._id)){
                next();
            }else{
                req.flash("error","you don't have permission to do that");
                res.redirect("back");
            }
        }
    });
    }else{
        req.flash("error","you need to be logged in to do that");
        res.redirect("/login");
    }
},
isloggedin:function(req,res,next){
    
    if(req.isAuthenticated()){
        return next();
    }else{
        req.flash("error","you need to be logged in first");
          res.redirect("/login");
    }
  
}
};






module.exports=middlewareobj;