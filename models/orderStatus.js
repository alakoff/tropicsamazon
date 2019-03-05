module.exports = function(sequelize, DataTypes) {
  var OrderStatus = sequelize.define(
    "OrderStatus",
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
  return OrderStatus;
};
