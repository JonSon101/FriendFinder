//Load Data
var friendsData = require("../data/friends");

//Routing
module.exports = function(app) {
    
    //API get all friends
    app.get("/api/friends", function(req, res) {
        res.json(friendsData);
    });
    
    //API Post requests
    app.post("/api/friends", function(req, res ) {
        //This will be used to handle incoming survey results. 
        //This route will also be used to handle the compatibility logic. 
    });
};