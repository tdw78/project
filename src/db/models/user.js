'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    name: { 
      type: DataTypes.STRING,
      allowNull: false
    },
    email: { 
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: { msg: "must be a valid email" }
      },
      unique: true
    },
    password:{ 
      type: DataTypes.STRING,
      allowNull: false 
    }
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};