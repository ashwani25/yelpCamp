var express=require("express");
var passport=require("passport");
var router=express.Router();
var user=require("../models/user");

router.get("/",function(req,res){
    res.render("landing");
});
router.get("/register",function(req,res){
    res.render("register");
});
router.post("/register",function(req,res){
    var newuser= new user({username:req.body.username});
    user.register(newuser,req.body.password,function(err,user){
        if(err){
            //console.log(err);
            req.flash("error",err.message);
            return res.render("register");
        }
        passport.authenticate("local")(req,res,function(){
            req.flash("success","successfully signed you up as "+user.username);
            res.redirect("/campgrounds");
        });
    });
});
router.get("/login",function(req,res){
    res.render("login");
});
router.post("/login",passport.authenticate("local",{
    successRedirect:"/campgrounds",
    failureRedirect:"/login"
}
), function(req,res){});
router.get("/logout",function(req,res){
    req.logout();
    req.flash("success","succcessfully logged you out")
    res.redirect("/campgrounds");
});

module.exports=router;