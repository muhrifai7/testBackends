'use strict';
module.exports = (sequelize, DataTypes) => {
  const order = sequelize.define('order', {
    name: DataTypes.STRING,
    menuId: DataTypes.INTEGER,
    transactionId: DataTypes.STRING,
    qty: DataTypes.INTEGER,
    price: DataTypes.DOUBLE,
    status: DataTypes.INTEGER
  }, {});
  order.associate = function(models) {
    // associations can be defined here
    order.hasMany(models.transaction),
    order.belongsTo(models.menu)
  };
  return order;
};