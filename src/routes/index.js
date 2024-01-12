const express = require("express");
const router = new express.Router();
const contactsController = require('../controllers/contactsController');

router.get('/', contactsController.getAllContacts);
router.get('/:id', contactsController.getContact);

module.exports = router;