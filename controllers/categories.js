const Categories = require('../models').categorie
const Menu = require('../models').menu

exports.index = (req, res) => {
    Categories.findAll({
        include: [
            {
                model: Menu
            }
        ],
    }).then(users=>res.send(users))
}

exports.show = (req, res) => {
    Categories.findOne({where: {id: req.params.id}})
        .then(categorie => {
            if (!categorie) {
                return res.status(404).send({
                    message: `Categories with id ${req.params.id} is not found!`,
                })
            }
            return res.status(200).send(categorie)
        })
        .catch(err => res.status(400).send(err))
}

exports.store = (req, res) => {
    Categories.create(req.body).then(categorie=> {
        if (!categorie) {
            return res.status(404).send({
                message: `Categories with id ${req.params.id} is not found!`,
            })
        }
        return res.status(200).send(categorie)
    })
    .catch(err => res.status(400).send(err))

}

exports.update = (req, res) => {
    Categories.findOne({where: {id: req.params.id}})
        .then(categorie => {
            if(!categorie) {
                return res.status(404).send({
                    message:`categorie with id ${req.params.id} is not found!`
                })
            }
            return categorie.update(
                req.body
            )
                .then((categorie) => res.status(200).send(categorie))
                .catch(err => res.status(400).send(err))
        })
        .catch(err => res.status(400).send(err))
}

exports.delete = (req, res) => {
    Categories.findOne({where: {id: req.params.id}})
        .then(categorie => {
            if(!categorie) {
                return res.status(404).send({
                    message:`categorie with id ${req.params.id} is not found!`
                })
            }
            categorie.destroy()
                .then(() => res.status(204).send({
                    message: 'categorie deleted!'
                }))
                .catch(error => res.status(400).send(error))
        })
        .catch(error => res.status(400).send(error))
}