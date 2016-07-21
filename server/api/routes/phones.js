import express from 'express';
import Phone from '../models/phone.js';

let router = express.Router();

module.exports = (app) => {

    var phone = new Phone();

    router.get('/', phone.findAll);

    router.get('/:id', phone.findById);

    router.post('/', phone.create);

    router.put('/:id', phone.update);

    router.delete('/:id', phone.delete);

    app.use('/phones', router);

}
