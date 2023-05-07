import { birdFindsDestination } from './bird.js';
import { init as initHome } from './home.js';
import { playCatchMe } from './catchme.js';

function getContainer(id) 
{
  let container = document.getElementById(id)
  return container
}

const searchParam = window.location.search
console.log(searchParam)

birdFindsDestination(searchParam)

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
}