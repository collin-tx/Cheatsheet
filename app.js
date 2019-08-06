// Tables
const showButton = $(".show-btn");
const table = $('.div-1');

const tablesObj = {
    showing: false,
    clickHandler: function(){
        this.showing = !this.showing;
        if (this.showing){
            table.removeClass('hide');
            showButton.text('Hide Tables Cheatsheet');
        } else {
            table.addClass('hide');
            showButton.text('Show Tables Cheatsheet');
        }
    }
}
showButton.on("click", tablesObj.clickHandler);

// Grid
const grid = $('.css-grid');
const gridShowButton = $(".show-grid-btn");
const gridObj = {
    showing: false,
    clickHandler: function(){
        this.showing = !this.showing;
        if (this.showing){
            grid.removeClass('hide');
            gridShowButton.text('Hide Grid Cheatsheet');
        } else {
            grid.addClass('hide');
            gridShowButton.text('Show Grid Cheatsheet');
        }
    }
}
gridShowButton.on("click", gridObj.clickHandler);



//Animation
const animation = $('.animate-img');
const showPuppy = $(".show-animate-btn");

const animationObj = {
    showing: false,
    clickHandler: function(){
        this.showing = !this.showing;
        if (this.showing){
            animation.removeClass('hide');
            showPuppy.text('Hide Puppy');
        } else {
            animation.addClass('hide');
            showPuppy.text('Show Puppy');
        }
    }
}
showPuppy.on("click", animationObj.clickHandler);




// Entertainment
const entButton = $(".ent-btn");
const entParagraph = $(".entertainment-text");




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