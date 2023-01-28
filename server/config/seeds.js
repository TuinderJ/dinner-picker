const db = require('./connection');
const { User, Family } = require('../models');
const recipes = require('./seeds/recipes.json');

db.once('open', async () => {
  await Family.deleteMany();
  const family = await Family.create({
    name: 'Test',
    recipes,
  });

  await User.deleteMany();
  const user = await User.create({
    firstName: 'Test',
    lastName: 'Dummy',
    email: 'test@test.com',
    password: 'password12345',
    familyId: family._id,
  });

  family.members.push(user._id);
  family.save();

  console.log('family and user seeded');

  process.exit();
});
