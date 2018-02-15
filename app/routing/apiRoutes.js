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
        
        //push new person to data
        friendsData.push(req.body);

        //track closest friend
        var closestFriendScore = 40;
        var closestFriendIndex = 0;

        //loop through saved friends
        for (var i = 0; i < friendsData.length - 1; i++) {
            
            var matchScore = 0;
            //loop through answer scores
            for (var k = 0; k < 10; k++) {
                //add the difference of current user and friend[i] score
                matchScore += (req.body['scores[]'][k] - friendsData[i]['scores[]'][k]);
            }
            matchScore = Math.abs(matchScore);
            console.log("Friend Index:", i, "MatchScore:", matchScore);
            
            if (matchScore < closestFriendScore) {
                closestFriendScore = matchScore;
                closestFriendIndex = i;
            }
        }
        
        //This route will also be used to handle the compatibility logic. 
        res.json(friendsData[closestFriendIndex]);
    });
};

// * Convert each user's results into a simple array of numbers (ex: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`).
//    * With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the `totalDifference`.
//      * Example: 
//        * User 1: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`
//        * User 2: `[3, 2, 6, 4, 5, 1, 2, 5, 4, 1]`
//        * Total Difference: **2 + 1 + 2 =** **_5_**
//    * Remember to use the absolute value of the differences. Put another way: no negative solutions! Your app should calculate both `5-3` and `3-5` as `2`, and so on. 
//    * The closest match will be the user with the least amount of difference.