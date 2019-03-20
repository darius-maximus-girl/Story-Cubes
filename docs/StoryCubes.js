let pics = ['circus-tent', 'electric-bumper-car', 'cotton-candy', 'telescope', 'heart-balloon', 'skyscrapers', 'palace','bank-building', 'cafe', 'archeology', 'pagoda', 'ferris-wheel', 'fire-station','mittens', 'umbrella', 'diamond-ring', 'fashion-trend', 'recent-celebrity', 'sherlock-holmes', 'historical', 'astronaut', 'superman', 'gold-pot', 'sophia-loren', 'titanic', 'ballet-shoes', 'hair-dryer', 'lip-gloss', 'bear-footprint', 'wolf', 'clown-fish', 'mosquito', 'flamingo', 'acacia', 'mushroom', 'radish', 'eggplant', 'palm-tree', 'nut', 'cactus', 'bamboo', 'coconut', 'pineapple', 'watermelon', 'farm', 'pig', 'dog', 'grandma', 'doctor-male', 'police', 'super-hero-female', 'mime', 'volcano', 'alps', 'iceberg', 'sea-waves', 'beach', 'sun-lounger', 'summer', 'flippers', 'guitar', 'matches', 'flash-light', 'rucksack', 'lighthouse', 'statue-of-liberty', 'camping-tent', 'bear', 'treasure-chest', 'gondola', 'tram', 'helicopter', 'airplane-take-off', 'identification-documents', 'hot-air-balloon', 'launched-rocket', 'scooter', 'key-exchange', 'tornado', 'fog-night', 'storm', 'bullish', 'save-all', 'alarm-clock', 'trophy', 'skateboarding', 'bungee-jumping', 'cross-country-skiing', 'in-air', 'banknotes', 'iron-age-warrior', 'flash-bang', 'globe-earth', 'treasure-map', 'weber', 'retro-tv', 'tea-cup', 'aquarium', 'soap-dispenser', 'cards', 'r2-d2', 'fraud', 'drama', 'comedy', 'birthday', 'deadly-spray', 'bavarian-pretzel', 'raspberry', 'jelly', 'pizza', 'mcdonalds-french-fries', 'empty-jam-jar', 'eiffel-tower', 'matryoshka', 'german-house', 'tattoo', 'accordion', 'brandenburg-gate', 'chili-pepper', 'viking-ship', 'sombrero', 'sumo', 'origami', 'octopus'];

const button = document.getElementById('button');
const dice = document.querySelectorAll('.img');

//jQUERY + functionality for mobile phones so that the cubes get dragged by touching the screen 

$( function() {
    $(".sortable").sortable();
    $(".sortable").disableSelection();
  } 
 );

!function(a){function f(a,b){if(!(a.originalEvent.touches.length>1)){a.preventDefault();var c=a.originalEvent.changedTouches[0],d=document.createEvent("MouseEvents");d.initMouseEvent(b,!0,!0,window,1,c.screenX,c.screenY,c.clientX,c.clientY,!1,!1,!1,!1,0,null),a.target.dispatchEvent(d)}}if(a.support.touch="ontouchend"in document,a.support.touch){var e,b=a.ui.mouse.prototype,c=b._mouseInit,d=b._mouseDestroy;b._touchStart=function(a){var b=this;!e&&b._mouseCapture(a.originalEvent.changedTouches[0])&&(e=!0,b._touchMoved=!1,f(a,"mouseover"),f(a,"mousemove"),f(a,"mousedown"))},b._touchMove=function(a){e&&(this._touchMoved=!0,f(a,"mousemove"))},b._touchEnd=function(a){e&&(f(a,"mouseup"),f(a,"mouseout"),this._touchMoved||f(a,"click"),e=!1)},b._mouseInit=function(){var b=this;b.element.bind({touchstart:a.proxy(b,"_touchStart"),touchmove:a.proxy(b,"_touchMove"),touchend:a.proxy(b,"_touchEnd")}),c.call(b)},b._mouseDestroy=function(){var b=this;b.element.unbind({touchstart:a.proxy(b,"_touchStart"),touchmove:a.proxy(b,"_touchMove"),touchend:a.proxy(b,"_touchEnd")}),d.call(b)}}}(jQuery);

//Rolling the dice 
const roll = () => {
    const picsCopy = pics.slice();
        dice.forEach((die) => {
            const [src] = picsCopy.splice(Math.floor(Math.random() * picsCopy.length), 1);
            die.src = 'https://img.icons8.com/color/96/000000/' + src + '.png';
    });
  };

 //Timer
let time; 

function startTimer(duration, display1) {
    let timer = duration, minutes, seconds;
    time = setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display1.textContent = minutes + ":" + seconds;
       
        if (--timer < 0) {
            timer == duration;
            clearInterval(time);
            dice.forEach(img => {
                img.src = "https://i.postimg.cc/CBynLfPc/question.png"  
            })
        }
    }, 1000);
};

const countdown = () => {
    let oneMinute = 60 * 1;
    display1 = document.getElementById('timer');
    startTimer(oneMinute, display1);
};

const changeTxt = () => {
    let text = 'Roll again!';
    return button.innerHTML = text;
}

const call = () => {
    clearInterval(time);
    roll();
    countdown();
    changeTxt()
}

button.onclick = call;

