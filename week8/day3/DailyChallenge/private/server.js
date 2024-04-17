const express = require("express");
const cors = require("cors")
const post_router = require('./routes');
const {db} = require('./config')
const {getUsers, getName} = require('./controller.js')
const userDB = db("users")

const app = express();

app.use(cors());
app.use(express.static(__dirname + "/public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(1000, () => {
    console.log(`run on 1000`);
  });

app.get('/users', getUsers)
app.get('/users/name', getName)

app.use('/',post_router);