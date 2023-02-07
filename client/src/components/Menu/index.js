import { useEffect, useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_MENU } from '../../utils/queries';
import { MAKE_MENU, MAKE_MENU_FAVORITES_ONLY, MAKE_MENU_FAVORITES_WEIGHTED, CLEAR_MENU } from '../../utils/mutations';
import MenuItem from '../MenuItem';
import {MenuDiv} from './style';

export default function Menu({ setActivePage }) {
  const { loading, data } = useQuery(QUERY_MENU);

  const [makeMenu, { error: allRandomMenuError }] = useMutation(MAKE_MENU, { refetchQueries: [{ query: QUERY_MENU }] });
  const [makeMenuFavoritesOnly, { error: favoritesOnlyMenuError }] = useMutation(MAKE_MENU_FAVORITES_ONLY, { refetchQueries: [{ query: QUERY_MENU }] });
  const [makeMenuFavoriteWeighted, { error: favoriteWeightedMenuError }] = useMutation(MAKE_MENU_FAVORITES_WEIGHTED, { refetchQueries: [{ query: QUERY_MENU }] });
  const [clearMenu, { error: clearMenuError }] = useMutation(CLEAR_MENU, { refetchQueries: [{ query: QUERY_MENU }] });

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
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleClearMenu = async e => await clearMenu({ variables: { numberOfMenuItems: formState.numberOfMenuItems } });

  return (
    
    <>
      {loading ? (
        <div>Loading</div>
      ) : (
        <div>
          {data?.menu[0] ? (
            <>
              <MenuDiv>
                {data.menu.map(recipe => (
                  <MenuItem recipe={recipe} />
                ))}
                <button onClick={handleClearMenu}>Clear Menu</button>
              </MenuDiv>
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
