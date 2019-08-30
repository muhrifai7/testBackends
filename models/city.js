'use strict';
module.exports = (sequelize, DataTypes) => {
  const city = sequelize.define('city', {
    name: DataTypes.STRING,
    photo: DataTypes.BLOB,
    isFavorite: DataTypes.BOOLEAN
  }, {});
  city.associate = function(models) {
    city.belongsTo(models.user, {
      foreignKey: 'createdBy'
    })
  };
  return city;
};