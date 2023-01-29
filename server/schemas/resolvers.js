const { AuthenticationError } = require('apollo-server-express');
const { User, Family } = require('../models');
const { signToken } = require('../utils/auth');
const MENU_TYPES = require('../utils/menuTypes');

const resolvers = {
  Query: {
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
    menu: async (parent, args, context) => {
      if (!context.user) throw new AuthenticationError('Not logged in');
      const user = await User.findById(context.user._id);
      const family = await Family.findById(user.familyId);
      return family.getMenu();
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    updateUser: async (parent, args, context) => {
      if (!context.user) throw new AuthenticationError('Not logged in');
      return await User.findByIdAndUpdate(context.user._id, args, { new: true });
    },
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
    // TODO: Josh
    addRecipeFromUrl: async (parent, args, context) => {},
    // TODO: Valeryo find a recipe (from args.recipeId) and update it with args
    updateRecipe: async (parent, args, context) => {
      if (!context.user) throw new AuthenticationError('Not logged in');
      const user = await User.findById(context.user._id);

      // add code here
      const recipe = '';
      return recipe;
    },
    deleteRecipe: async (parent, { recipeId }, context) => {
      if (!context.user) throw new AuthenticationError('Not logged in');
      const user = await User.findById(context.user._id);
      const family = await Family.findById(user.familyId);

      for (let i = 0; i < family.recipes.length; i++) {
        if (family.recipes[i]._id.toString() === recipeId) {
          family.recipes.splice(i, 1);
          await family.save();
          return family.recipes;
        }
      }

      throw new Error('Recipe not found');
    },
    makeMenu: async (parent, { numberOfMenuItems }, context) => {
      if (!context.user) throw new AuthenticationError('Not logged in');
      const user = await User.findById(context.user._id);
      const family = await Family.findById(user.familyId);

      const recipes = [...family.recipes];
      family.makeMenu({ recipes, numberOfMenuItems, menuType: MENU_TYPES.NORMAL });
      return family.getMenu();
    },
    makeMenuFavoritesOnly: async (parent, { numberOfMenuItems }, context) => {
      if (!context.user) throw new AuthenticationError('Not logged in');
      const user = await User.findById(context.user._id);
      const family = await Family.findById(user.familyId);

      const recipes = family.recipes.filter(recipe => recipe.favorite);
      if (!recipes.length) throw new Error('No recipes are favorited');

      family.makeMenu({ recipes, numberOfMenuItems, menuType: MENU_TYPES.FAVORITE_ONLY });
      return family.getMenu();
    },
    makeMenuFavoriteWeighted: async (parent, { numberOfMenuItems }, context) => {
      if (!context.user) throw new AuthenticationError('Not logged in');
      const user = await User.findById(context.user._id);
      const family = await Family.findById(user.familyId);

      // make recipes array and double favorited items
      let recipes = [];
      family.recipes.map(recipe => {
        recipe.favorite ? (recipes = [...recipes, recipe, recipe]) : (recipes = [...recipes, recipe]);
      });

      if (!recipes.length) throw new Error('No recipes are favorited');

      family.makeMenu({ recipes, numberOfMenuItems, menuType: MENU_TYPES.FAVORITE_WEIGHTED });
      return family.getMenu();
    },
    // TODO: Josh
    vetoMenuItem: async (parent, { recipeId }, context) => {},
    removeMenuItem: async (parent, { recipeId }, context) => {
      if (!context.user) throw new AuthenticationError('Not logged in');
      const user = await User.findById(context.user._id);
      const family = await Family.findById(user.familyId);

      for (let i = 0; i < family.menu.length; i++) {
        if (family.menu[i].toString() === recipeId) family.menu.splice(i, 1);
      }
      await family.save();

      return family.getMenu();
    },
  },
};

module.exports = resolvers;
