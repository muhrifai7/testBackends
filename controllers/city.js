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
        .catch(err => res.status(400).send(err))
    })
}

exports.update = (req, res) => {
    City.findOne({where: {id: req.params.id}})
        .then(city => {
            if(!city) {
                return res.status(404).send({
                    message:`city with id ${req.params.id} is not found!`
                })
            }
            return city.update(
                req.body
            )
                .then((city) => res.status(200).send(city))
                .catch(err => res.status(400).send(err))
        })
        .catch(err => res.status(400).send(err))
}

exports.delete = (req, res) => {
    City.findOne({where: {id: req.params.id}})
        .then(city => {
            if(!city) {
                return res.status(404).send({
                    message:`city with id ${req.params.id} is not found!`
                })
            }
            city.destroy()
                .then(() => res.status(204).send({
                    message: 'City deleted!'
                }))
                .catch(error => res.status(400).send(error))
        })
        .catch(error => res.status(400).send(error))
}