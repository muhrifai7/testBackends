const City = require('../models').city

exports.index = (req, res) => {
    City.findAll().then(users=>res.send(users))
}

exports.show = (req, res) => {
    City.findOne({where: {id: req.params.id}})
        .then(city => {
            if (!city) {
                return res.status(404).send({
                    message: `city with id ${req.params.id} is not found!`,
                })
            }
            return res.status(200).send(city)
        })
        .catch(err => res.status(400).send(err))
}

exports.store = (req, res) => {
    City.create(req.body).then(city=> {
        res.send({
            message: "success",
           city
        })
    })
}

exports.update = (req, res) => {
    //DO IT YOURSELF - MINI QUIZ 2
}

exports.delete = (req, res) => {
    //DO IT YOURSELF - MINI QUIZ 2
}