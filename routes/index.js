const express = require("express");
const router = new express.Router();
const contactsController = require('../controllers/contactsController');
const utils = require('../utils');
const validate = require('../utils/contactValidator');

router.use('/', utils.errorHandler(require('./swagger')));
router.get('/', utils.errorHandler((req, res) => {
    res.send('Hello World!');
}));
router.get('/contact/', utils.errorHandler(contactsController.getAllContacts));
router.get(
    '/contact/:id',
    validate.contactIdValidationRules(),
    validate.checkContact,
    utils.errorHandler(contactsController.getContact));
router.post(
    '/contact/',
    validate.createContactValidationRules(),
    validate.checkContact,
    utils.errorHandler(contactsController.createContact));
router.put(
    '/contact/:id',
    validate.updateContactValidationRules(),
    validate.checkContact,
    utils.errorHandler(contactsController.updateContact));
router.delete(
    '/contact/:id',
    validate.contactIdValidationRules(),
    validate.checkContact,
    utils.errorHandler(contactsController.deleteContact));

module.exports = router;