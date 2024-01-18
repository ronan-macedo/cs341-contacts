const contactModel = require('../models/contactsModel');
const objectId = require('mongodb').ObjectId;
const contactController = {};

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
            res.status(404).json({ message: "Contact not found!" });
            return;
        }

        res.status(200).json(contact);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

contactController.createContact = async (req, res) => {
    try {
        const contact = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            favoriteColor: req.body.favoriteColor,
            birthday: req.body.birthday,
        }
        const response = await contactModel.createContact(contact);

        if (response.acknowledged) {
            res.status(201).send();
            return;
        }

        res.status(400).json({ message: "Error while creating new contact!" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

contactController.updateContact = async (req, res) => {
    try {
        const contactId = new objectId(req.params.id);
        const contact = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            favoriteColor: req.body.favoriteColor,
            birthday: req.body.birthday,
        }
        const response = await contactModel.updateContact(contactId, contact);

        if (response.matchedCount > 0) {
            res.status(204).send();
            return;
        }

        res.status(400).json({ message: "Error while updating a contact!" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

contactController.deleteContact = async (req, res) => {
    try {
        const contactId = new objectId(req.params.id);
        const response = await contactModel.deleteContact(contactId);

        if (response.deletedCount > 0) {
            res.status(204).send();
            return;
        }

        res.status(400).json({ message: "Error while deleting a contact!" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = contactController;