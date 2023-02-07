import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

// Components
import Navbar from './components/Navbar';

// Pages
import LandingPage from './components/LandingPage';
import AddRecipe from './components/AddRecipe';
import EditRecipe from './components/EditRecipe';
import AllRecipes from './components/AllRecipes';
import Menu from './components/Menu';
import Login from './components/Login';
import './style.css';
import SingleRecipe from './components/SingleRecipe';

// Setup Apollo Client
const httpLink = createHttpLink({ uri: '/graphql' });
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});
const client = new ApolloClient({ link: authLink.concat(httpLink), cache: new InMemoryCache() });

// Render App
export default function App() {
  const [activePage, setActivePage] = useState('');
  return (
    <ApolloProvider client={client}>
      <Navbar activePage={activePage} />
      <Routes>
        <Route path='/' element={<LandingPage setActivePage={setActivePage} />} />
        <Route path='/AddRecipe' element={<AddRecipe setActivePage={setActivePage} />} />
        <Route path='/EditRecipe/:recipeId' element={<EditRecipe setActivePage={setActivePage} />} />
        <Route path='/AllRecipes' element={<AllRecipes setActivePage={setActivePage} />} />
        <Route path='/Recipe/:recipeId' element={<SingleRecipe setActivePage={setActivePage} />} />
        <Route path='/Menu' element={<Menu setActivePage={setActivePage} />} />
        <Route path='/Login' element={<Login />} />
      </Routes>
    </ApolloProvider>
  );
}
