var orm = require("../config/orm.js");

var burgers = {
    all: function(cb) {
        orm.all("burgers", function(res) {
            cb(res);
        });
    },
    post: function(name, cb) {
        if(name) {
            var temp = name.toLowerCase(),
            index = 0;
            orm.all("burgers", function(res) {
                var duplicate = false;
                for(var i = 0; i < res.length; i ++) {
                    if(res[i].burger_name.toLowerCase() === temp) {
                        duplicate = res[i].id;
                    }
                    index = i + 2;
                }
                temp = temp.replace(/\b[a-z]/g,function(str){
                    return str.toUpperCase();
                });
                if(!duplicate) {
                    orm.post("burgers", index, temp, "burger_name", "devoured");
                    cb(res);
                } else {
                    orm.reput("burgers", temp, "burger_name", "devoured");
                    cb(res);
                }
            });
        }
    },
    put: function(name, cb) {
        orm.put("burgers", name, "burger_name", "devoured", function(res) {
            cb(res);
        });
    }
}

module.exports = burgers;