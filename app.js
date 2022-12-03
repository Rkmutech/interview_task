const express=require("express");
const app = express();
const path = require('path');
const router = express.Router();
const mysql=require('mysql');
const fileUpload = require('express-fileupload');
const host=5000;
const db=mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'interview'
});
db.connect((error)=>{
    if(error){
        console.log(error)
    }else{
        console.log("Mysql Connected")
    }
})
app.listen(host, () => console.log(`Listening on Port ${host}`))