const mongoClient = require('mongodb').MongoClient;
const mysql = require('mysql');
const env = require('dotenv').config();

const url = "mongodb://172.16.3.184:27017/";

class commonFunctions {
    constructor() {
        this.removeSolturaApp = (appName, keyword) => {
            mongoClient.connect(url, function (err, db) {
                if (err) throw err;
                db.db("new_sol").collection("apps").find({"appName":appName})
                    .toArray()
                    .then(data => {
                        let appId = data[0].appId;
                        console.log(appId);
                        let solAppCollection = db.db("new_sol").collection("apps");
                        let kiteAppCollection = db.db("new_kite").collection("app");
                        let kiteKeyCollection = db.db("new_kite").collection("routing_keys");
                        let kiteNcs_SlaCollection = db.db("new_kite").collection("ncs_sla");
                        solAppCollection.remove({"appId": appId},function(err, result) {
                            if (err) throw err;
                            console.log(result + "App Document deleted");
                            db.close();
                        });
                        kiteAppCollection.remove({"_id": appId},function(err, result) {
                            if (err) throw err;
                            console.log(result + "Kite app Document deleted");
                            db.close();
                        });
                        kiteKeyCollection.remove({"keyword": keyword},function(err, result) {
                            if (err) throw err;
                            console.log(result + "Keyword Document deleted");
                            db.close();
                        });
                        kiteNcs_SlaCollection.remove({"app-id": appId},function(err, result) {
                            if (err) throw err;
                            console.log(result + "ncs_sla Document deleted");
                            db.close();
                        });
                    })
                    .catch(err => {
                        console.log(err)
                    });
                // console.log(appId[0].appId);

            })
        };
        
        this.getOTP = (msisdn) => {
            return new Promise(function (resolve, reject) {
                let otp = null;
                const con = mysql.createConnection({
                    host: env.parsed.MYSQL_HOST,
                    user: env.parsed.MYSQL_USER,
                    password: env.parsed.MYSQL_PASSWORD,
                    database: "new_cadmin"
                });
                con.connect((err) => {
                    con.query("SELECT msisdn_verification_code FROM user where\ " +
                        "mobile_no="+msisdn, function (err, result, fields) {
                        otp = result;
                        resolve(otp)
                    });
                    con.end((err) => {
                        console.log("database connection closed")
                    });
                });

            });
        };

        this.removeUser = (email) => {
            return new Promise(function (resolve, reject) {
                let otp = null;
                const con = mysql.createConnection({
                    host: env.parsed.MYSQL_HOST,
                    user: env.parsed.MYSQL_USER,
                    password: env.parsed.MYSQL_PASSWORD,
                    database: "new_cadmin"
                });
                con.connect((err) => {
                    con.query("DELETE FROM user WHERE email ="+email, function (err, result, fields) {
                        // otp = result;
                        resolve(result)
                    });
                    con.end((err) => {
                        console.log("database connection closed")
                    });
                });

            });
        };

        // this.removeUser = (email) => {
        //     const con = mysql.createConnection({
        //         host: env.parsed.MYSQL_HOST,
        //         user: env.parsed.MYSQL_USER,
        //         password: env.parsed.MYSQL_PASSWORD,
        //         database: "new_cadmin"
        //     });
        //     con.connect((err) => {
        //         if (err){
        //             console.log("error")
        //         }
        //         let query = `DELETE FROM user WHERE email = ?`;
        //         con.query(query, email, (err, results, fields) => {
        //             if (err) {
        //                 return console.log("could not delete user")
        //             }
        //             console.log('Deleted Row(s):', results.affectedRows)
        //         });
        //         con.end((err) => {
        //             console.log("database connection closed")
        //         });
        //
        //     });
        //     // con.end();
        // };
    }
}

module.exports = commonFunctions;