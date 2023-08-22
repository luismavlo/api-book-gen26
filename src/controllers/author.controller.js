const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const AuthorService = require('../services/author.service.js');

const authorService = new AuthorService();

exports.findAll = catchAsync(async (req, res, next) => {
  const authors = await authorService.findAll();

  res.status(200).json(authors);
});

exports.create = catchAsync(async (req, res, next) => {
  const { name, surname, birthdate, biography, photo } = req.body;

  const author = await authorService.create({
    name,
    surname,
    birthdate,
    biography,
    photo,
  });

  return res.status(201).json(author);
});

exports.findOne = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const author = await authorService.findOne(id);

  if (!author) {
    return next(new AppError('No author found with that ID', 404));
  }

  res.status(200).json(author);
});

exports.update = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const { name, surname } = req.body;

  const author = await authorService.findOne(id);

  if (!author) {
    return next(new AppError('No author found with that ID', 404));
  }

  const authorUpdated = await authorService.update(author, { name, surname });

  return res.status(200).json(authorUpdated);
});

exports.delete = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const author = await authorService.findOne(id);

  if (!author) {
    return next(new AppError('No author found with that ID', 404));
  }

  await authorService.delete(author);

  return res.status(204).json(null);
});
