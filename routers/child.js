import { Router } from 'express';
import { ChildRecord } from '../records/child.record.js';
import { GiftRecord } from '../records/gift.record.js';

const childRouter = Router();

childRouter
    .get('/', async (req, res) => {
        const children = ChildRecord.listAll();
        const gifts = await GiftRecord.listAll();
        // console.log(gifts)
        res.render('children/list', {
            children,
            gifts
        });
    });

export {
    childRouter
}