require('dotenv').config();
const client = require('mongodb').MongoClient;

let _db;

const initializeDb = (callback) => {
    if (_db) {
        console.log('Database is already initialized!');
        return callback(null, _db);
    }

    client.connect(process.env.MONGODB_URI)
        .then((client) => {
            _db = client.db(process.env.DB_NAME);
            callback(null, _db);
        })
        .catch((err) => {
            callback(err);
        });
};

const getConnection = () => {
    if (!_db) {
        throw Error('Database not initialized');
    }

    return _db;
}

module.exports = { initializeDb, getConnection };