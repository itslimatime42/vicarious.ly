'use strict';
module.exports = (sequelize, DataTypes) => {
  const Stay = sequelize.define('Stay', {
    id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
    arrival: { type: DataTypes.DATE, allowNull: false },
    departure: { type: DataTypes.DATE, defaultValue: null },
    CityId: { type: DataTypes.UUID, allowNull: false },
    UserId: { type: DataTypes.UUID, allowNull: false }
  }, {});
  Stay.associate = function(models) {
    Stay.belongsTo(models.User);
    Stay.belongsTo(models.City);
  };
  return Stay;
};