const db = require('../config/db')

const createBook = (title, author_id, publisher_id, year_published, genre, callback)=>{
     const sql = 'INSERT INTO book (title, author_id, publisher_id, year_published, genre) VALUES (?,?,?,?,?)'
     return db.run(sql, [title, author_id, publisher_id, year_published, genre], callback)
}

const getAllBooks = (callback) => {
    const sql = 'SELECT * FROM book';
    return db.all(sql, callback);
};

const getBookById = (id, callback) => {
    const sql = 'SELECT * FROM book WHERE book_id = ?';
    return  db.get(sql, [id], callback); 
};


const updateBook = (id, title, author_id, publisher_id, year_published, genre, callback) =>{
    const sql = 'UPDATE book SET title = ?, author_id = ?, publisher_id = ?, year_published = ?, genre = ? WHERE book_id = ?';
    return db.run(sql, [title, author_id, publisher_id, year_published, genre, id], callback);
};

const deleteBook = (id, callback) => {
    const sql = 'DELETE FROM book WHERE book_id = ?';
    return db.run(sql, [id], callback); 
};

module.exports = {
    createBook,
    getAllBooks,
    getBookById,
    updateBook,
    deleteBook
}