import { conn } from "../utils/db.js"
import { ValidationError } from "../utils/errors.js"

class GiftRecord {
    constructor(obj) {
        if (obj.name.length() < 3 || obj.name.length() > 55) {
            throw new ValidationError(
                'Nazwa zabawki musi mieć pomiędzy 3 a 55 znaków'
                )
            }
        if (obj.counter < 1 || obj.counter > 99999 || isNaN(obj.counter)) {
            throw new ValidationError(
                'To musi być liczba pomiędzy 1 a 99999'
            )
        }
        this.id = obj.id;
        this.name = obj.name;
        this.count = obj.count
    }
    async saveGift() {
        if(!this.id) {
            this.id = uuid();
            conn.ex
        }
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