import { gql } from '@apollo/client';

export const QUERY_RECIPES = gql`
  query recipes {
    recipes {
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

export const QUERY_RECIPE = gql`
  query recipe($recipeId: ID!) {
    recipe(recipeId: $recipeId) {
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

export const QUERY_MENU = gql`
  query menu {
    menu {
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
