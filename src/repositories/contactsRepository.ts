import { Collection, ObjectId } from 'mongodb';
import { Contact } from '../models/contact';
import { db } from '../database/connection';

const contactCollection = (): Collection<Contact> => {
    return db.collection('contacts');
};

const ContactRepository = {
    async getAllContacts(): Promise<Contact[]> {
        return contactCollection().find().toArray();
    },

    async getContact(id: ObjectId): Promise<Contact | null> {
        return contactCollection().findOne({ _id: id });
    }
};

export default ContactRepository;