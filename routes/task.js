
/*
 * GET users listing.
 */

exports.list = function(req, res){
  var page = req.param('page') || 1;

  var data = {
    "items" : [{
        "text" : "Today" + page,
        "items" : [{
              "text" : "Eat",
              "leaf" : true
          }, {
              "text" : "Sleep",
              "leaf" : true
          }, {
              "text" : "Drinking",
              "leaf" : true
          }]
    }, {
        "text" : "Tomorrow" + page,
        "items" : [{
            "text" : "Watch TV",
            "leaf" : true
        }, {
            "text" : "Watch Video",
            "leaf" : true
        }]
    }, {
        "text" : "This week" + page,
        "items" : []
    }, {
        "text" : "Later" + page,
        "items" : [{
            "text" : "Eat",
            "leaf" : true
        }, {
            "text" : "Sleep",
            "leaf" : true
        }, {
            "text" : "Drinking",
            "leaf" : true
        }]
    }]
  };

  res.json(data);
};
