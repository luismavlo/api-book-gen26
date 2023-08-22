'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      'books',
      [
        {
          title: "Harry Potter and the Philosopher's Stone",
          synopsis:
            "Harry Potter has been living an ordinary life, constantly abused by his surly and cold aunt and uncle, Vernon and Petunia Dursley and bullied by their spoiled son Dudley since the death of his parents ten years prior. His life changes on the day of his eleventh birthday when he receives a letter of acceptance into a Hogwarts School of Witchcraft and Wizardry, delivered by a half-giant named Rubeus Hagrid after previous letters had been destroyed by Vernon and Petunia. Hagrid reveals to Harry that he is a wizard and has been invited to attend the school, and offers to guide him through the wizarding world. After buying his school supplies from the hidden London street, Diagon Alley, Harry boards the train to Hogwarts via the concealed Platform 9¾ in King's Cross Station.",
          number_pages: 223,
          editorial: 'Bloomsbury',
          publication_date: '1997-06-26',
          score: 4.45,
          isbn: '9780747532743',
          author_id: 2,
          status: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Harry Potter and the Chamber of Secrets',
          synopsis:
            "Harry, a young wizard, and his friends Hermione and Ron are back at Hogwarts School of Witchcraft and Wizardry for their second year. Voldemort, the evil wizard who killed Harry's parents, is still a threat to him. When the school's house-elf, Dobby, warns Harry not to return to Hogwarts, Harry explains why he must return to Hogwarts. Dobby causes havoc in the kitchen, getting Harry into trouble with his uncle Vernon and his aunt Petunia, forcing him to spend the rest of the summer cleaning the house. The Weasleys arrive with Harry's best friend Ron, whose father, Arthur Weasley, is a member of the Order of the Phoenix, a group of wizards who oppose Voldemort. Harry and Ron learn that Ginny Weasley, Ron's younger sister, was kidnapped by the Chamber of Secrets, a secret chamber created by one of the founders of Hogwarts containing a terrible monster.",
          number_pages: 251,
          editorial: 'Bloomsbury',
          publication_date: '1998-07-02',
          score: 4.38,
          isbn: '9780747538493',
          author_id: 2,
          status: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Harry Potter and the Prisoner of Azkaban',
          synopsis:
            "Harry Potter, a young wizard, is in his third year at Hogwarts School of Witchcraft and Wizardry. With his best friends Ron Weasley and Hermione Granger, Harry learns the truth behind his parents' deaths, as well as what Voldemort's ultimate goal is. The defensive magic he learns from his teachers, including the headmaster Albus Dumbledore, will help him in his fight against Voldemort.",
          number_pages: 317,
          editorial: 'Bloomsbury',
          publication_date: '1999-07-08',
          score: 4.55,
          isbn: '9780747542155',
          author_id: 2,
          status: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('books', null, {});
  },
};
