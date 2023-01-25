import { conn } from "../utils/db.js"
import { ValidationError } from "../utils/errors.js"

class GiftRecord {
    constructor(obj) {
        if (!obj.name || obj.name.lenth < 3 || obj.name.lenth > 55 ) {
            throw new ValidationError('Nazwa musi mieć między 3 a 55 znaków bez znaków specjalnych')
        }
        if (!obj.count || obj.count < 1 ) {
            throw new ValidationError('Musimy mieć coś na stanie')
        }
        this.id = obj.id;
        this.name = obj.name;
        this.count = obj.count;
    }
    static async listAll() {
          const [rows] = await conn.query("SELECT * FROM `Gifts`")
        return rows
    }
    static async save(name, count) {
        await conn.query("INSERT INTO `Gifts`")
    }
}

export {
    GiftRecord,
}