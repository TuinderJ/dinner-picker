import { useEffect, useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_MENU } from '../../utils/queries';
import { MAKE_MENU, MAKE_MENU_FAVORITES_ONLY, MAKE_MENU_FAVORITES_WEIGHTED, CLEAR_MENU, VETO_MENU_ITEM, REMOVE_MENU_ITEM } from '../../utils/mutations';

export default function Menu({ setActivePage }) {
  const { loading, data } = useQuery(QUERY_MENU);

  const [makeMenu, { error: allRandomMenuError }] = useMutation(MAKE_MENU, { refetchQueries: [{ query: QUERY_MENU }] });
  const [makeMenuFavoritesOnly, { error: favoritesOnlyMenuError }] = useMutation(MAKE_MENU_FAVORITES_ONLY, { refetchQueries: [{ query: QUERY_MENU }] });
  const [makeMenuFavoriteWeighted, { error: favoriteWeightedMenuError }] = useMutation(MAKE_MENU_FAVORITES_WEIGHTED, { refetchQueries: [{ query: QUERY_MENU }] });
  const [clearMenu, { error: clearMenuError }] = useMutation(CLEAR_MENU, { refetchQueries: [{ query: QUERY_MENU }] });
  const [vetoMenuItem, { error: vetoMenuItemError }] = useMutation(VETO_MENU_ITEM, { refetchQueries: [{ query: QUERY_MENU }] });
  const [removeMenuItem, { error: removeMenuItemError }] = useMutation(REMOVE_MENU_ITEM, { refetchQueries: [{ query: QUERY_MENU }] });

  const [formState, setFormState] = useState({ numberOfMenuItems: '', menuType: 'ALL_RANDOM' });

  useEffect(() => setActivePage('Menu'), []);

  const handleFormSubmit = async e => {
    e.preventDefault();
    switch (formState.menuType) {
      case 'ALL_RANDOM':
        await makeMenu({ variables: { numberOfMenuItems: Number(formState.numberOfMenuItems) } });
        break;
      case 'FAVORITES_ONLY':
        await makeMenuFavoritesOnly({ variables: { numberOfMenuItems: Number(formState.numberOfMenuItems) } });
        break;
      case 'FAVORITE_WEIGHTED':
        await makeMenuFavoriteWeighted({ variables: { numberOfMenuItems: Number(formState.numberOfMenuItems) } });
        break;
      default:
    }
    window.location.reload();
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleClearMenu = async e => await clearMenu({ variables: { numberOfMenuItems: formState.numberOfMenuItems } });
  const handleVeto = async recipeId => await vetoMenuItem({ variables: { recipeId } });
  const handleRemove = async recipeId => await removeMenuItem({ variables: { recipeId } });

  return (
    <>
      {loading ? (
        <div>Loading</div>
      ) : (
        <div>
          {data?.menu[0] ? (
            <>
              {data.menu.map(recipe => (
                <div key={recipe._id} className='menuDisplay'>
                  <div className='card'>
                    <div className='recipeName'>
                      <p className='title'>{recipe.name}</p>
                      <button onClick={() => handleVeto(recipe._id)}>Veto</button>
                      <button onClick={() => handleRemove(recipe._id)}>Remove</button>
                    </div>
                  </div>
                </div>
              ))}
              <button onClick={handleClearMenu}>Clear Menu</button>
            </>
          ) : (
            <form onSubmit={handleFormSubmit}>
              <input onChange={handleChange} type='number' name='numberOfMenuItems' />
              <select onChange={handleChange}>
                <option value='ALL_RANDOM'>All Random</option>
                <option value='FAVORITES_ONLY'>Favorites Only</option>
                <option value='FAVORITE_WEIGHTED'>Favorite Weighted</option>
              </select>
              <button type='submit'>Make Menu</button>
            </form>
          )}
        </div>
      )}
    </>
  );
}
