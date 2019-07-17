const showButton = document.querySelector(".show-btn");
const hideButton = document.querySelector(".hide-btn");
const table = document.querySelector('.div-1');

const grid = document.querySelector('.css-grid');
const gridShowButton = document.querySelector(".show-grid-btn");
const gridHideButton = document.querySelector(".hide-grid-btn");

const animation = document.querySelector('.animate-img');
const showPuppy = document.querySelector(".show-animate-btn");
const hidePuppy = document.querySelector(".hide-animate-btn");

const entButton = document.querySelector(".ent-btn");
const entParagraph = document.querySelector(".entertainment-text");

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


// clock 
const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('hour-hand');
const setDate = () => {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360 + 90);
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360 + 90);
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
    const hours = now.getHours();
    const hoursDegrees = ((hours / 12) * 360 + 90);
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}
// setInterval(setDate, 1000);



// Smooth Scrolling
$('.cf a').on('click', function(event) {
    if (this.hash !== '') {
        event.preventDefault();

        const hash = this.hash;

        $('html, body').animate({
                scrollTop: $(hash).offset().top
            },
            800,
            function() {
                window.location.hash = hash;
            }
        );
    }
});


// Entertainment section
const entertainmentList = ["Read a book", "Watch a movie", "Write a song", "Listen to a good album", "Volunteer at a food bank", "Learn to code"];
randomEnt = () => {
   const rand = Math.floor(Math.random() * entertainmentList.length);
   return entertainmentList[rand];
//    console.log(entertainmentList[rand]);
}

relieveBoredom = (e) => {
    entParagraph.innerHTML = randomEnt();
}

entButton.addEventListener('click', relieveBoredom);