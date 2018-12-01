var bodyParser      =require("body-parser"),
   expressSanitizer =require("express-sanitizer"),
   methodOverride   =require("method-override"),
     mongoose       =require("mongoose"),
     express        =require("express"),
     request        =require("request"),
     app            =express();
     
//APP CONFIG
mongoose.connect("mongodb://localhost/E_stud");
app.set("view engine","ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
app.use(expressSanitizer());
app.use(methodOverride("_method"));

//MONGOOSE CONFIG
var collegeSchema=mongoose.Schema({
     title:String,
     image:String,
     rank:String
     
});
var College= mongoose.model("College",collegeSchema);






//ROUTES
app.get("/",function(req,res)
{
     res.redirect("/home");
});


//INDEX ROUTE
app.get("/home",function(req,res){
     
          
           res.render("index");
    
    
});

app.get("/puc",function(req,res){
     
          
           res.render("puc");
    
    
});

app.get("/ug",function(req,res){
     
          
           res.render("ug");
    
    
});
//Counselling Route

app.get("/counselling",function(req,res){
     
          
           res.render("counselling");
    
    
});

//tech route
app.get("/tech",function(req,res){
     
          
           res.render("tech");
    
    
});
//current affairs route
app.get("/current_affairs",function(req,res){
     
          
           res.render("current_affairs");
    
    
});


//events route
app.get("/events",function(req,res){
     
          
           res.render("events");
    
    
});

//resources route
app.get("/resources",function(req,res){
     
          
           res.render("resources");
    
    
});




//about route
app.get("/about",function(req,res){
     
          
           res.render("about");
    
    
});


//get route
app.get("/contact",function(req,res){
     
          
           res.render("contact");
    
    
});

//tech Search route

app.get("/results",function(req,res){
    var query=req.query.techSearch;
    var url= "http://www.omdbapi.com/?apikey=thewdb&s="+query;
    
    request(url,function(error,response,body){
         if(!error && response.statusCode==200)
         {     var parsedData=JSON.parse(body);
              res.render("results",{data:parsedData});
         }
    })
})


//colleges route
app.get("/colleges",function(req,res){
     College.find({},function(err,colleges){
          if (err)
          console.log("There was an error");
          else
         res.render("colleges",{colleges:colleges});  
     });
});

app.get("/result",function(req,res){
    var query=req.query.rank;
    if(query>=1 && query<=1000)
    res.redirect("https://www.rvce.edu.in/");
    else if(query>=1001 && query<=2000)
    res.redirect("http://www.msrit.edu/");
    else if(query>=2001 && query<=3000)
    res.redirect("http://pes.edu/");
    else if(query>=3001 && query<=4000)
    res.redirect("http://bmsce.in/");
    else (query>=4001 && query<=5000)
    res.redirect("https://dayanandasagar.edu/");
   
    
    
})
// //NEW ROUTE
// app.get("/blogs/new",function(req,res){
//      res.render("new");
// })

// //CREATE ROUTE
// app.post("/blogs",function(req,res){
//      req.body.blog.body=req.sanitize(req.body.blog.body);
//      Blog.create(req.body.blog,function(err,newBlog){
//      if(err)
//      res.render("new");
//      else
//      res.redirect("/blogs");
//      });
// });


// //SHOW ROUTE
// app.get("/blogs/:id",function(req,res)
// {
//      Blog.findById(req.params.id,function(err,foundBlog)
//      {
//           if(err){console.log("There was an Error in showing blog!");
//           res.redirect("/blogs");}
//           else
//           res.render("show",{blog:foundBlog});
//      });
// });

// //EDIT ROUTE
// app.get("/blogs/:id/edit",function(req,res){
//    Blog.findById(req.params.id,function(err, foundBlog){
//         if(err)
//         {res.redirect("/blogs");}
//         else
//         {
//              res.render("edit",{blog:foundBlog});
//         }
//    });
     
     
// });

// //UPDATE ROUTE
// app.put("/blogs/:id",function(req,res){
//      req.body.blog.body=req.sanitize(req.body.blog.body);
//      Blog.findByIdAndUpdate(req.params.id,req.body.blog,function(err,updatedBlog){
//           if(err)
//           res.redirect("/blogs");
//           else
//           res.redirect("/blogs/"+req.params.id);
          
          
//      });
// });

// //DESTROY ROUTE
// app.delete("/blogs/:id",function(req,res){
//      Blog.findByIdAndRemove(req.params.id,function(err){
//           if(err)
//           {res.redirect("/blogs");}
//           else
//           res.redirect("/blogs");
     
//      });
// });




app.listen(process.env.PORT,process.env.IP,function(){
     console.log("Server is Running !!!");
});