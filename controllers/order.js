const Order = require('../models').order
const Menu = require('../models').menu

exports.index = (req, res) => {
    Order.findAll({})
        .then(order => res.status(200).send(order))
        .catch(err => res.status(400).send(err))
}


exports.show = (req, res) => {
    Order.findOne({where: {id: req.params.id}})
        .then(Order => {
            if (!Order) {
                return res.status(404).send({
                    message: `Order with id ${req.params.id} is not found!`,
                })
            }
            return res.status(200).send(Order)
        })
        .catch(err => res.status(400).send(err))
}

exports.store = (req, res) => {
    Order.create(req.body)
        .then(order => res.status(201).send(order))
        .catch(err => res.status(400).send(err))
}

exports.update = (req, res) => {
    Order.findOne({where: {id: req.params.id}})
        .then(Order => {
            if(!Order) {
                return res.status(404).send({
                    message:`Order with id ${req.params.id} is not found!`
                })
            }
            return Order.update(
                req.body
            )
                .then((Order) => res.status(200).send(Order))
                .catch(err => res.status(400).send(err))
        })
        .catch(err => res.status(400).send(err))
}

exports.delete = (req, res) => {
    Order.findOne({where: {id: req.params.id}})
        .then(Order => {
            if(!Order) {
                return res.status(404).send({
                    message:`Order with id ${req.params.id} is not found!`
                })
            }
            Order.destroy()
                .then(() => res.status(204).send({
                    message: 'Order deleted!'
                }))
                .catch(error => res.status(400).send(error))
        })
        .catch(error => res.status(400).send(error))
}