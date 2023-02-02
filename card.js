import dinnerImg from './images/dinner-image.png';

// src = { dinnerImg }

export default function Card() {

    return(
    <div class="card">
        <div class="recipeName">
            <p class="title">recipe name here</p>
        </div>
        <div class="imageTag">
            <img src="client/public/images/dinner-image.png" alt="" class="src"/>
        </div>
        
    </div>
    );
}