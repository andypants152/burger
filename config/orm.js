var connection = require("../config/connection.js");

function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
  }

var orm = {
    selectAll: function (table, cb) {
        var query = "SELECT * FROM ??";
        connection.query(query, [table], function(err, result){
            if (err) throw err;
            cb(result);
        })
    },

    insertOne: function (table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";
    
        console.log(queryString);
    
        connection.query(queryString, vals, function(err, result) {
          if (err) throw err;
          
          cb(result);
        });
    },

    updateOne: function () {

    }
}
module.exports = orm;