module.exports = function(sequelize, DataTypes) {
    var item = sequelize.define("item",
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
        itemDesciption: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            len: [1]
          }
        },
        itemImage: {
          type: DataTypes.BLOB
        },
        departmentId: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            len: [1]
          }
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
      },{ freezeTableName: true }
    );
    return item;
  };
  