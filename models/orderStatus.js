module.exports = function(sequelize, DataTypes) {
  var orderStatus = sequelize.define(
    "orderStatus",
    {
      orderStatusId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      orderStatus: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      }
    },
    {
      freezeTableName: true
    }
  );
  return orderStatus;
};
