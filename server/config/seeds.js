const db = require('./connection');
const { User } = require('../models');
const recipes = require('./seeds/recipes.json');

db.once('open', async () => {
  await User.deleteMany();

  await User.create({
    firstName: 'Test',
    lastName: 'Dummy',
    email: 'test@test.com',
    password: 'password12345',
    recipes,
  });

  console.log('users seeded');

  process.exit();
});
