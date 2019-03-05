module.exports = function(sequelize, DataTypes) {
  var userProfile = sequelize.define(
    "userProfile",
    {
      userId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      userName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      userEmail: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      userName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      userPasswd: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      userStatus: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      userType: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      userAddress: {
        type: DataTypes.TEXT
      },
      city: {
        type: DataTypes.STRING
      },
      state: {
        type: DataTypes.STRING
      },
      zipcode: {
        type: DataTypes.STRING
      }
    },
    {
      freezeTableName: true
    }
  );
  return userProfile;
};
