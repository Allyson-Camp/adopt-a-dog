export function renderDogCard(dog) {
    const div = document.createElement('div');
    const a = document.createElement('a');
    const img = document.createElement('img');
    const p = document.createElement('p');

    div.classList.add('dog-card');

    p.textContent = dog.name;
    img.src = `./assets/${dog.dog_breeds.name}.jpeg`;
    a.href = `./detail/?id=${dog.id}`; // link to the dog's detail page here

    div.append(p, img);

    a.append(div);

    return a;
}

export function renderDogDetail(dogData) {
    const div = document.createElement('div');
    const img = document.createElement('img');
    const descriptionEl = document.createElement('p');
    const nameEl = document.createElement('p');
    const ageEl = document.createElement('p');
    const breedEl = document.createElement('p');
    const ageAndBreedEl = document.createElement('div');
    img.src = `../assets/${dogData.dog_breeds.name}.jpeg`;

     // adding classlists
    ageAndBreedEl.classList.add('age-and-breed');
    div.classList.add('dog-detail');
    descriptionEl.classList.add('description');
    nameEl.classList.add('name');
    breedEl.classList.add('breed');
    img.classList.add('img');
    

    // examine the css classes already written and finish writing a detail page using the above elements
    descriptionEl.textContent = dogData.description;
    nameEl.textContent = dogData.name;
    ageEl.textContent = dogData.age;
    breedEl.textContent = dogData.dog_breeds.name;
    
    //appending everything
    ageAndBreedEl.append(ageEl, breedEl);
    div.append(img, nameEl, descriptionEl, ageAndBreedEl);
    return div;
}
