const showButton = document.querySelector(".show-btn");
const hideButton = document.querySelector(".hide-btn");
const table = document.querySelector('.div-1');

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