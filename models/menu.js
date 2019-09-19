'use strict';
module.exports = (sequelize, DataTypes) => {
  const menu = sequelize.define('menu', {
    menus: DataTypes.STRING,
    price: DataTypes.DOUBLE,
    img: DataTypes.STRING,
    categorieId: DataTypes.INTEGER
  }, {});
  menu.associate = function(models) {
    // associations can be defined here
    // menu.hasMany(models.order),
    menu.belongsTo(models.categorie)
  };
  return menu;
};