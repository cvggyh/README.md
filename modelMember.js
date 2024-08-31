const db = require('../config/db')

const createMember = (name, address, phone, email, callback) => {
    const sql = 'INSERT INTO member (name, address, phone, email) VALUES (?,?,?,?)';
    return db.run(sql, [name, address, phone, email], callback);
};

const getAllMembers = (callback) => {
    const sql = 'SELECT * FROM member';
    return db.all(sql, callback);
};

const getMemberById = (id, callback) => {
    const sql = 'SELETE * FROM member WHERE member_id = ?';
    return db.get(sql, [id], callback);
};

const updateMember = (id, name, address, phone, email, callback) => {
    const sql = 'UPDATE member SET name = ?, address = ?, phone = ?, email = ? WHERE member_id = ?'; 
    return db.run(sql, [name, address, phone, email, id], callback);
};

const deleteMember = (id, callback) => {
    const sql = 'DELETE FROM member WHERE member_id = ?';
    return db.run(sql, [id], callback);
};

module.exports = {
    createMember, 
    getAllMembers,
    getMemberById,
    updateMember,
    deleteMember
};