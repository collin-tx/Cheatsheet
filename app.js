const showButton = $(".show-btn");
const hideButton = $(".hide-btn");
const table = $('.div-1');

const grid = $('.css-grid');
const gridShowButton = $(".show-grid-btn");
const gridHideButton = $(".hide-grid-btn");

const animation = $('.animate-img');
const showPuppy = $(".show-animate-btn");
const hidePuppy = $(".hide-animate-btn");

const entButton = $(".ent-btn");
const entParagraph = $(".entertainment-text");

// displays table
function showTable(e) {
    table.removeClass('hide');
}
// when clicked, table will appear
showButton.on("click", showTable);

// Hides table
function hideTable(e) {
    table.addClass('hide');
}

//when clicked, table will disappear
hideButton.on('click', hideTable);



// displays grid
function showGrid(e) {
    grid.removeClass('hide');
}
// when clicked, grid will appear
gridShowButton.on("click", showGrid);

// Hides grid
function hideGrid(e) {
    grid.addClass('hide');
}

//when clicked, grid will disappear
gridHideButton.on('click', hideGrid);




// displays animation
function showAnimation(e) {
    animation.removeClass('hide');
}
// when clicked, puppy will appear
showPuppy.on("click", showAnimation);

// Hides puppy
function hideAnimation(e) {
    animation.addClass('hide');
}

//when clicked, pup will disappear
hidePuppy.on('click', hideAnimation);


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
setInterval(setDate, 1000);



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
const entertainmentList = ["Read a book", "Watch a movie", "Write a song", "Listen to a good album", "Volunteer at a food bank", "Learn to code", "Go for a run", "Call an old friend", "Go for a walk", "Play a video game"];
randomEnt = () => {
   const rand = Math.floor(Math.random() * entertainmentList.length);
   return entertainmentList[rand];
}

relieveBoredom = (e) => {
    entParagraph.text(randomEnt());
}

entButton.on('click', relieveBoredom);