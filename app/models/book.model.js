module.exports = (sequelize, Sequelize) => {
    const Book = sequelize.define("books", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        book_id: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        title: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        author: {
            type: Sequelize.STRING,
            allowNull: false
        },
        type: {
            type: Sequelize.STRING,
            default: 'Reference'
        },
        category: {
            type: Sequelize.STRING,
            default: 'Liturgy'
        },
        available: {
            type: Sequelize.BOOLEAN,
            default: true
        }
    });

    return Book;
};