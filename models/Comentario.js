let Comentario = (sequelize, DataTypes) => {
    return sequelize.define(
        'Comentario',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull:false
            },
            texto: {
                type: DataTypes.STRING,
                allowNull: false
            },
            usuarios_id: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            post_id: {
                type: DataTypes.INTEGER,
                allowNull: true
            }
        },{
            tableName: "comentarios",
            timestamps: false
        }

    );
}

module.exports = Comentario;