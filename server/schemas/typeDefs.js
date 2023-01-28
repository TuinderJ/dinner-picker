const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Family {
    _id: ID
    name: String
    members: [ID]
    recipes: [Recipe]
    menu: [Recipe]
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    familyId: ID
  }

  type Recipe {
    _id: ID
    category: String
    cookTime: String
    created: String
    createdBy: String
    customerUuid: String
    description: String
    favorite: Boolean
    images: [String]
    ingredients: [String]
    instructions: instructions
    lastUsed: Int
    name: String
    newImages: newImages
    newOriginalImages: newOriginalImages
    originalDescription: String
    originalIngredients: [String]
    originalInstructions: originalInstructions
    originalName: String
    originalTotalTime: String
    originalYield: String
    prepTime: String
    totalTime: String
    updated: String
    url: String
    uuid: String
    yield: String
  }

  input Instructions {
    steps: [String]
  }

  type instructions {
    steps: [String]
  }

  input NewImages {
    hUnits: String
    height: Int
    length: Int
    mime: String
    type: String
    url: String
    wUnits: String
    width: Int
  }

  type newImages {
    hUnits: String
    height: Int
    length: Int
    mime: String
    type: String
    url: String
    wUnits: String
    width: Int
  }

  input NewOriginalImages {
    hUnits: String
    height: Int
    length: Int
    mime: String
    type: String
    url: String
    wUnits: String
    width: Int
  }

  type newOriginalImages {
    hUnits: String
    height: Int
    length: Int
    mime: String
    type: String
    url: String
    wUnits: String
    width: Int
  }

  input OriginalInstructions {
    steps: [String]
  }

  type originalInstructions {
    steps: [String]
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    recipes: [Recipe]
    recipe(recipeId: ID!): Recipe
    menu: [Recipe]
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    updateUser(firstName: String, lastName: String, email: String!, password: String): User
    login(email: String!, password: String!): Auth
    addRecipe(
      category: String
      cookTime: String
      created: String
      createdBy: String
      customerUuid: String
      description: String
      favorite: Boolean
      images: [String]
      ingredients: [String]
      instructions: Instructions
      lastUsed: Int
      name: String
      newImages: NewImages
      newOriginalImages: NewOriginalImages
      originalDescription: String
      originalIngredients: [String]
      originalInstructions: OriginalInstructions
      originalName: String
      originalTotalTime: String
      originalYield: String
      prepTime: String
      totalTime: String
      updated: String
      url: String
      uuid: String
      yield: String
    ): Recipe
    updateRecipe(
      recipeId: ID!
      category: String
      cookTime: String
      created: String
      createdBy: String
      customerUuid: String
      description: String
      favorite: Boolean
      images: [String]
      ingredients: [String]
      instructions: Instructions
      lastUsed: Int
      name: String
      newImages: NewImages
      prepTime: String
      totalTime: String
      updated: String
      url: String
      uuid: String
      yield: String
    ): Recipe
    deleteRecipe(recipeId: ID!): [Recipe]
    makeMenu(numberOfMenuItems: Int!): [Recipe]
    removeMenuItem(recipeId: ID!): [Recipe]
  }
`;

module.exports = typeDefs;
