var  express         =require("express"),
     bodyParser      =require("body-parser"),
     mongoose        =require("mongoose"),
     campground      =require("./models/campgrounds"),
     comment         =require("./models/comment"),
     user            =require("./models/user"),
     seed            =require("./seeds"),
     passport        =require("passport"),
     localstrategy   =require("passport-local"),
      methodoverride =require("method-override"),
      authroute       =require("./routes/auth"),
     campgroundroute =require("./routes/campgrounds"),
     commentroute    =require("./routes/comments"),
     flash           =require("connect-flash")
     
    
mongoose.connect("mongodb://localhost/yelp_camp");
var app=express();
app.use(bodyParser.urlencoded({extended:true}));

app.set("view engine","ejs");
app.use(express.static(__dirname+"/public"));
app.use(methodoverride("_method"));
app.use(flash());
// PASSPORT CONFIGURATION
app.use(require("express-session")({
    secret: "you're the smartest",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new localstrategy(user.authenticate()));
passport.serializeUser(user.serializeUser());
passport.deserializeUser(user.deserializeUser());


app.use(function(req,res,next){
    res.locals.currentuser=req.user;
    res.locals.error=req.flash("error");
    res.locals.success=req.flash("success");
    next();
});





//seed();


app.use("/",authroute);
app.use("/campgrounds",campgroundroute);
app.use("/campgrounds/:id/comments",commentroute);

app.listen(3000,function(req,res){
    console.log("yelpcamp server has started");
});