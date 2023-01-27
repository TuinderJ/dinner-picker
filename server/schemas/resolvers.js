const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    // Done
    recipes: async (parent, args, context) => {
      if (!context.user) throw new AuthenticationError('Not logged in');

      const user = await User.findById(context.user._id);
      const recipes = [...user.recipes];

      return recipes;
    },
    // TODO: Valeryo find a recipe (from args.recipeId)
    recipe: async (parent, { recipeId }, context) => {
      if (!context.user) throw new AuthenticationError('Not logged in');
      const user = await User.findById(context.user._id);

      // add code here
      const recipe = '';
      return recipe;
    },
    // TODO: Josh find a user's menu
    menu: async (parent, args, context) => {
      if (!context.user) throw new AuthenticationError('Not logged in');
      const user = await User.findById(context.user._id);

      // add code here
      const menu = '';
      return menu;
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
    // TODO: Josh remove a recipe (from args.recipeId) from user.recipes
    deleteRecipe: async (parent, args, context) => {
      if (!context.user) throw new AuthenticationError('Not logged in');
      const user = await User.findById(context.user._id);

      // add code here
      return user;
    },
    // TODO: Josh pick a number of random recipes (from args.numberOfMenuItems) and add [recipeId(s)] to user.menu
    makeMenu: async (parent, args, context) => {
      if (!context.user) throw new AuthenticationError('Not logged in');
      const user = await User.findById(context.user._id);

      // add code here
      const menu = '';
      return menu;
    },
    // TODO: Josh remove a recipeId from user.manu
    removeMenuItem: async (parent, args, context) => {
      if (!context.user) throw new AuthenticationError('Not logged in');
      const user = await User.findById(context.user._id);

      // add code here
      const menu = '';
      return menu;
    },
  },
};

module.exports = resolvers;
