const { conn } = require('../utils/db.js');
const { ValidationError } = require('../utils/errors.js');
const { v4: uuid } = require('uuid');

class GiftRecord {
    constructor(obj) {
        if (obj.name.length < 3 || obj.name.length > 55) {
            throw new ValidationError (
                'Nazwa zabawki musi mieć pomiędzy 3 a 55 znaków'
                )
            }
        if (obj.count < 1 || obj.count > 99999 || isNaN(obj.count)) { 
            throw new ValidationError(
                'To musi być liczba pomiędzy 1 a 99999'
            )
        }
        this.id = obj.id;
        this.name = obj.name;
        this.count = obj.count
    }
    async save() {
        if(!this.id) {
            this.id = uuid();
        }
        await conn.execute("INSERT INTO `Gifts` VALUES(:id, :name, :count)", {
            id: this.id,
            name: this.name,
            count: this.count,
        });
    }

    static async getOne(id) {
        const [row] = await conn.execute("SELECT * FROM `Gifts` WHERE `id` = :id", {
            id
        });
        return row === null ? null : row[0]
    }

    static async listAll() {
          const [rows] = await conn.query("SELECT * FROM `Gifts`")
        return rows
    }

}

module.exports = {
    GiftRecord,
}