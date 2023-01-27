import { gql } from '@apollo/client';

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
