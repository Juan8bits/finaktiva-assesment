const { Model } = require('sequelize')
const { logType } = require('../../../../application/domain/utils/types')

module.exports = (sequelize, DataTypes) => {
    class Log extends Model {
    }
    Log.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            description: {
                type: DataTypes.STRING(500),
                allowNull: true
            },
            type: {
                type: DataTypes.ENUM(logType.INFO, logType.ERROR, logType.WARNING),
                allowNull: false
            },
            date: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            fromApp: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: false,
                field: 'from_app'
            },
            createdAt: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: DataTypes.NOW,
                field: 'created_at'
            },
        },
        {
            timestamps: false,
            underscored: true,
            sequelize,
            modelName: 'Log',
            tableName: 'logs'
        }
    )
    return Log
}
