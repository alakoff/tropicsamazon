module.exports = function(sequelize, DataTypes) {
  var UserProfile = sequelize.define(
    "UserProfile",
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
      zipcode: {
        type: DataTypes.STRING
      },
      googleId: {
        type: DataTypes.STRING
      }
    },
    {
      freezeTableName: true
    }
  );
  UserProfile.associate = function(models) {
    UserProfile.belongsTo(models.State, {
      foreignKey: "stateId",
      targetKey: "stateId"
    });
  };
  return UserProfile;
};
