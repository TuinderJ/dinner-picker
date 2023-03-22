import { useEffect, useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';

import { QUERY_MENU } from '../../utils/queries';
import { MAKE_MENU, MAKE_MENU_FAVORITES_ONLY, MAKE_MENU_FAVORITES_WEIGHTED, CLEAR_MENU, ADD_MENU_ITEM } from '../../utils/mutations';
import MenuItem from '../MenuItem';

import { MenuDiv, ClearMenuButton, SForm, SInput, SSelect, SOption, SBtn, MenuBody, MenuStyleSquare, SWrapper, SLabel, SFormWrapper } from './style';

export default function Menu({ setActivePage }) {
  const { loading, data } = useQuery(QUERY_MENU);

  const [makeMenu, { error: allRandomMenuError }] = useMutation(MAKE_MENU, { refetchQueries: [{ query: QUERY_MENU }] });
  const [makeMenuFavoritesOnly, { error: favoritesOnlyMenuError }] = useMutation(MAKE_MENU_FAVORITES_ONLY, { refetchQueries: [{ query: QUERY_MENU }] });
  const [makeMenuFavoriteWeighted, { error: favoriteWeightedMenuError }] = useMutation(MAKE_MENU_FAVORITES_WEIGHTED, { refetchQueries: [{ query: QUERY_MENU }] });
  const [clearMenu, { error: clearMenuError }] = useMutation(CLEAR_MENU, { refetchQueries: [{ query: QUERY_MENU }] });
  const [addMenuItem, { error: addMenuItemError }] = useMutation(ADD_MENU_ITEM, { refetchQueries: [{ query: QUERY_MENU }] });

  const [formState, setFormState] = useState({ numberOfMenuItems: '', menuType: 'ALL_RANDOM' });

  useEffect(() => setActivePage('Menu'), []);

  const handleFormSubmit = async e => {
    e.preventDefault();
    try {
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
    } catch (err) {
      alert(err);
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

  const handleAddMenuItem = async e => await addMenuItem({ variables: { numberOfMenuItems: formState.numberOfMenuItems } });

  return (
    <>
      {loading ? (
        <div>Loading</div>
      ) : (
        <div>
          {data?.menu[0] ? (
            <>
              <MenuDiv>
                {data.menu.map((recipe, index) => (
                  <MenuItem key={recipe._id} recipe={recipe} />
                ))}
                <ClearMenuButton onClick={handleClearMenu}>Clear Menu</ClearMenuButton>
                <ClearMenuButton onClick={handleAddMenuItem}>Add Another Recipe</ClearMenuButton>
              </MenuDiv>
            </>
          ) : (
            <MenuBody>
              <MenuStyleSquare>
                <SFormWrapper>
                  <SForm onSubmit={handleFormSubmit}>
                    <SWrapper>
                      <SLabel htmlFor='numberOfMenuItems'>How many recipes do you want?</SLabel>
                      <SInput onChange={handleChange} type='number' name='numberOfMenuItems'></SInput>
                    </SWrapper>
                    <SSelect onChange={handleChange}>
                      <SOption value='ALL_RANDOM'>All Random</SOption>
                      <SOption value='FAVORITES_ONLY'>Favorites Only</SOption>
                      <SOption value='FAVORITE_WEIGHTED'>Favorite Weighted</SOption>
                    </SSelect>
                    <SBtn type='submit'>Make Menu</SBtn>
                  </SForm>
                </SFormWrapper>
              </MenuStyleSquare>
            </MenuBody>
          )}
        </div>
      )}
    </>
  );
}
