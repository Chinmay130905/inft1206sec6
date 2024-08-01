// 1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

// 2. RAW TEXT STRINGS

const storytext = [ 
    "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day."
];

const insertx = [
"Willy the Goblin",
"Big Daddy",
"Father Christmas"
];

const inserty = [
"the soup kitchen",
"Disneyland",
"the White House"
];

const insertz = [
"spontaneously combusted",
"melted into a puddle on the sidewalk",
"turned into a slug and crawled away"
];

// 3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION

randomize.addEventListener('click', result);

function result() {

    let newStory = randomValueFromArray(storyText);
    const xItem = randomValueFromArray(insertX);
    const yItem = randomValueFromArray(insertY);
    const zItem = randomValueFromArray(insertZ);
    const name = customName.value;

    newStory = newStory.replace(/:insertx:/g, xItem);
    newStory = newStory.replace(/:inserty:/g, yItem);
    newStory = newStory.replace(/:insertz:/g, zItem);
    newStory = newStory.replace(/:bob:/g, name || 'Bob');

  if(customName.value !== '') {
    const name = customName.value;

  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300);
    const temperature =  Math.round(94);

  }

  story.textContent = ;
  story.style.visibility = 'visible';
}