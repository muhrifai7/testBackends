const Transaction = require('../models').transaction
const Order = require('../models').order
const Menu= require('../models').menu

exports.index = (req, res) => {
    Transaction.findAll({})
        .then(transaction => res.status(200).send(transaction))
        .catch(err => res.status(400).send(err))
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

// exports.update = (req, res) => {
//     Transaction.findOne({ where: {id: req.params.id }})
//         .then(transaction => {
//             return transaction.update(req.body)
//         })
//         .catch(err => res.status(400).send(err))
// }
exports.update = (req, res) => {
    Transaction.findOne({where: {id: req.params.id}})
        .then(Order => {
            if(!Order) {
                return res.status(404).send({
                    message:`Order with id ${req.params.id} is not found!`
                })
            }
            return Transaction.update(
                req.body
            )
                .then((Order) => res.status(200).send(Order))
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

// exports.show = (req, res) => {
//     Transaction.findOne({
//         include: [
//         {
//             model: Order,
//             include:[
//                 {model:Menu}
//             ]
//         }
//         ],
//         where: { id: req.params.id }
//     }).then(data => res.send(data))
// }