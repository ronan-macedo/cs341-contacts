const contactModel = require('../models/contactsModel');
const objectId = require('mongodb').ObjectId;
const contactController = {}

contactController.getAllContacts = async (req, res) => {
    try {
        const contacts = await contactModel.getAllContacts();
        res.status(200).json(contacts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

contactController.getContact = async (req, res) => {
    try {
        const id = new objectId(req.params.id);
        const contact = await contactModel.getContact(id);

        if (!contact) {
            res.status(404).json({ message: "contact not found!" });
            return;
        }

        res.status(200).json(contact);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = contactController;