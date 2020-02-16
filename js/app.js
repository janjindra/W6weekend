document.addEventListener('DOMContentLoaded', () => {
  const newItemform = document.querySelector('#new-item-form');
  newItemform.addEventListener('submit', handleNewItemFormSubmit);

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);

})

const handleNewItemFormSubmit = function (event) {


  event.preventDefault();

  const animalListItem = createAnimalListItem(event.target);
  const animalList = document.querySelector('#animal-list');
  animalList.appendChild(animalListItem);

  event.target.reset();
}

const createAnimalListItem = function (form) {
  const animalListItem = document.createElement('li');
  animalListItem.classList.add('animal-list-item');

  const name = document.createElement('h1');
  name.textContent = form.name.value;
  animalListItem.appendChild(name);
//debugger;
  const species = document.createElement('p');
  species.textContent = form.species.value;
  animalListItem.appendChild(species);

  const continent = document.createElement('p');
  continent.textContent = form.continent.value;
  animalListItem.appendChild(continent);

  const status = document.createElement('p');
  status.textContent = form.status.value;
  animalListItem.appendChild(status);

return animalListItem;
}

const handleDeleteAllClick = function (event) {
  const animalList = document.querySelector('#animal-list');
  animalList.innerHTML = '';
}


// //=====================================================
//
//
// document.addEventListener('DOMContentLoaded', () => {
//   console.log('JavaScript loaded');
//
//   //1. add an event listener to the form
//   // a. get the form
//   const form = document.querySelector('#new-item-form');
//   // b. attach listeners to submit event.
//   //wheneever a user clicks submit, execure the callback function in the arrow form.
//   form.addEventListener('submit', (event) => {
//     //we need to stop the post request!!!
//     event.preventDefault();
//     console.log('the form has been submitted!!');
//
//     //grab output reading list
//     const readingList = document.querySelector('#reading-list')
//     // create an li element
//     const liElementTitle = document.createElement('li');
//     //add the inputted form data to this new li element
//     //-title
//     const bookTitle = event.target.title.value
//     liElementTitle.textContent = bookTitle
//     // append the new li element as a child of our reading list.
//     readingList.appendChild(liElementTitle);
//     //-author
//     const liElementAuthor = document.createElement('li')
//     const bookAuthor = event.target.author.value
//     liElementAuthor.textContent = bookTitle
//     readingList.appendChild(liElementAuthor);
//     //-category
//     const liElementCategory = document.createElement('li')
//     const bookCategory = event.target.category.value
//     liElementCategory.textContent = bookTitle
//     readingList.appendChild(liElementCategory);
//
//
// const handleDeleteAllClick = function (event) {
// const readingList = document.querySelector('#reading-list');
//   readingList.innerHTML = '';
// }
//
//
//
//   });
// });
//
// //======================================================
