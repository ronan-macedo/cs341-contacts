import { config } from 'dotenv';
config();
import { MongoClient, Db } from 'mongodb';

const mongodbUri: string = process.env.MONGODB_URI ?? "";
const dbName: string = process.env.DB_NAME ?? "";

let db: Db;

const initializeDb = async () => {
    const client = new MongoClient(mongodbUri);

    try {
        await client.connect();
        console.log("Database connected!");
        db = client.db(dbName);
    } catch (error) {
        console.error("Conection error:", error);
    }
};

export { initializeDb, db };