import { conn } from "../utils/db.js"

class GiftRecord {
    static async listAll() {
          const [rows] = await conn.query("SELECT * FROM `Gifts`")
        return rows
    }
}

export {
    GiftRecord,
}