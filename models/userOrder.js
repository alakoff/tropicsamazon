module.exports = function(sequelize, DataTypes) {
    var userOrder = sequelize.define(
      "userOrder",
      {
        // Defining the user order model
        orderId: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
          validate: {
            len: [1]
          }
        },
        userId: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            len: [1]
          }
        },
        orderStatusId: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            len: [1]
          }
        },
        orderTotal: {
          type: DataTypes.FLOAT,
          allowNull: false,
          validate: {
            len: [1]
          }
        }
      },
      { freezeTableName: true }
    );
    return userOrder;
  };
  