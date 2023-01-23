import { getDogs } from './fetch-utils.js';
import { renderDogCard } from './render-utils.js';

const dogListContainer = document.getElementById('dog-list-container');
const mainSection = document.querySelector('main-section');


//state
let dogsData = [];

//events
window.addEventListener('load', async () => {
// on load
// fetch all dogs
    const dogs = await getDogs();
    dogsData = dogs;
    console.log(dogs);
// render and append all dog cards to the container
    displayDogs();
});

function displayDogs() {
// loop
    dogListContainer.textContent = '';
    for (let dog of dogsData) {
        const dogEl = renderDogCard(dog);
        dogListContainer.append(dogEl);
    }
}
  

