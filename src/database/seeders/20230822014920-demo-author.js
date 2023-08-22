'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      'authors',
      [
        {
          name: 'J. K. Rowling',
          surname: 'Rowling',
          birthdate: '1965-07-31',
          biography:
            'Joanne Rowling, better known by her pen name J. K. Rowling, is a British author, philanthropist, film producer, television producer, and screenwriter.',
          photo:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/J._K._Rowling_2010.jpg/220px-J._K._Rowling_2010.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'J. R. R.',
          surname: 'Tolkien',
          birthdate: '1892-01-03',
          biography:
            'John Ronald Reuel Tolkien was an English writer, poet, philologist, and academic.',
          photo:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Tolkien_1916.jpg/220px-Tolkien_1916.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'George R. R.',
          surname: 'Martin',
          birthdate: '1948-09-20',
          biography:
            'George Raymond Richard Martin, also known as GRRM, is an American novelist and short story writer, screenwriter, and television producer.',
          photo:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/George_R._R._Martin_2019.jpg/220px-George_R._R._Martin_2019.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Stephen',
          surname: 'King',
          birthdate: '1947-09-21',
          biography:
            'Stephen Edwin King is an American author of horror, supernatural fiction, suspense, crime, science-fiction, and fantasy novels.',
          photo:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Stephen_King%2C_Comicon.jpg/220px-Stephen_King%2C_Comicon.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Jorge',
          surname: 'Luis Borges',
          birthdate: '1899-08-24',
          biography:
            'Jorge Francisco Isidoro Luis Borges Acevedo was an Argentine short-story writer, essayist, poet and translator, and a key figure in Spanish-language and universal literature.',
          photo:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Jorge_Luis_Borges%2C_1976.jpg/220px-Jorge_Luis_Borges%2C_1976.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('authors', null, {});
  },
};
