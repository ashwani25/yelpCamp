var mongoose=require("mongoose");
var campground=require("./models/campgrounds");
var comment=require("./models/comment");
var data=[{
         name:"chill pill palace",
         img:"https://farm9.staticflickr.com/8442/7962474612_bf2baf67c0.jpg",
         description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}, 
    {   name:"chill pill palace",
        img:"https://farm9.staticflickr.com/8442/7962474612_bf2baf67c0.jpg",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
     {  name:"chill pill palace",
        img:"https://farm9.staticflickr.com/8442/7962474612_bf2baf67c0.jpg",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
    ];
function seedDb(){
    campground.remove({},function(err){
        if(err){
            console.log(err);
        }else{
             console.log("campgrounds are removed");
            /* data.forEach(function(seed){
                 campground.create(seed,function(err,campground){
                     if(err){
                         console.log(err);
                     }else{
                         console.log("campground is added");
                         comment.create({
                            text:"i'm excited to be here",
                            author:"ashley"
                         }
                         ,function(err,comment){
                             if(err){
                                 console.log(err);
                             }else{
                                 campground.comments.push(comment);
                                 campground.save();
                                 console.log("comment is created");
                             }
                         })
                     }
                 })
             })*/
        }
       
    })
}
module.exports=seedDb;
