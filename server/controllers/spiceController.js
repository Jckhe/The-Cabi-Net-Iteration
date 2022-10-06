const db = require('../connectPg.js');

const spiceController = {};

spiceController.getSpices = (req, res, next) => {
    console.log('inside getSpices');
    console.log('params', req.params);
    const { user } = req.params;
    const params = [user];
    let getQuery = 'SELECT * FROM spiceTable WHERE assocUser = $1';
    db.query(getQuery, params)
        .then((spices) => {
            res.locals.spices = spices.rows;
            return next();
        })
        .catch((err) => { return next(err) })
}

spiceController.createSpice = (req, res, next) => {
    // req.body = req.body;
    // console.log('req', req);
    console.log('req.body', req.body);
    console.log('inside createSpice');
    const { user } = req.params;
    const { name, remaining, containersize } = req.body;
    const params = [name, remaining, containersize, user];
    const addQuery = 'INSERT INTO spiceTable(name, remaining, containersize, assocUser) VALUES ($1, $2, $3, $4) RETURNING *';
    db.query(addQuery, params)
        .then((spice) => {
            res.locals.newSpice = spice.rows[0];
            console.log(res.locals.newSpice);
            return next()
        })
        .catch((err) => {return next(err)})
}

spiceController.updateSpice = (req, res, next) => {
    console.log('inside updateSpice');
    // console.log('req', req)
    // console.log('rew body', req.body);
    const { id, remaining } = req.body;
    const params = [remaining, id];
    const updateQuery = 'UPDATE spiceTable SET remaining = $1 WHERE id = $2';
    db.query(updateQuery, params)
        .then(() => {return next()})
        .catch((err) => {return next(err)})
}

spiceController.deleteSpice = (req, res, next) => {
    console.log('inside deleteSpice');
    console.log(req.body)
    const { id } = req.body;
    const params = [id]
    const deleteQuery = 'DELETE FROM spiceTable WHERE id = $1';
    db.query(deleteQuery, params)
        .then(() => {return next()})
        .catch((err) => {return next(err)})
}

module.exports = spiceController;