module.exports = function(sequelize, DataTypes) {
  var Item = sequelize.define(
    "Item",
    {
      // Defining the Item model
      itemId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      itemName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      itemPrice: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      itemDesciption: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      itemImage: {
        type: DataTypes.STRING
      },
      stockQuantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      productSales: {
        type: DataTypes.FLOAT
      }
    },
    { freezeTableName: true }
  );
  Item.associate = function(models) {
    Item.belongsTo(models.Department, {
      foreignKey: "departmentId",
      targetKey: "departmentId"
    });
  };
  return Item;
};
