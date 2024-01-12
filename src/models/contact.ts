import { ObjectId } from 'mongodb';

export interface Contact {
    _id: ObjectId,
    firstName: string,
    lastName: string,
    email: string,
    favoriteColor: string,
    birthday: string
}