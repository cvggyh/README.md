const db = require('../config/db')

const createLoan = (book_id, member_id, loan_date, return_date, callback)=> {
    const sql = 'INSERT INTO loan (book_id, member_id, loan_date, return_date) VALUES (?,?,?,?)';
    return db.run(sql, [book_id, member_id, loan_date, return_date], callback);
}

const getAllLoans = (callback) => {
    const sql = 'SELECT * FROM loan';
    return db.all(sql, callback);
};

const getLoanById = (id, callback) => {
    const sql = 'SELECT * FROM loan WHERE loan_id = ?';
    return db.get(sql, [id], callback);
};

const updateLoan = (id, book_id, member_id, loan_date, return_date, callback) => {
    const sql = 'UPDATE loan SET book_id = ?, member_id = ?, loan_date = ?, return_date = ? WHERE loan_id = ?';
    return db.run(sql, [book_id, member_id, loan_date, return_date, id], callback);
};

const deleteLoan = (id, callback) => {
    const sql = 'DELETE * FROM loan WHERE loan_id = ?';
    return db.run(sql, [id], callback);
};

module.exports = {
    createLoan, 
    getAllLoans,
    getLoanById,
    updateLoan,
    deleteLoan
}