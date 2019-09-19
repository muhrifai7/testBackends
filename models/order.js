'use strict';
module.exports = (sequelize, DataTypes) => {
  const order = sequelize.define('order', {
    name: DataTypes.STRING,
    menuId: DataTypes.INTEGER,
    transactionsId: DataTypes.STRING,
    qty: DataTypes.INTEGER,
    price: DataTypes.DOUBLE,
    status: DataTypes.INTEGER
  }, {});
  order.associate = function(models) {
    // associations can be defined here
    order.belongsTo(models.menu, {
      foreignKey: 'menuId'
    }),
    order.belongsTo(models.transaction, {
      foreignKey: 'transactionId'
    })
  };
  return order;
};