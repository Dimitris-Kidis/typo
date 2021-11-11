// MODAL WINDOW

$(function () {

  $('div.select').click( function(event){
    event.preventDefault();
    $('#myOverlay').fadeIn(297, function(){
      $('#myModal') 
      .css('display', 'block')
      .animate({opacity: 1}, 198);
    });
  });

  $('#myModal__close, #myOverlay').click( function(){
  $('#myModal').animate({opacity: 0}, 198, function(){
      $(this).css('display', 'none');
      $('#myOverlay').fadeOut(297);
    });
  });

});

// THEME CONTROLLER

const switchControlTheme = document.getElementById('switch-control-theme');
const switchCircleTheme = document.getElementById('circle-theme');
const switchCircleLanguage = document.getElementById('circle-language');
const theSun = document.getElementById('day');
const theMoon = document.getElementById('night');
const mainBox = document.getElementById('text');
const mainInput = document.getElementById('input');

const keyboardLines = document.querySelectorAll('.line');


let times = 0;
let themeFlag = true;

switchControlTheme.addEventListener('click', () => {
    if (times%2 === 0 ) {
        switchCircleTheme.style.transform = "translate(22px, 4px)";
        switchCircleLanguage.style.transform = "translate(5px, 4px)";
        document.querySelector('#ru').style.paddingBottom = '1px';
        times++;
        theSun.classList.add('hidden');
        theMoon.classList.remove('hidden');

        document.getElementById('switch-control-theme').style.backgroundColor = '#4E4E4E';
        document.getElementById('switch-control-theme').style.border = '1px solid #FFFFFF';
        document.getElementById('switch-control-language').style.border = '1px solid #FFFFFF';
        document.getElementById('switch-control-language').style.backgroundColor = '#4E4E4E';
        document.querySelector('*').style.backgroundColor = '#4E4E4E';
        document.querySelector('#name').style.color = 'white';
        document.querySelector('#menu').style.color = '#ffffff';
        document.querySelector('#arrow-change').setAttribute('src','img/arrow-dark.svg');


        document.getElementById('svg-line-1').setAttribute('src','img/line-light-big.svg');
        document.getElementById('svg-line-2').setAttribute('src','img/line-light-big.svg');
        document.getElementById('svg-line-3').setAttribute('src','img/line-light.svg');
        document.getElementById('svg-line-4').setAttribute('src','img/line-light.svg');
        

        mainBox.style.border = '1px solid #FFFFFF';
        mainBox.style.color = '#FFFFFF';

        mainInput.style.color = '#ffffff';

        // keyboard

      document.querySelector('body').style.color = '#ffffff';
      document.querySelector('body').style.backgroundColor = '#4e4e4e';


      for (let i = 0; i < document.querySelectorAll('#text').length; i++) {
        document.querySelectorAll('#text')[i].style.border = '1px solid #FFFFFF';
      }

      console.log(document.querySelectorAll('.footer-text'));
      for (let i = 0; i < document.querySelectorAll('.footer-text').length; i++) {
        document.querySelectorAll('.footer-text')[i].style.color = '#FFFFFF';
      }
      themeFlag = true;

    } else {
        switchCircleTheme.style.transform = "translate(5px, 5px)";
        times++;
        theMoon.classList.add('hidden');
        theSun.classList.remove('hidden');

        document.getElementById('switch-control-theme').style.backgroundColor = '#FFFFFF';
        document.getElementById('switch-control-theme').style.border = '0px solid #4E4E4E';
        document.getElementById('switch-control-language').style.border = '0px solid #4E4E4E';
        document.getElementById('switch-control-language').style.backgroundColor = '#FFFFFF';
        document.querySelector('*').style.backgroundColor = '#FFFFFF';
        document.querySelector('#name').style.color = '#4E4E4E';
        document.querySelector('#menu').style.color = '#4E4E4E';
        document.querySelector('#arrow-change').setAttribute('src','img/arrow.svg');


        document.getElementById('svg-line-1').setAttribute('src','img/line.svg');
        document.getElementById('svg-line-2').setAttribute('src','img/line.svg');
        document.getElementById('svg-line-3').setAttribute('src','img/smaller-line.svg');
        document.getElementById('svg-line-4').setAttribute('src','img/smaller-line.svg');
        

        mainBox.style.border = '1px solid #4E4E4E';
        mainBox.style.color = '#4E4E4E';

        mainInput.style.color = '#4E4E4E';

        // keyboard

      document.querySelector('body').style.color = '#4E4E4E';
      document.querySelector('body').style.backgroundColor = '#ffffff';


      for (let i = 0; i < document.querySelectorAll('#text').length; i++) {
        document.querySelectorAll('#text')[i].style.border = '1px solid #4E4E4E';
      }

      console.log(document.querySelectorAll('.footer-text'));
      for (let i = 0; i < document.querySelectorAll('.footer-text').length; i++) {
        document.querySelectorAll('.footer-text')[i].style.color = '#4E4E4E';
      }
      themeFlag = false;
    }
})




// ENABLING AND DISABLING THE BUTTONS

const bucketRu = document.getElementById('bucket-ru');
const bucketRuCross = document.getElementById('cross-1');

const keyboardRu = document.getElementById('keyboard-ru');
const keyboardRuCross = document.getElementById('cross-2');

const handRu = document.getElementById('hand-ru');
const handRuCross = document.getElementById('cross-3');

let crossOne = 0, crossTwo = 0, crossThree = 0;

bucketRu.addEventListener('click', () => {
  if (crossOne % 2 === 0) {
    bucketRuCross.style.display = 'block';
    crossOne++;
  } else {
    bucketRuCross.style.display = 'none';
    crossOne++;
  }
})

keyboardRu.addEventListener('click', () => {
  if (crossTwo % 2 === 0) {
    keyboardRuCross.style.display = 'none';
    crossTwo++;
  } else {
    keyboardRuCross.style.display = 'block';
    crossTwo++;
  }
})

handRu.addEventListener('click', () => {
  if (crossThree % 2 === 0) {
    handRuCross.style.display = 'block';
    crossThree++;
  } else {
    handRuCross.style.display = 'none';
    crossThree++;
  }
})