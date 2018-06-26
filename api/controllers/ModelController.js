'use strict';

require('dotenv').config();


exports.get_methode = (req, res, next) => {
    console.log("get me");
    res.status(201).json({
        message: "get request"
    })
};

exports.post_methode = (req, res, next) => {
    console.log("post me");
    res.status(201).json({
        message: "post request"
    })
};