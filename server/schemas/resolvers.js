const { AuthenticationError } = require('apollo-server-express');
const { FragmentsOnCompositeTypesRule } = require('graphql');
const { User, Family } = require('../models');
const { signToken } = require('../utils/auth');
const MENU_TYPES = require('../utils/menuTypes');

const resolvers = {
  Query: {
    recipes: async (parent, args, context) => {
      if (!context.user) throw new AuthenticationError('Not logged in');
      const user = await User.findById(context.user._id);
      const family = await Family.findById(user.familyId);
      return family?.recipes || [];
    },
    recipe: async (parent, { recipeId }, context) => {
      if (!context.user) throw new AuthenticationError('Not logged in');
      const user = await User.findById(context.user._id);
      const family = await Family.findById(user.familyId);

      //findRecipe
      return family.recipes.find(recipe => recipe._id.toString() === recipeId);
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
      return await User.findByIdAndUpdate(context.user._id, args, {
        new: true,
      });
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

    addRecipe: async (parent, args, context) => {
      if (!context.user) throw new AuthenticationError('Not logged in');
      const user = await User.findById(context.user._id);
      const family = await Family.findById(user.familyId);

      // pushing new recipe from args to display on user
      const newRecipe = {
        ...args,
        createdBy: user._id,
      };

      family.recipes.push(newRecipe);

      await family.save();

      return family.recipes[family.recipes.length - 1];
    },
    // TODO: Josh
    addRecipeFromUrl: async (parent, args, context) => {
      if (!context.user) throw new AuthenticationError('Not logged in');
      const user = await User.findById(context.user._id);
      const family = await Family.findById(user.familyId);
    },

    updateRecipe: async (parent, args, context) => {
      if (!context.user) throw new AuthenticationError('Not logged in');
      const user = await User.findById(context.user._id);
      const family = await Family.findById(user.familyId);

      //update Recipe -new name...
      const recipeIndex = family.recipes.findIndex(recipe => recipe._id.toString() === args.recipeId);

      if (recipeIndex === -1) {
        throw new Error('Recipe not found');
      }

      const newRecipe = {
        ...family.recipes[recipeIndex],
        ...args,
      };

      family.recipes[recipeIndex] = newRecipe;

      await family.save();

      return family.recipes[recipeIndex];
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
      family.makeMenu({
        recipes,
        numberOfMenuItems,
        menuType: MENU_TYPES.NORMAL,
      });
      return family.getMenu();
    },
    makeMenuFavoritesOnly: async (parent, { numberOfMenuItems }, context) => {
      if (!context.user) throw new AuthenticationError('Not logged in');
      const user = await User.findById(context.user._id);
      const family = await Family.findById(user.familyId);

      const recipes = family.recipes.filter(recipe => recipe.favorite);
      if (!recipes.length) throw new Error('No recipes are favorited');

      family.makeMenu({
        recipes,
        numberOfMenuItems,
        menuType: MENU_TYPES.FAVORITE_ONLY,
      });
      return family.getMenu();
    },
    makeMenuFavoriteWeighted: async (parent, { numberOfMenuItems }, context) => {
      if (!context.user) throw new AuthenticationError('Not logged in');
      const user = await User.findById(context.user._id);
      const family = await Family.findById(user.familyId);

      // make recipes array and double favorited items
      let recipes = [];
      family.recipes.forEach(recipe => (recipe.favorite ? (recipes = [...recipes, recipe, recipe]) : (recipes = [...recipes, recipe])));

      if (!recipes.length) throw new Error('No recipes are favorited');

      family.makeMenu({
        recipes,
        numberOfMenuItems,
        menuType: MENU_TYPES.FAVORITE_WEIGHTED,
      });
      return family.getMenu();
    },
    vetoMenuItem: async (parent, { recipeId }, context) => {
      if (!context.user) throw new AuthenticationError('Not logged in');
      const user = await User.findById(context.user._id);
      const family = await Family.findById(user.familyId);

      let recipes = [];
      switch (family.menuType) {
        case MENU_TYPES.NORMAL:
          recipes = [...family.recipes];
          break;
        case MENU_TYPES.FAVORITE_ONLY:
          recipes = family.recipes.filter(recipe => recipe.favorite);
          break;
        case MENU_TYPES.FAVORITE_WEIGHTED:
          family.recipes.forEach(recipe => (recipe.favorite ? (recipes = [...recipes, recipe, recipe]) : (recipes = [...recipes, recipe])));
          break;
        default:
          break;
      }

      if (family.menu.length <= recipes.length) {
        // filter out current menu items to ensure no duplicates
        recipes = recipes.filter(recipe => !family.menu.includes(recipe._id));
      }

      const randomNumber = Math.floor(Math.random() * recipes.length);
      const newRecipeId = recipes[randomNumber]._id;

      for (let i = 0; i < family.menu.length; i++) {
        if (family.menu[i].toString() === recipeId) {
          family.menu[i] = newRecipeId;
          break;
        }
      }

      await family.save();
      return family.getMenu();
    },
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
