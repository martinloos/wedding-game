import { birdFindsDestination } from './bird.js';
import { init as initHome } from './home.js';
import { playCatchMe } from './catchme.js';
import { playHangman } from './hangman.js';
import { playMemory } from './memory.js';
import { sam } from './sam.js';


function getContainer(id) 
{
  let container = document.getElementById(id)
  return container
}

const searchParam = window.location.search
console.log(searchParam)

if (searchParam === '')
{
  document.getElementById('home').classList.remove('-hidden')
}
else
{
  birdFindsDestination(searchParam)
}

window.onload = function() {
  if (!getContainer('home').classList.contains('-hidden')) 
  {
    console.log('discovered home')
    initHome()
  }
  if (!getContainer('nest-one').classList.contains('-hidden')) 
  {
    console.log('discovered nest one')
  }
  if (!getContainer('nest-two').classList.contains('-hidden')) 
  {
    console.log('discovered nest two')
    playCatchMe()
  }
  if (!getContainer('nest-six').classList.contains('-hidden')) 
  {
    console.log('discovered nest six')
    playHangman()
  }
  if (!getContainer('nest-nine').classList.contains('-hidden')) 
  {
    console.log('discovered nest nine')
    playMemory()
  }
  if (!getContainer('nest-15').classList.contains('-hidden')) 
  {
    console.log('discovered nest 15')
    sam()
  }
}