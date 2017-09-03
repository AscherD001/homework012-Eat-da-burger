var connection = require("./connection.js");

var orm = {
    all: function(table, cb) {
        connection.query(`SELECT * FROM ${table};`, function(err, data) {
            if(err) {
                throw err;
            }
            cb(data);
        })
    },
    post: function(table, id, name, nameCol, boolCol) {
        connection.query(`INSERT INTO ${table} (id, ${nameCol}) VALUES (${id}, "${name}")`, function(err, data) {
            if(err) {
                throw err;
            }
        });
    },
    put: function(table, name, nameCol, boolCol, cb) {
        connection.query(`UPDATE ${table} SET ${boolCol} = 1 WHERE ${nameCol} = ?`, name, function(err, data) {
            if(err) {
                throw err;
            }
            setTimeout(function() {
                cb(data);
            }, 1850);
        });
    },
    reput: function(table, name, nameCol, boolCol) {
        connection.query(`UPDATE ${table} SET ${boolCol} = 0 WHERE ${nameCol} = ?`, name, function(err, data) {
            if(err) {
                throw err;
            }
        });
    }
}

module.exports = orm;