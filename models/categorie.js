'use strict';
module.exports = (sequelize, DataTypes) => {
  const categorie = sequelize.define('categorie', {
    name: DataTypes.STRING
  }, {});
  categorie.associate = function(models) {
    // associations can be defined here
    categorie.hasMany(models.menu)
  };
  return categorie;
};