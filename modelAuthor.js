const db = require('../config/db')

const createAuthor = (name, birthdate, callback)=>{
    const sql = 'INSERT INTO author (name, birthdate) VALUES (?,?)'
    return db.run(sql, [name, birthdate], callback)
} 

const getAllAuthors = (callback)=>{
    const sql = 'SELECT * FROM author'
    return db.all(sql,callback)
}

const getAuthorById = (id, callback) => {
    const sql = 'SELECT * FROM author WHERE author_id = ?';
    return db.get(sql, [id], callback);
};

const updateAuthor = (id, name, birthdate, callback) =>{
    const sql = 'UPDATE author SET name = ?, birthdate = ? WHERE author_id = ?';
    return db.run(sql, [name, birthdate, id], callback);
};

const deleteAuthor = (id, callback) => {
    const sql = 'DELETE FROM author WHERE author_id = ?';
    return db.run(sql, [id], callback);
};

module.exports = {
    createAuthor, 
    getAllAuthor,
    getAuthorById,
    updateAuthor,
    deleteAuthor
}