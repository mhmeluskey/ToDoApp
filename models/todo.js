var orm = require("../config/orm.js");

var todo = {
    all: function(cb) {
        orm.all("items", function(res) {
            cb(res); 
        });
    },
    create: function(cols, vals, cb) {
        orm.create("cats", cols, vals, function(res) {
          cb(res);
        });
      }
}

module.exports = todo;