const Router = require('express');
const { ChildRecord } = require('../records/child.record');
const { GiftRecord } = require('../records/gift.record');
const { escapeHtml } = require('../utils/helpers.js');
const { ValidationError } = require('../utils/errors');


const childRouter = Router();

childRouter
    .get('/', async (req, res) => {
        const children = await ChildRecord.listAll();
        const gifts = await GiftRecord.listAll();
        res.render('children/list', {
            children,
            gifts
        });
    })

    .post('/', async (req, res, next) => {
        const gifts = await GiftRecord.listAll();
        const children = await ChildRecord.listAll();
        const data = {
            name: escapeHtml(req.body.name),
        };
        try {
            const kid = new ChildRecord(data);
            kid.save()
            return res.redirect('child');
            
        } catch(error) {
            console.log(error);
            return res.render('children/list', {
                gifts,
                children,
                error: error
            });
        }
    })

    .patch('/gift/:id', async (req, res) => {
        console.log('oooo')
        const id = req.params.id;
        const gift = req.body.gift_id === '' ? null : await GiftRecord.getOne(req.body.gift_id); ;
        const kid = await ChildRecord.getOne(id);
        
        if (kid === null) {
            throw new ValidationError('Brak dziecka');
        }

        kid.gift_id = gift === null ? null : gift.id
        const child = new ChildRecord(kid)

        child.giveGift()

        console.log(gift);



    });

module.exports = {
    childRouter
}