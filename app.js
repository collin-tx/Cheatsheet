const showButton = document.querySelector(".show-btn");
const hideButton = document.querySelector(".hide-btn");
const table = document.querySelector('.div-1');

const grid = document.querySelector('.css-grid');
const gridShowButton = document.querySelector(".show-grid-btn");
const gridHideButton = document.querySelector(".hide-grid-btn");

const animation = document.querySelector('.animate-img');
const showPuppy = document.querySelector(".show-animate-btn");
const hidePuppy = document.querySelector(".hide-animate-btn");

// displays table
function showTable(e) {
    table.classList.remove('hide');
}
// when clicked, table will appear
showButton.addEventListener("click", showTable);

// Hides table
function hideTable(e) {
    table.classList.add('hide');
}

//when clicked, table will disappear
hideButton.addEventListener('click', hideTable);



// displays grid
function showGrid(e) {
    grid.classList.remove('hide');
}
// when clicked, grid will appear
gridShowButton.addEventListener("click", showGrid);

// Hides grid
function hideGrid(e) {
    grid.classList.add('hide');
}

//when clicked, grid will disappear
gridHideButton.addEventListener('click', hideGrid);




// displays animation
function showAnimation(e) {
    animation.classList.remove('hide');
}
// when clicked, puppy will appear
showPuppy.addEventListener("click", showAnimation);

// Hides puppy
function hideAnimation(e) {
    animation.classList.add('hide');
}

//when clicked, pup will disappear
hidePuppy.addEventListener('click', hideAnimation);