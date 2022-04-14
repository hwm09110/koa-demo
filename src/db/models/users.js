const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users', {
    s_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    s_name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    s_gender: {
      type: DataTypes.STRING(4),
      allowNull: false
    },
    s_birthday: {
      type: DataTypes.DATE,
      allowNull: false
    },
    s_address: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    s_age: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    parentPhone: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "家长手机号码"
    }
  }, {
    sequelize,
    tableName: 'users',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "s_id" },
        ]
      },
    ]
  });
};
