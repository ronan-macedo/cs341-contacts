const express = require("express");
const router = new express.Router();
const contactsController = require('../controllers/contactsController');

router.use('/', require('./swagger'));
router.get('/', (req, res) => {
    res.send('Hello World!');
});
router.get('/contact/', contactsController.getAllContacts);
router.get('/contact/:id', contactsController.getContact);
router.post('/contact/', contactsController.createContact);
router.put('/contact/:id', contactsController.updateContact);
router.delete('/contact/:id', contactsController.deleteContact);

module.exports = router;