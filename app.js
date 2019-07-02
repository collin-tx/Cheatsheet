const showButton = document.querySelector(".show-btn");
const hideButton = document.querySelector(".hide-btn");
const table = document.querySelector('.div-1');

const grid = document.querySelector('.css-grid');
const gridShowButton = document.querySelector(".show-grid-btn");
const gridHideButton = document.querySelector(".hide-grid-btn");

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

//when clicked, table will disappear
gridHideButton.addEventListener('click', hideGrid);