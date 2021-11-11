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
      console.log(themeFlag);

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
      console.log(themeFlag);
    }
})




// ENABLING AND DISABLING THE BUTTONS

const bucketRu = document.getElementById('bucket-ru');
const bucketRuCross = document.getElementById('cross-1');

const keyboardRuIcon = document.getElementById('keyboard-icon-ru');
const keyboardRuCross = document.getElementById('cross-2');

const handRu = document.getElementById('hand-ru');
const handRuCross = document.getElementById('cross-3');

let crossOne = 0, crossTwo = 0, crossThree = 0;

const keyboardRu = document.getElementById('keyboard-ru');

bucketRu.addEventListener('click', () => {
  if (crossOne % 2 === 0) {
    bucketRuCross.style.display = 'block';
    crossOne++;

    keyboardRu.children[0].children[0].style.backgroundColor = '#C181F3';
    keyboardRu.children[0].children[1].style.backgroundColor = '#C181F3';
    keyboardRu.children[0].children[2].style.backgroundColor = '#8B89DF';
    keyboardRu.children[0].children[3].style.backgroundColor = '#72FF66';
    keyboardRu.children[0].children[4].style.backgroundColor = '#FFB966';
    keyboardRu.children[0].children[5].style.backgroundColor = '#FFB966';
    keyboardRu.children[0].children[6].style.backgroundColor = '#FFF066';
    keyboardRu.children[0].children[7].style.backgroundColor = '#FFF066';
    keyboardRu.children[0].children[8].style.backgroundColor = '#72FF66';
    keyboardRu.children[0].children[9].style.backgroundColor = '#8B89DF';
    keyboardRu.children[0].children[10].style.backgroundColor = '#C181F3';
    keyboardRu.children[0].children[11].style.backgroundColor = '#C181F3';
    keyboardRu.children[0].children[12].style.backgroundColor = '#C181F3';

    keyboardRu.children[1].children[1].style.backgroundColor = '#C181F3';
    keyboardRu.children[1].children[2].style.backgroundColor = '#8B89DF';
    keyboardRu.children[1].children[3].style.backgroundColor = '#72FF66';
    keyboardRu.children[1].children[4].style.backgroundColor = '#FFB966';
    keyboardRu.children[1].children[5].style.backgroundColor = '#FFB966';
    keyboardRu.children[1].children[6].style.backgroundColor = '#FFF066';
    keyboardRu.children[1].children[7].style.backgroundColor = '#FFF066';
    keyboardRu.children[1].children[8].style.backgroundColor = '#72FF66';
    keyboardRu.children[1].children[9].style.backgroundColor = '#8B89DF';
    keyboardRu.children[1].children[10].style.backgroundColor = '#C181F3';
    keyboardRu.children[1].children[11].style.backgroundColor = '#C181F3';
    keyboardRu.children[1].children[12].style.backgroundColor = '#C181F3';
    keyboardRu.children[1].children[13].style.backgroundColor = '#C181F3';

    keyboardRu.children[2].children[1].style.backgroundColor = '#C181F3';
    keyboardRu.children[2].children[2].style.backgroundColor = '#8B89DF';
    keyboardRu.children[2].children[3].style.backgroundColor = '#72FF66';
    keyboardRu.children[2].children[4].style.backgroundColor = '#FFB966';
    keyboardRu.children[2].children[5].style.backgroundColor = '#FFB966';
    keyboardRu.children[2].children[6].style.backgroundColor = '#FFF066';
    keyboardRu.children[2].children[7].style.backgroundColor = '#FFF066';
    keyboardRu.children[2].children[8].style.backgroundColor = '#72FF66';
    keyboardRu.children[2].children[9].style.backgroundColor = '#8B89DF';
    keyboardRu.children[2].children[10].style.backgroundColor = '#C181F3';
    keyboardRu.children[2].children[11].style.backgroundColor = '#C181F3';


    keyboardRu.children[3].children[1].style.backgroundColor = '#C181F3';
    keyboardRu.children[3].children[2].style.backgroundColor = '#8B89DF';
    keyboardRu.children[3].children[3].style.backgroundColor = '#72FF66';
    keyboardRu.children[3].children[4].style.backgroundColor = '#FFB966';
    keyboardRu.children[3].children[5].style.backgroundColor = '#FFB966';
    keyboardRu.children[3].children[6].style.backgroundColor = '#FFF066';
    keyboardRu.children[3].children[7].style.backgroundColor = '#FFF066';
    keyboardRu.children[3].children[8].style.backgroundColor = '#72FF66';
    keyboardRu.children[3].children[9].style.backgroundColor = '#8B89DF';
    keyboardRu.children[3].children[10].style.backgroundColor = '#C181F3';

console.log(keyboardRu.childNodes[0].childNodes);

  } else {
    bucketRuCross.style.display = 'none';
    crossOne++;

    for(let i = 0; i < keyboardRu.childNodes.length; i++) {
      for(let j = 0; j < 14; j++) {
        try {
          keyboardRu.children[i].children[j].style.backgroundColor = '#FFFFFF';
        } catch (error) {
          break;
        }
      }
    }
  }
})

keyboardRuIcon.addEventListener('click', () => {
  if (crossTwo % 2 === 0) {
    keyboardRuCross.style.display = 'none';
    keyboardRu.classList.add('visibility');
    crossTwo++;


  } else {
    keyboardRuCross.style.display = 'block';
    keyboardRu.classList.remove('visibility');
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