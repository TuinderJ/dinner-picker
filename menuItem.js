import React from 'react';

function Menu() {
  return (
    <div className="menu">
      <div className="recipeLog">
        <div className="smallImage">
          <img src="client/public/images/dinner-image.png" alt="" />
        </div>
        <div className="recipeSmall"> </div>
        <div className="buttons">
          <button className="editButton" type="button">
            Veto
          </button>
          <button className="editButton">Delete</button>
        </div>
      </div>
    </div>
  );
}

export default Menu;