import mongoose from 'mongoose';

const phoneSchema = new mongoose.Schema({
    name: String,
    lastname: String,
    phone: String
});

let model = mongoose.model('Phone', phoneSchema);

export default class Phone {

    findAll(req, res) {
        model.find({}, (err, phone) => {
            if (err) {
                res.sendStatus(403);
            } else {
                res.json(phone);
            }
        });
    }

    findById(req, res) {
        model.findById(req.params.id, (err, phone) => {
            if (err || !phone) {
                res.sendStatus(403);
            } else {
                res.json(phone);
            }
        });
    }

    create(req, res) {
        model.create({
                data: req.body.data
            },
            (err, phone) => {
                if (err) {
                    res.status(500).send(err.message);
                } else {
                    res.json(phone);
                }
            });
    }

    update(req, res) {
        model.update({
            _id: req.params.id
        }, {
            data: req.body.data
        }, (err, phone) => {
            if (err || !phone) {
                res.status(500).send(err.message);
            } else {
                res.json(phone);
            }
        });
    }

    delete(req, res) {
        model.findByIdAndRemove(req.params.id, (err) => {
            if (err) {
                res.status(500).send(err.message);
            } else {
                res.sendStatus(200);
            }
        })
    }
}
