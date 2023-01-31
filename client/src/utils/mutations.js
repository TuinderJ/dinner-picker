import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser($firstName: String!, $lastName: String!, $email: String!, $password: String!) {
    addUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
      token
      user {
        _id
        firstName
        lastName
        email
      }
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser($firstName: String, $lastName: String, $email: String!, $password: String) {
    updateuser(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
      _id
      firstName
      lastName
      email
    }
  }
`;

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        firstName
        lastName
        email
      }
    }
  }
`;

export const ADD_RECIPE = gql`
  mutation addRecipe(
    $category: String
    $cookTime: String
    $created: String
    $customerUuid: String
    $description: String
    $favorite: Boolean
    $images: [String]
    $ingredients: [String]
    $instructions: Instructions
    $name: String!
    $newImages: NewImages
    $newOriginalImages: NewOriginalImages
    $originalDescription: String
    $originalIngredients: [String]
    $originalInstructions: OriginalInstructions
    $originalName: String
    $originalTotalTime: String
    $originalYield: String
    $prepTime: String
    $totalTime: String
    $updated: String
    $url: String
    $uuid: String
    $yield: String
  ) {
    addRecipe(
      category: $category
      cookTime: $cookTime
      created: $created
      customerUuid: $customerUuid
      description: $description
      favorite: $favorite
      images: $images
      ingredients: $ingredients
      instructions: $instructions
      name: $name
      newImages: $newImages
      newOriginalImages: $newOriginalImages
      originalDescription: $originalDescription
      originalIngredients: $originalIngredients
      originalInstructions: $originalInstructions
      originalName: $originalName
      originalTotalTime: $originalTotalTime
      originalYield: $originalYield
      prepTime: $prepTime
      totalTime: $totalTime
      updated: $updated
      url: $url
      uuid: $uuid
      yield: $yield
    ) {
      _id
      category
      cookTime
      created
      createdBy
      customerUuid
      description
      favorite
      images
      ingredients
      instructions {
        steps
      }
      lastUsed
      name
      newImages {
        hUnits
        height
        length
        mime
        type
        url
        wUnits
        width
      }
      newOriginalImages {
        hUnits
        height
        length
        mime
        type
        url
        wUnits
        width
      }
      originalDescription
      originalIngredients
      originalInstructions {
        steps
      }
      originalName
      originalTotalTime
      originalYield
      prepTime
      totalTime
      updated
      url
      uuid
      yield
    }
  }
`;

export const ADD_RECIPE_FROM_URL = gql`
  mutation addRecipeFromUrl($url: String!) {
    addRecipeFromUrl(url: $url) {
      _id
      category
      cookTime
      created
      createdBy
      customerUuid
      description
      favorite
      images
      ingredients
      instructions {
        steps
      }
      lastUsed
      name
      newImages {
        hUnits
        height
        length
        mime
        type
        url
        wUnits
        width
      }
      newOriginalImages {
        hUnits
        height
        length
        mime
        type
        url
        wUnits
        width
      }
      originalDescription
      originalIngredients
      originalInstructions {
        steps
      }
      originalName
      originalTotalTime
      originalYield
      prepTime
      totalTime
      updated
      url
      uuid
      yield
    }
  }
`;

export const UPDATE_RECIPE = gql`
  mutation updateRecipe(
    $recipeId: ID!
    $category: String
    $cookTime: String
    $created: String
    $customerUuid: String
    $description: String
    $favorite: Boolean
    $images: [String]
    $ingredients: [String]
    $instructions: Instructions
    $name: String!
    $newImages: NewImages
    $newOriginalImages: NewOriginalImages
    $originalDescription: String
    $originalIngredients: [String]
    $originalInstructions: OriginalInstructions
    $originalName: String
    $originalTotalTime: String
    $originalYield: String
    $prepTime: String
    $totalTime: String
    $updated: String
    $url: String
    $uuid: String
    $yield: String
  ) {
    addRecipe(
      recipeId: $recipeId
      category: $category
      cookTime: $cookTime
      created: $created
      customerUuid: $customerUuid
      description: $description
      favorite: $favorite
      images: $images
      ingredients: $ingredients
      instructions: $instructions
      name: $name
      newImages: $newImages
      newOriginalImages: $newOriginalImages
      originalDescription: $originalDescription
      originalIngredients: $originalIngredients
      originalInstructions: $originalInstructions
      originalName: $originalName
      originalTotalTime: $originalTotalTime
      originalYield: $originalYield
      prepTime: $prepTime
      totalTime: $totalTime
      updated: $updated
      url: $url
      uuid: $uuid
      yield: $yield
    ) {
      _id
      category
      cookTime
      created
      createdBy
      customerUuid
      description
      favorite
      images
      ingredients
      instructions {
        steps
      }
      lastUsed
      name
      newImages {
        hUnits
        height
        length
        mime
        type
        url
        wUnits
        width
      }
      newOriginalImages {
        hUnits
        height
        length
        mime
        type
        url
        wUnits
        width
      }
      originalDescription
      originalIngredients
      originalInstructions {
        steps
      }
      originalName
      originalTotalTime
      originalYield
      prepTime
      totalTime
      updated
      url
      uuid
      yield
    }
  }
`;

export const DELETE_RECIPE = gql`
  mutation deleteRecipe($recipeId: ID!) {
    deleteRecipe(recipeId: $recipeId) {
      _id
      name
    }
  }
`;

export const MAKE_MENU = gql`
  mutation makeMenu($numberOfMenuItems: Int!) {
    makeMenu(numberOfMenuItems: $numberOfMenuItems) {
      _id
      category
      cookTime
      description
      favorite
      images
      name
    }
  }
`;

export const MAKE_MENU_FAVORITES_ONLY = gql`
  mutation makeMenuFavoritesOnly($numberOfMenuItems: Int!) {
    makeMenuFavoritesOnly(numberOfMenuItems: $numberOfMenuItems) {
      _id
      category
      cookTime
      description
      favorite
      images
      name
    }
  }
`;

export const MAKE_MENU_FAVORITES_WEIGHTED = gql`
  mutation makeMenuFavoriteWeighted($numberOfMenuItems: Int!) {
    makeMenu(numberOfMenuItems: $numberOfMenuItems) {
      _id
      category
      cookTime
      description
      favorite
      images
      name
    }
  }
`;

export const VETO_MENU_ITEM = gql`
  mutation vetoMenuItem($recipeId: ID!) {
    vetoMenuItem(recipeId: $recipeId) {
      _id
      category
      cookTime
      description
      favorite
      images
      name
    }
  }
`;

export const REMOVE_MENU_ITEM = gql`
  mutation removeMenuItem($recipeId: ID!) {
    removeMenuItem(recipeId: $recipeId) {
      _id
      category
      cookTime
      description
      favorite
      images
      name
    }
  }
`;
