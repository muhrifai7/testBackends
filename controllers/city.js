const City = require('../models').city

exports.index = (req, res) => {
    City.findAll().then(users=>res.send(users))
}

exports.show = (req, res) => {
    //DO IT YOURSELF - MINI QUIZ 2
}

exports.store = (req, res) => {
    //DO IT YOURSELF - MINI QUIZ 2
}

exports.update = (req, res) => {
    //DO IT YOURSELF - MINI QUIZ 2
}

exports.delete = (req, res) => {
    //DO IT YOURSELF - MINI QUIZ 2
}