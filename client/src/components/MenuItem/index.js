import { useMutation } from '@apollo/client';
import { QUERY_MENU } from '../../utils/queries';
import { VETO_MENU_ITEM, REMOVE_MENU_ITEM } from '../../utils/mutations';
import { RecipeLog, SmallImage, RecipeSmall, Buttons, EditButton,  } from './style';


function MenuItem({ recipe }) {
  const [vetoMenuItem, { error: vetoMenuItemError }] = useMutation(VETO_MENU_ITEM, { refetchQueries: [{ query: QUERY_MENU }] });
  const [removeMenuItem, { error: removeMenuItemError }] = useMutation(REMOVE_MENU_ITEM, { refetchQueries: [{ query: QUERY_MENU }] });

  const handleVeto = async recipeId => await vetoMenuItem({ variables: { recipeId: recipe._id } });
  const handleRemove = async recipeId => await removeMenuItem({ variables: { recipeId: recipe._id } });

  return (
    <RecipeLog>
      <SmallImage>
        <img src={recipe.images[0]} alt={recipe.name} className='src' />
      </SmallImage>
      <RecipeSmall>{recipe.name}</RecipeSmall>
      <Buttons>
        <button className='editButton' onClick={handleVeto}>
          Veto
        </button>
        <button className='editButton' onClick={handleRemove}>
          Delete
        </button>
      </Buttons>
    </RecipeLog>
  );
}

export default MenuItem;
