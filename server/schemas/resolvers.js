const { AuthenticationError } = require('apollo-server-express');
const { User, Family } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    // Done
    recipes: async (parent, args, context) => {
      if (!context.user) throw new AuthenticationError('Not logged in');
      const user = await User.findById(context.user._id);
      const family = await Family.findById(user.familyId);
      return family.recipes;
    },
    // TODO: Valeryo find a recipe (from args.recipeId)
    recipe: async (parent, { recipeId }, context) => {
      if (!context.user) throw new AuthenticationError('Not logged in');
      const user = await User.findById(context.user._id);

      // add code here
      const recipe = '';
      return recipe;
    },
    // Done
    menu: async (parent, args, context) => {
      if (!context.user) throw new AuthenticationError('Not logged in');
      const user = await User.findById(context.user._id);
      const family = await Family.findById(user.familyId);
      return family.getMenu();
    },
  },
  Mutation: {
    // Done
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    // Done
    updateUser: async (parent, args, context) => {
      if (!context.user) throw new AuthenticationError('Not logged in');
      return await User.findByIdAndUpdate(context.user._id, args, { new: true });
    },
    // Done
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    // TODO: Valeryo push new recipe (from args) into user.recipes
    addRecipe: async (parent, args, context) => {
      if (!context.user) throw new AuthenticationError('Not logged in');
      const user = await User.findById(context.user._id);

      // add code here
      const recipe = '';
      return recipe;
    },
    // TODO: Valeryo find a recipe (from args.recipeId) and update it with args
    updateRecipe: async (parent, args, context) => {
      if (!context.user) throw new AuthenticationError('Not logged in');
      const user = await User.findById(context.user._id);

      // add code here
      const recipe = '';
      return recipe;
    },
    // Done
    deleteRecipe: async (parent, { recipeId }, context) => {
      if (!context.user) throw new AuthenticationError('Not logged in');
      const user = await User.findById(context.user._id);
      const family = await Family.findById(user.familyId);

      for (let i = 0; i < family.recipes.length; i++) {
        if (family.recipes[i]._id.toString() === recipeId) {
          family.recipes.splice(i, 1);
          family.save();
          return family.recipes;
        }
      }

      throw new Error('Recipe not found.');
    },
    // Done
    makeMenu: async (parent, { numberOfMenuItems }, context) => {
      if (!context.user) throw new AuthenticationError('Not logged in');
      const user = await User.findById(context.user._id);
      const family = await Family.findById(user.familyId);

      const recipes = [...family.recipes];
      family.menu = [];
      for (let i = 0; i < numberOfMenuItems; i++) {
        const randomNumber = Math.floor(Math.random() * recipes.length);
        family.menu.push(recipes[randomNumber]._id);
        recipes.splice(randomNumber, 1);
      }
      family.save();

      return family.getMenu();
    },
    // Done
    removeMenuItem: async (parent, { recipeId }, context) => {
      if (!context.user) throw new AuthenticationError('Not logged in');
      const user = await User.findById(context.user._id);
      const family = await Family.findById(user.familyId);

      for (let i = 0; i < family.menu.length; i++) {
        if (family.menu[i].toString() === recipeId) family.menu.splice(i, 1);
      }
      family.save();

      return family.getMenu();
    },
  },
};

module.exports = resolvers;
