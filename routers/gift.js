const Router = require('express');
const { GiftRecord } = require('../records/gift.record.js');
const { escapeHtml } = require('../utils/helpers.js');


const giftRouter = Router();

giftRouter
    .get('/', async (req, res) => {
        const gifts = await GiftRecord.listAll();
        // console.log(gifts);
        res.render('gift/gift', {
            gifts,
        });
    })

    .post('/', async (req, res, next) => {
        const gifts = await GiftRecord.listAll();
        const data = {
            name: escapeHtml(req.body.name),
            count: Number(escapeHtml(req.body.count)),
        };
  

        try {
            const gift =new GiftRecord(data);
            gift.save()
            return res.redirect('gifts');
            
        } catch(error) {
            console.log(error);
            return res.render('gift/gift', {
                gifts,
                error: error
            });
        }
    })

module.exports = {
    giftRouter
}