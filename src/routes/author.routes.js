const express = require('express');

//controllers
const authorController = require('../controllers/author.controller.js');

const router = express.Router();

router.route('/').get(authorController.findAll).post(authorController.create);

router
  .route('/:id')
  .get(authorController.findOne)
  .patch(authorController.update)
  .delete(authorController.delete);

module.exports = router;
