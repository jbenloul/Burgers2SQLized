module.exports = function(sequelize, DataTypes) {
    var Burger = sequelize.define("Burger", {
        burger_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        burger_descript: {
            type: DataTypes.STRING,
            allowNull: false,
            len: [1]
        },
        eaten: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        tima_date: {
            type: DataTypes.DATE
        }
    }, {
        timestamps: false
    });
    return Burger;
};
