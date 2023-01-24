import { getDog, getDogs } from '../fetch-utils.js';
import { renderDogDetail } from '../render-utils.js';

const dogDetailContainer = document.getElementById('dog-detail-container');


//state
let dogData = {};

//event
window.addEventListener('load', async () => {
    // on load
    const dog = await getDog(id);
    dogData = dog;
        // console.log(dog);
    
    renderDogDetail(dog);
    dogDetailContainer.append(dog);
});
// on load
// get the id from URL

// use the id to fetch the dog
// render and append this dog's details to the container

const data = new URLSearchParams(window.location.search);

const id = data.get('id');
