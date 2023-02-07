import React from 'react';

const Recipe = () => {
  return (
    <div className="recipeInfo">
      <div className="recipeDisplay">
        <div className="leftDiv">
          <div className="imageDiv">
            <img src="client/public/images/dinner-image.png" alt="" className="recipePic" />
          </div>

          <div className="ingredientsDiv">
            <h2>Ingredients:</h2>
            <div className="ingredients">
              {/* ingredients go here */}
            </div>
          </div>
        </div>

        <div className="middleDiv">
          <h2>Instructions:</h2>
          <div className="instructions">
            {/* instructions go here */}
          </div>
        </div>

        {/* <div class="botDiv">
          <h2>Additional Info Here:</h2>
        </div> */}
      </div>
    </div>
  );
};

export default Recipe;
