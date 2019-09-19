//Import Models
const models = require('../models')
const Category = models.categorie
const Menu = models.menu

//FUNCTION UTAMA CRUD
exports.show = (req, res) => {
  Category.findOne({
    include: [
      {
        model: Menu,
      }
    ],
    where: { id: req.params.created_by }
  }).then(data => res.send(data))
}