const { DataTypes } = require('sequelize');
const sequelize = require('../config/DatabaseConfig');

const User = sequelize.define("User", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
    },
    username: {
        type: DataTypes.STRING,
        unique:true
    },
    password: {
        type: DataTypes.STRING,
    }
}, {
    timestamps: true, // Add timestamps (createdAt, updatedAt)
    underscored: true, // Use snake_case for column names
    tableName: 'users', // Specify the table name
});

module.exports = User;
