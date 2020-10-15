var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://172.16.3.184:27017/";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbKite = db.db("new_kite");
    var dbProvisioning = db.db("new_prov");
    var dbSoltura = db.db("new_sol");
    var app_draftCollection = dbProvisioning.collection("app_draft");
    var appCollection = dbKite.collection("app");
    var ncs_slaCollection = dbKite.collection("ncs_sla");
    var routing_keysCollection = dbKite.collection("routing_keys");
    var spCollection = dbKite.collection("sp");
    var appsCollection = dbSoltura.collection("apps");
    var queryName ={$or:[{"name":"makeapp1"},{"name":"draft1"},{"name":"smsapp"},{"name":"subapp"},{"name":"ussdapp"},{"name":"cassapp"}]};
    var Id = "";
    var len = 0;
    appCollection.find(queryName).toArray(function(err, result) {
        if (err) throw err;
        len = result.length;
        var i;
        for (i = 0; i < len; i++) {
            Id = result[i]._id;
            console.log(Id);
            ncs_slaCollection.remove({"app-id":Id},function(err, result) {
                if (err) throw err;
                //console.log(result);
                db.close();
            });
            routing_keysCollection.remove({"app-id":Id},function(err, result) {
                if (err) throw err;
               // console.log(result);
                db.close();
            });
            app_draftCollection.remove({"_id":Id},function(err, result) {
                if (err) throw err;
                //console.log(result);
                db.close();
            });
            appsCollection.remove({"appId":Id},function(err, result) {
                if (err) throw err;
                // console.log(result);
                db.close();
            });
            appCollection.remove({"app-id":Id},function(err, result) {
                if (err) throw err;
               // console.log(result);
                db.close();
            });
        }

    })
    spCollection.remove({"created-by" : "testcafeuser"},function(err, result) {
        if (err) throw err;
        
        console.log("User deleted.");
        db.close();
    });
});
/*

var mysql = require('mysql');

var con = mysql.createConnection({
    host: "172.16.3.184",
    port:"3306",
    user: "user",
    password: "password",
    database: "common_admin"
});

con.connect(function(err) {
    if (err) throw err;
    var sql = "select * form user where username='testuser1'";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Number of records deleted: " + result.affectedRows);
    });
});
*/
