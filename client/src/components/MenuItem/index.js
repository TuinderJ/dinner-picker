import { useMutation } from '@apollo/client';
import { QUERY_MENU } from '../../utils/queries';
import { VETO_MENU_ITEM, REMOVE_MENU_ITEM } from '../../utils/mutations';


function MenuItem({ recipe }) {
  const [vetoMenuItem, { error: vetoMenuItemError }] = useMutation(VETO_MENU_ITEM, { refetchQueries: [{ query: QUERY_MENU }] });
  const [removeMenuItem, { error: removeMenuItemError }] = useMutation(REMOVE_MENU_ITEM, { refetchQueries: [{ query: QUERY_MENU }] });

  const handleVeto = async recipeId => await vetoMenuItem({ variables: { recipeId: recipe._id } });
  const handleRemove = async recipeId => await removeMenuItem({ variables: { recipeId: recipe._id } });

  return (
    <div className='recipeLog'>
      <div className='smallImage'>
        <img src={recipe.images[0]} alt={recipe.name} className='src' />
      </div>
      <div className='recipeSmall'>{recipe.name}</div>
      <div className='buttons'>
        <button className='editButton' onClick={handleVeto}>
          Veto
        </button>
        <button className='editButton' onClick={handleRemove}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default MenuItem;
