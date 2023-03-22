const { AuthenticationError } = require('apollo-server-express');
const { FragmentsOnCompositeTypesRule } = require('graphql');
const { User, Family, Recipe } = require('../models');
const { signToken } = require('../utils/auth');
const MENU_TYPES = require('../utils/menuTypes');

const resolvers = {
  Query: {
    recipes: async (parent, args, context) => {
      if (!context.user) throw new AuthenticationError('Not logged in');
      const user = await User.findById(context.user._id);
      const family = await Family.findById(user.familyId).populate('recipes').populate('recipes');
      return family?.recipes || [];
    },
    recipe: async (parent, { recipeId }, context) => {
      return Recipe.findById(recipeId);
    },
    menu: async (parent, args, context) => {
      if (!context.user) throw new AuthenticationError('Not logged in');
      const user = await User.findById(context.user._id);
      const family = await Family.findById(user.familyId).populate('recipes');
      return family.getMenu();
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const family = await Family.create({
        name: user.lastName,
        members: [user._id],
      });

      user.familyId = family._id;

      await user.save();
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
      const family = await Family.findById(user.familyId).populate('recipes');

      // pushing new recipe from args to display on user
      const newRecipe = {
        ...args,
        createdBy: user._id,
      };

      const recipeData = await Recipe.create(newRecipe);
      family.recipes.push(recipeData._id);

      await family.save();

      return family.recipes[family.recipes.length - 1];
    },
    // TODO: Josh
    addRecipeFromUrl: async (parent, args, context) => {
      if (!context.user) throw new AuthenticationError('Not logged in');
      const user = await User.findById(context.user._id);
      const family = await Family.findById(user.familyId).populate('recipes');
    },

    updateRecipe: async (parent, args, context) => {
      if (!context.user) throw new AuthenticationError('Not logged in');
      const user = await User.findById(context.user._id);
      const recipe = await Recipe.findById(args.recipeId);

      if (user._id.toString() !== recipe.createdBy.toString()) throw new Error('This recipe does not belong to you.');

      recipe.name = args.name;
      recipe.category = args.category;
      recipe.cookTime = args.cookTime;
      recipe.description = args.description;
      recipe.images = args.images;
      recipe.ingredients = args.ingredients;
      recipe.instructions = args.instructions;

      await recipe.save();

      return recipe;
    },
    favoriteRecipe: async (parent, { recipeId }, context) => {
      if (!context.user) throw new AuthenticationError('Not logged in');
      const recipe = await Recipe.findById(recipeId);

      recipe.favorite = !recipe.favorite;

      await recipe.save();
      return recipe;
    },
    saveRecipe: async (parent, { recipeId }, context) => {
      if (!context.user) throw new AuthenticationError('Not logged in');
      const user = await User.findById(context.user._id);
      const family = await Family.findById(user.familyId).populate('recipes');
      const recipe = await Recipe.findById(recipeId);

      const recipeCopy = {};
      recipeCopy.name = recipe.name;
      recipeCopy.category = recipe.category;
      recipeCopy.cookTime = recipe.cookTime;
      recipeCopy.createdBy = user._id;
      recipeCopy.description = recipe.description;
      recipeCopy.images = recipe.images;
      recipeCopy.ingredients = recipe.ingredients;
      recipeCopy.instructions = recipe.instructions;

      const newRecipe = await Recipe.create(recipeCopy);
      family.recipes.push(newRecipe._id);

      newRecipe.save();
      family.save();
      return newRecipe;
    },
    deleteRecipe: async (parent, { recipeId }, context) => {
      if (!context.user) throw new AuthenticationError('Not logged in');
      const user = await User.findById(context.user._id);
      const family = await Family.findById(user.familyId).populate('recipes');

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
      const family = await Family.findById(user.familyId).populate('recipes');

      if (family.recipes.length === 0) throw new Error('No recipes to make a menu');

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
      const family = await Family.findById(user.familyId).populate('recipes');

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
      const family = await Family.findById(user.familyId).populate('recipes');

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
    addMenuItem: async (parent, args, context) => {
      if (!context.user) throw new AuthenticationError('Not logged in');
      const user = await User.findById(context.user._id);
      const family = await Family.findById(user.familyId).populate('recipes');

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

      if (family.menu.length + 1 <= recipes.length) {
        // filter out current menu items to ensure no duplicates
        recipes = recipes.filter(recipe => !family.menu.includes(recipe._id));
      }

      const randomNumber = Math.floor(Math.random() * recipes.length);
      const newRecipeId = recipes[randomNumber]._id;
      family.menu.push(newRecipeId);

      await family.save();
      return family.getMenu();
    },
    clearMenu: async (parent, { numberOfMenuItems }, context) => {
      if (!context.user) throw new AuthenticationError('Not logged in');
      const user = await User.findById(context.user._id);
      const family = await Family.findById(user.familyId).populate('recipes');

      family.menu = [];
      await family.save();
      return family.getMenu();
    },
    vetoMenuItem: async (parent, { recipeId }, context) => {
      if (!context.user) throw new AuthenticationError('Not logged in');
      const user = await User.findById(context.user._id);
      const family = await Family.findById(user.familyId).populate('recipes');

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
      const family = await Family.findById(user.familyId).populate('recipes');

      for (let i = 0; i < family.menu.length; i++) {
        if (family.menu[i].toString() === recipeId) family.menu.splice(i, 1);
      }
      await family.save();

      return family.getMenu();
    },
  },
};

module.exports = resolvers;
