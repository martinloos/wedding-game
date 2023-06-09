export function playCatchMe()
{
const container = document.querySelector(".wrapper");
container.addEventListener("mousemove", (e) => {
  const eyes = document.querySelectorAll(".eye");
  [].forEach.call(eyes, function (eye) {
    let mouseX = eye.getBoundingClientRect().right;
    if (eye.classList.contains("eye-left")) {
      mouseX = eye.getBoundingClientRect().left;
    }
    let mouseY = eye.getBoundingClientRect().top;
    let radianDegrees = Math.atan2(e.pageX - mouseX, e.pageY - mouseY);
    let rotationDegrees = radianDegrees * (180 / Math.PI) * -1 + 180;
    eye.style.transform = `rotate(${rotationDegrees}deg)`;
  });
});

function initTrigger() {
  $('.trigger__button').on('mousedown', function() {
    var clickedTimes = parseInt($('.trigger__button').attr('data-clicked'));
    
    switch(clickedTimes) {
      case 0:
        $('.office').addClass('-active');
        $('.module-catchme').addClass('-state-1');
        $('.module-catchme').css('transition-duration', '1s');
        clearTrigger();
        $('.trigger__button').addClass('-text-2');
        startStage(1500);
        
        break;
      case 1:
        $('.module-catchme').css('transition-duration', '.5s');
        clearTrigger();
        $('.trigger__button').addClass('-text-3');
        startStage(1000);
        
        break;
      case 2:
        $('.module-catchme').css('transition-duration', '.25s');
        clearTrigger();
        $('.trigger__button').addClass('-text-4');
        startStage(500);
        
        break;
      case 3:
        $('.module-catchme').css('transition-duration', '.1s');
        clearTrigger();
        $('.trigger__button').addClass('-text-5');
        startStage(200);
        
        break;
      case 4:        
        clearTrigger();
        $('.trigger__button').html('<p>' + atob('Q29kZTogMjA=') + '</p>');
        $('.module-catchme').removeClass('-state-1').removeAttr('style');
        window.clearInterval(stageInterval);
        
        break;
    }
    
    $('.trigger__button').attr('data-clicked', clickedTimes + 1)
  });
}

var stageInterval;
function startStage(delay) {
  window.clearInterval(stageInterval);
  
  stageInterval = window.setInterval(function() {
    moveCatchme();
  }, delay);
  
  window.setTimeout(function() {
    moveCatchme();
  }, 150);
}

function moveCatchme() {
  var curWinW = parseInt($('.wrapper').width());
  var curWinH = parseInt($('.wrapper').height());
  var paddingX = 100;
  var paddingY = 130;
  var newCatchmeX = randomInt(paddingX, curWinW - paddingX);
  var newCatchmeY = randomInt(paddingY, curWinH - paddingY);
  
  $('.module-catchme').css('left', newCatchmeX).css('top', newCatchmeY);
}

function clearTrigger() {
  $('.trigger__button').removeClass('-text-0').removeClass('-text-1').removeClass('-text-2').removeClass('-text-3').removeClass('-text-4');
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

$(document).ready(function() {
  initTrigger();
});
}