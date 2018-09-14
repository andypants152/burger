var connection = require("../config/connection.js");


var orm = {
    selectAll: function (tableInput, cb) {
        var query = "SELECT * FROM ??";
        connection.query(query, [tableInput], function(err, result){
            if (err) throw err;
            cb(result);
        })
    },

    insertOne: function () {

    },

    updateOne: function () {

    }
}
module.exports = orm;