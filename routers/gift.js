import { Router } from 'express';
import { GiftRecord } from '../records/gift.record.js';
import { escapeHtml } from '../utils/helpers.js';


const giftRouter = Router();

giftRouter
    .get('/', async (req, res) => {
        const gifts = await GiftRecord.listAll();
        // console.log(gifts);
        res.render('gift/gift', {
            gifts,
        });
    })

    .post('/', async (req, res) => {
        const gifts = await GiftRecord.listAll();
        const data = req.body;
        const name = escapeHtml(data.name);
        const count = Number(escapeHtml(data.count));

        if (isNaN(count)) {
            res.render('gift/gift', {
                gifts,
                error: 'Musi liczba'
            });
            return
        }
        console.log(name, count);

        res.redirect('/gifts');
    })

export {
    giftRouter
}