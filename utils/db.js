import { MongoClient } from 'mongodb'

const { MONGODB_URL } = process.env

if (!MONGODB_URL) {
    throw new Error(
        'Please define the MONGODB_URI environment variable inside .env.local'
    )
}

let cached = global.mongo
if (!cached) {
    cached = global.mongo = { conn: null, promise: null }
}

export async function connectToDatabase() {
    if (cached.conn) return cached.conn
    if (!cached.promise) {
        const conn = {}
        const opts = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
        cached.promise = MongoClient.connect(MONGODB_URL, opts)
            .then((client) => {
                conn.client = client
                return client.db("updates")
            })
            .then((db) => {
                conn.db = db
                cached.conn = conn
            })
    }
    await cached.promise
    return cached.conn
}