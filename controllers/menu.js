const Menu = require('../models').menu
const Categorie = require('../models').categorie
const Order = require('../models').order


exports.index = (req, res) => {
    Menu.findAll({
        include: [
            {
                model: Order
            }
        ],
    }).then(users=>res.send(users))
}

exports.show = (req, res) => {
    Menu.findOne({where: {id: req.params.id}})
        .then(menu => {
            if (!menu) {
                return res.status(404).send({
                    message: `Menu with id ${req.params.id} is not found!`,
                })
            }
            return res.status(200).send(menu)
        })
        .catch(err => res.status(400).send(err))
}
exports.list = (req, res) => {
    Menu.findAll({where: {id: req.params.id.Categorie}})
        .then(menu => {
            if (!menu) {
                return res.status(404).send({
                    message: `Menu with id ${req.params.id} is not found!`,
                })
            }
            return res.status(200).send(menu)
        })
        .catch(err => res.status(400).send(err))
}

exports.store = (req, res) => {
    // Object.assign(req.body, {created_by: req.user.id})
    Menu.create(req.body).then(menu=> {
        res.send({
            message: "success",
           menu
        })
        .catch(err => res.status(400).send(err))
    })
}

exports.update = (req, res) => {
    Menu.findOne({where: {id: req.params.id}})
        .then(menu => {
            if(!menu) {
                return res.status(404).send({
                    message:`menu with id ${req.params.id} is not found!`
                })
            }
            return menu.update(
                req.body
            )
                .then((menu) => res.status(200).send(menu))
                .catch(err => res.status(400).send(err))
        })
        .catch(err => res.status(400).send(err))
}

exports.delete = (req, res) => {
    Menu.findOne({where: {id: req.params.id}})
        .then(menu => {
            if(!menu) {
                return res.status(404).send({
                    message:`menu with id ${req.params.id} is not found!`
                })
            }
            menu.destroy()
                .then(() => res.status(204).send({
                    message: 'menu deleted!'
                }))
                .catch(error => res.status(400).send(error))
        })
        .catch(error => res.status(400).send(error))
}