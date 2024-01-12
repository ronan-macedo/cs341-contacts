import { Router } from "express";
import contactsController from "../controllers/contactsController";

const router = Router();

router.get('/', contactsController.getAllContacts);
router.get('/:id', contactsController.getContact);

export default router;