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
    displayDog();
});

function displayDog() {
    for (let dog of dogData) {
        const dogDetailEl = renderDogDetail(dog);
        dogDetailContainer.append(dogDetailEl);
    }
}

