const db = require('../config/db')

const createPublisher = (name, address, callback) => {
    const sql = 'INSERT INTO publisher (name, address) VALUES (?,?)';
    return db.run(sql, [name, address], callback);
};

const getAllPublishers = (callback) => {
    const sql = 'SELECT * FROM publisher';
    return db.all(sql, callback);
};

const getPublisherById = (id, callback) => {
    const sql = 'SELECT * FROM publisher WHERE publisher_id = ?';
    return db.get(sql, [id], callback);
};

const updatePublisher = (id, name, address, callback) => {
    const sql = 'UPDATE publisher SET name = ?, address = ? WHERE publisher_id = ?';
    return db.run(sql,[name, address, id], callback);
};

const deletePublisher = (id, callback) => {
    const sql = 'DELETE FROM publisher WHERE publisher_id = ?';
    return db.run(sql, [id], callback);
};

module.exports = {
    createPublisher,
    getAllPublishers,
    getPublisherById,
    updatePublisher,
    deletePublisher
};