const connection = require('../database/connection').getConnection;
const contactModel = {};
const contactCollection = connection().collection('contacts');

contactModel.getAllContacts = async () => {
    return await contactCollection.find().toArray();
}

contactModel.getContact = async (id) => {
    return await contactCollection.findOne({ _id: id });
}

contactModel.createContact = async (contact) => {
    return await contactCollection.insertOne(contact);
}

contactModel.updateContact = async (id, contact) => {
    return await contactCollection.replaceOne({ _id: id }, contact);
}

contactModel.deleteContact = async (id) => {
    return await contactCollection.deleteOne({ _id: id }, true);
}

module.exports = contactModel;