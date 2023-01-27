const { writeFile } = require('node:fs/promises');
const db = require('./connection');
const { User } = require('../models');
const recipes = require('./seeds/recipes.json');

db.once('open', async () => {
  try {
    await User.deleteMany();

    const user = await User.create({
      firstName: 'Test',
      lastName: 'Dummy',
      email: 'test@test.com',
      password: 'password12345',
      recipes,
    });

    console.log('users seeded');

    process.exit();
  } catch (error) {
    await writeFile('./log.txt', JSON.stringify(error, null, 2));
    console.log('Error logged');
  }
});
