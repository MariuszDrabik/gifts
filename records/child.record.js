const { conn } = require("../utils/db")
const { v4: uuid } = require('uuid');

class ChildRecord {
    constructor(obj) {
        if (obj.name.length < 3 || obj.name.length > 25) {
            throw new ValidationError (
                'Imię musi mieć od 3 do 25 znaków'
                )
            }
        this.id = obj.id;
        this.name = obj.name;
        this.gift_id = obj.gift_id
    }
    async save() {
        if(!this.id) {
            this.id = uuid();
        }
        await conn.execute("INSERT INTO `Children`(`id`, `name`) VALUES(:id, :name)", {
            id: this.id,
            name: this.name,
        });
    }
    async giveGift() {
        console.log(this.id, this.gift_id);
        await conn.execute("UPDATE `Children` SET `gift_id` = :gift_id WHERE `id` = :id", {
            id: this.id,
            gift_id: this.gift_id,
        });
    }

    static async getOne(id) {

            const [row] = await conn.execute("SELECT * FROM `Children` WHERE `id` = :id", {
                id
            })
        return row.length === 0 ? null : row[0];
    }

    static async listAll() {
        const [rows] = await conn.execute("SELECT * FROM `Children` ORDER BY `name` ASC");
        return rows
    }
}

module.exports = {
    ChildRecord,
}