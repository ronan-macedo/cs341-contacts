const connection = require('../database/connection').getConnection;
const contactModel = {}
const contactCollection = connection().collection('contacts');

contactModel.getAllContacts = async () => {
    return await contactCollection.find().toArray();
}

contactModel.getContact = async (id) => {
    return await contactCollection.findOne({ _id: id });
}

module.exports = contactModel;