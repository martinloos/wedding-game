function discover(id) 
{
  let container = document.getElementById(id)
  container.classList.remove('-hidden')
}

export function birdFindsDestination(nest) 
{
  if (nest.includes('nest-one'))
  {
    let container = document.getElementById('home')
    container.classList.add('-hidden')
    discover('nest-one')
  }
  if (nest.includes('nest-two'))
  {
    let container = document.getElementById('home')
    container.classList.add('-hidden')
    discover('nest-two')
  }
}