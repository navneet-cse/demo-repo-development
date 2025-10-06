// middleware is basically a checkpoints wheter u are eligible or not.
const express= require('express');
const { is } = require('type-is');
const app = express();
app.listen(3000);

// function that return a boolean if a person i smore than 14
function isOldEnoughMiddleware(req, res, next) {
    const age=req.query.age;
    if(age>=14){ 
        next();// if true then pass to ride1 middleware
    }
    else{// if any middleware fails
        res.json({
            msg: "Sorry you are not of age yet"
        });
    }
}
// we can add middlewares to gets access either using in route handler or using app.use
// all route handlers below app.use only can access this middleware.


app.use(isOldEnoughMiddleware)

//or

// app.use(function(req, res, next){
//     const age=req.query.age;
//     if(age>=14){ 
//         next();// if true then pass to ride1 middleware
//     }
//     else{// if any middleware fails
//         res.json({
//             msg: "Sorry you are not of age yet"
//         });
//     }
// })

app.get("/ride1",isOldEnoughMiddleware,function(req,res){
        res.json({
            msg: "You have successfully rise the ride 1" // once u coame across all checkpoints u dont need to go for checks again.
        });
});
// these app.gets are route handler.
app.get("/ride2",isOldEnoughMiddleware,function(req,res){
        res.json({
            msg: "You have successfully rise the ride 2" 
        });
});
