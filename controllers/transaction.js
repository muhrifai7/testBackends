const Transaction = require('../models').transaction

exports.index = (req, res) => {
    Transaction.findAll().then(users=>res.send(users))
}

exports.show = (req, res) => {
    Transaction.findOne({where: {id: req.params.id}})
        .then(transaction => {
            if (!transaction) {
                return res.status(404).send({
                    message: `transaction with id ${req.params.id} is not found!`,
                })
            }
            return res.status(200).send(transaction)
        })
        .catch(err => res.status(400).send(err))
}

exports.store = (req, res) => {
    Transaction.create(req.body).then(transaction=> {
        res.send({
            message: "success",
           transaction
        })
        .catch(err => res.status(400).send(err))
    })
}

exports.update = (req, res) => {
    Transaction.findOne({where: {id: req.params.id}})
        .then(transaction => {
            if(!transaction) {
                return res.status(404).send({
                    message:`transaction with id ${req.params.id} is not found!`
                })
            }
            return Transaction.update(
                req.body
            )
                .then((transaction) => res.status(200).send(transaction))
                .catch(err => res.status(400).send(err))
        })
        .catch(err => res.status(400).send(err))
}

exports.delete = (req, res) => {
    Transaction.findOne({where: {id: req.params.id}})
        .then(transaction => {
            if(!transaction) {
                return res.status(404).send({
                    message:`transaction with id ${req.params.id} is not found!`
                })
            }
            Transaction.destroy()
                .then(() => res.status(204).send({
                    message: 'Transaction deleted!'
                }))
                .catch(error => res.status(400).send(error))
        })
        .catch(error => res.status(400).send(error))
}