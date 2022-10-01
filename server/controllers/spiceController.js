const db = require('../connectPg.js');

const spiceController = {};

spiceController.getSpices = (req, res, next) => {
    console.log('inside getSpices');
    const { user } = req.params;
    let getQuery
    if (req.body.name) {
        getQuery = `SELECT * FROM spiceTable WHERE assocUser = '${user}' AND name = '${req.body.name}'`;
    }
    else {
        getQuery = `SELECT * FROM spiceTable WHERE assocUser = '${user}'`;
    };
    db.query(getQuery)
        .then((spices) => {
            res.locals.spices = spices.rows;
            return next();
        })
        .catch((err) => {next(err)})
}

spiceController.createSpice = (req, res, next) => {
    console.log('inside createSpice');
    const { user } = req.params;
    const { name, remaining, containerSize } = req.body;
    const addQuery = `INSERT INTO spiceTable(name, remaining, containerSize, assocUser) VALUES ('${name}', ${remaining}, '${containerSize}', '${user}')`;
    db.query(addQuery)
        .then(() => {return next()})
        .catch((err) => {return next(err)})
}

spiceController.updateSpice = (req, res, next) => {
    console.log('inside updateSpice');
    const { id, remaining } = req.body;
    const updateQuery = `UPDATE spiceTable SET remaining = ${remaining} WHERE id = ${id}`;
    db.query(updateQuery)
        .then(() => {return next()})
        .catch(err => {return next(err)})
}

spiceController.deleteSpice = (req, res, next) => {
    console.log('inside deleteSpice');
    const { id } = req.body;
    const deleteQuery = `DELETE FROM spiceTable WHERE id = ${id}`;
    db.query(deleteQuery)
        .then(() => {return next()})
        .catch(err => {return next(err)})
}

module.exports = spiceController;