// to look for first 'button' by using mouse 
// in html and add evenlistener(click)
// once detected and click happen, then call function handleClick

// document.querySelector('button').addEventListener('click' , handleClick);
// function handleClick(){}
// use for loop to look all the drum
// look for all class .drum and detect how many .drum
for (let i = 0; i<document.querySelectorAll('.drum').length; i++)
{
    // from i=0 first drum add click, once detect call function
    document.querySelectorAll('.drum')[i].addEventListener('click' , function(){

        // set var to point THIS click element within HTML
    var buttonInnerHTML = this.innerHTML;
    // use function makeSound to point THIS button with KEY in HTML?
        makeSound(buttonInnerHTML);
        // will also call functionAnimation to point innerHTML
        buttonAnimation(buttonInnerHTML);
   
 }
    );
}
// section 2 by KeyboardEvent
// when keypress use document to look whole KeyboardEvent
// call back function refer to look whole document and 
// wait "click or keypress", once detected call the event 
document.addEventListener('keypress', function(event){
// when the event happen point to its key content
// and generate function makeSound
makeSound(event.key);
// also call functionAnimation to point to key
buttonAnimation(event.key);
});

function makeSound(key){
    // if you change the key w in html to others, it still work when you press w
switch (key) {
    case 'w' :
        // set var to point sound; then use var crash.play to play;
        var crash = new Audio('sounds/crash.mp3');
        crash.play();
    break;
    case 'a' :
        var tom1 = new Audio('sounds/tom-1.mp3');
        tom1.play();
    break;
    case 's' :
        var kick = new Audio('sounds/kick-bass.mp3');
        kick.play();
    break;
    case 'd' :
        var tom2 = new Audio('sounds/tom-2.mp3');
        tom2.play();
    break;
    case 'j' :
        var snare = new Audio('sounds/snare.mp3');
        snare.play();
    break;
    case 'k' :
        var tom3 = new Audio('sounds/tom-3.mp3');
        tom3.play();
    break;
    case 'l' :
        var tom4 = new Audio('sounds/tom-4.mp3');
        tom4.play();
    break;
    default:  alert('wrong');
} 

}
// create functionAnimation with currentkey when click or press
function buttonAnimation(currentKey){
// look whole document for .currentkey class in the html
var activeButton = document.querySelector('.' + currentKey);
// once found the .class add class called .pressed in css file
activeButton.classList.add('pressed');
// settimeout has two input when it should be remove
setTimeout(function(){
activeButton.classList.remove('pressed');

}, 200);

}