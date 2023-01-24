import { Router } from 'express';
import { GiftRecord } from '../records/gift.record.js';


const giftRouter = Router();

giftRouter
    .get('/', async (req, res) => {
        const gifts = await GiftRecord.listAll();
        // console.log(gifts);
        res.render('gift/gift', {
            gifts,
        });
    });

export {
    giftRouter
}