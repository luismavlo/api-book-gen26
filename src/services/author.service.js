const db = require('./../database/models/index.js');

class AuthorService {
  async findAll() {
    return await db.author.findAll({
      where: {
        status: true,
      },
    });
  }

  async create(data) {
    return await db.author.create(data);
  }

  async findOne(id) {
    return await db.author.findOne({
      where: {
        id,
        status: true,
      },
    });
  }

  async update(author, data) {
    return await author.update(data);
  }

  async delete(author) {
    return await author.update({ status: false });
  }
}

module.exports = AuthorService;
