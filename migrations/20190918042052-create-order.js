'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      menuId: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references : {
          model: 'menus',
            key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      transactionsId: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references : {
          model: 'transactions',
            key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      qty: {
        type: Sequelize.INTEGER
      },
      price: {
        type: Sequelize.DOUBLE
      },
      status: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('orders');
  }
};