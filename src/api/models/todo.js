'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class todo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      todo.belongsTo(models.user);
    }
  }
  todo.init(
    {
      user_id: DataTypes.INTEGER,
      title: DataTypes.TEXT,
      description: DataTypes.TEXT,
      is_completed: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'todo',
      underscored: true,
    }
  );
  return todo;
};
