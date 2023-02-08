import { useMutation } from '@apollo/client';
import { QUERY_MENU } from '../../utils/queries';
import { VETO_MENU_ITEM, REMOVE_MENU_ITEM } from '../../utils/mutations';
import { RecipeLog, SmallImage, RecipeSmall, Buttons, EditButton } from './style';

function MenuItem({ recipe }) {
  const [vetoMenuItem, { error: vetoMenuItemError }] = useMutation(VETO_MENU_ITEM, { refetchQueries: [{ query: QUERY_MENU }] });
  const [removeMenuItem, { error: removeMenuItemError }] = useMutation(REMOVE_MENU_ITEM, { refetchQueries: [{ query: QUERY_MENU }] });

  const handleVeto = async () => await vetoMenuItem({ variables: { recipeId: recipe._id } });
  const handleRemove = async () => await removeMenuItem({ variables: { recipeId: recipe._id } });

  return (
    <RecipeLog>
      <SmallImage src={recipe.images[0]} alt={recipe.name} />
      <RecipeSmall to={`/Recipe/${recipe._id}`}>{recipe.name}</RecipeSmall>
      <Buttons>
        <EditButton onClick={handleVeto}>Veto</EditButton>
        <EditButton onClick={handleRemove}>Delete</EditButton>
      </Buttons>
    </RecipeLog>
  );
}

export default MenuItem;
