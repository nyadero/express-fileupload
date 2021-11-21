
module.exports = (Sequelize, DataTypes) => {
    const Profiles = Sequelize.define("Profiles", {
        make: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        model : {
            type: DataTypes.STRING,
            allowNull: false,
        },
        manufacturer : {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description : {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        photo: {
            type: DataTypes.STRING,
        },
    });

    return Profiles;
}