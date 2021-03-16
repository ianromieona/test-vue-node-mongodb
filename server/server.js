const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
var path = require("path");

const { MongoClient, ObjectId } = require("mongodb");
const url =
    "mongodb+srv://ianromieona:ianromieona@cluster0.zjir2.mongodb.net/test";

const app = express();
const port = 3000;
app.set('port', (process.env.PORT || 5000));
app.use(cors());
app.use(express.static("dist"));

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname + "/dist/index.html"));
});

app.get("/prizes", (req, res) => {
    try {
        MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            var dbo = db.db("resman");
            dbo.collection("test")
                .find({})
                .toArray(function (err, result) {
                    if (err) throw err;
                    res.status(200).json(result);

                    db.close();
                });
        });
    } catch (e) {
        res.status(500).json({
            error: true,
        });
    }
});

app.get("/prizes/:id", (req, res) => {
    if (new ObjectId.isValid(req.params.id)) {
        try {
            MongoClient.connect(url, function (err, db) {
                if (err) throw err;
                var dbo = db.db("resman");
                dbo.collection("test").findOne(
                    { _id: new ObjectId(req.params.id) },
                    function (err, result) {
                        if (err) throw err;
                        res.status(200).json(result);

                        db.close();
                    }
                );
            });
        } catch (e) {
            res.status(500).json({
                error: true,
            });
        }
    } else {
        res.status(500).json({
            error: true,
            message: "Invalid ID",
        });
    }
});

app.post("/prizes/:id", (req, res) => {
    if (new ObjectId.isValid(req.params.id)) {
        try {
            MongoClient.connect(url, function (err, db) {
                if (err) throw err;
                var dbo = db.db("resman");
                dbo.collection("test").findOne(
                    { _id: new ObjectId(req.params.id) },
                    function (err, result) {
                        if (err) throw err;
                        dbo.collection("test").updateOne(
                            { _id: new ObjectId(req.params.id) },
                            { $set: { quantity: result.quantity - 1 } },
                            function (err, updateResult) {
                                if (err) throw err;
                                res.status(200).json(updateResult);
                                db.close();
                            }
                        );
                        db.close();
                    }
                );
            });
        } catch (e) {
            res.status(500).json({
                error: true,
            });
        }
    } else {
        res.status(500).json({
            error: true,
            message: "Invalid ID",
        });
    }
});

app.listen(app.get('port'), () =>
    console.log(`Hello world app listening on port ${port}!`)
);
