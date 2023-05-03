//? Connects to MongoDB
//! DO NOT TOUCH THIS FILE UNLESS YOU KNOW WHAT YOU ARE DOING
//* This file is a key component of the project and is used to connect to the database
//* If you are trying to connect to the database, use the connectToDatabase function
// TODO: Add Ability to connect to multiple databases

import { MongoClient, MongoClientOptions, Db, Collection } from 'mongodb';

const { MONGODB_URL } = process.env;

if (!MONGODB_URL) {
    throw new Error(
        'Please define the MONGODB_URI environment variable inside .env.local'
    );
}

interface DatabaseConnection {
    client: MongoClient;
    db: ReturnType<MongoClient['db']>;
}

interface CachedConnection {
    conn: DatabaseConnection | null;
    promise: Promise<void> | null;
}

interface MongoOptions extends MongoClientOptions {
    useNewUrlParser?: boolean;
    useUnifiedTopology?: boolean;
}

let cached: CachedConnection = global.mongo;
if (!cached) {
    cached = global.mongo = { conn: null, promise: null };
}

export async function connectToDatabase(): Promise<{ db: Db }> {
    if (cached.conn) return cached.conn;
    if (!cached.promise) {
        const conn: DatabaseConnection = {
            client: null,
            db: null,
        };
        const opts: MongoOptions = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        };
        cached.promise = MongoClient.connect(MONGODB_URL, opts)
            .then((client) => {
                conn.client = client;
                return client.db('updates');
            })
            .then((db) => {
                conn.db = db;
                cached.conn = conn;
            });
    }
    await cached.promise;
    return cached.conn;
}

export interface Database {
    collection(name: string): Collection;
}
