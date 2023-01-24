import { getDog } from '../fetch-utils.js';
import { renderDogDetail } from '../render-utils.js';

const dogDetailContainer = document.getElementById('dog-detail-container');


//state
let dogData = {};

//event
window.addEventListener('load', async () => {
    // on load
    const data = new URLSearchParams(window.location.search);
    const id = data.get('id');

    const dog = await getDog(id);
    dogData = dog;
    console.log(dog);     
    // renderDogDetail(dog);
    // dogDetailContainer.append(dog);
    displayDog(dogData);
});

function displayDog(dogData) {
    const dogDetailEl = renderDogDetail(dogData);
    dogDetailContainer.append(dogDetailEl);
}

