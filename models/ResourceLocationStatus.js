﻿/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('ResourceLocationStatus', {
        ResourceLocationStatusID: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        Status: {
            type: DataTypes.STRING,
            allowNull: true,
        }
    });
};
