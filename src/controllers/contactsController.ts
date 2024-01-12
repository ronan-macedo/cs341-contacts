import { Request, Response } from "express";
import ContactRepository from "../repositories/contactsRepository";
import { Contact } from "../models/contact";
import { ObjectId } from "mongodb";

class ContactController {
    public async getAllContacts(req: Request, res: Response): Promise<void> {
        try {
            const contacts: Contact[] = await ContactRepository.getAllContacts();
            res.status(200).json(contacts);
        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    }

    public async getContact(req: Request, res: Response): Promise<void> {
        try {
            const id = new ObjectId(req.params.id);
            const contact: Contact | null = await ContactRepository.getContact(id);

            if (!contact) {
                res.status(404).json({ message: "contact not found!" });
                return;
            }

            res.status(200).json(contact);
        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    }
}

export default new ContactController;