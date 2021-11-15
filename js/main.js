// MODAL WINDOW

$(function () {

  $('div.select').click( function(event){
    event.preventDefault();
    $('#myOverlay').fadeIn(297, function(){
      $('#myModal') 
      .css('display', 'block')
      .animate({opacity: 1}, 140);
    });
  });

  $('#myModal__close, #myOverlay').click( function(){
  $('#myModal').animate({opacity: 0}, 140, function(){
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

        document.getElementById('letter_backspace-1').style.backgroundColor  = '#4E4E4E';
        document.getElementById('letter_space-1').style.backgroundColor  = '#4E4E4E';
        document.getElementById('letter_tab-1').style.backgroundColor  = '#4E4E4E';
        document.getElementById('letter_capslock-1').style.backgroundColor  = '#4E4E4E';
        document.getElementById('letter_enter-1').style.backgroundColor  = '#4E4E4E';
        document.getElementById('letter_shift-1-1').style.backgroundColor  = '#4E4E4E';
        document.getElementById('letter_shift-2-1').style.backgroundColor  = '#4E4E4E';
        document.getElementById('letter_alt-1').style.backgroundColor  = '#4E4E4E';

        textBox.style.border = '1px solid #FFFFFF';


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
      themeFlag = false;
      if ( keyboardHighlighted === true ) {
        for(let i = 0; i < keyboardRu.childNodes.length; i++) {
          for(let j = 0; j < 14; j++) {
            try {
              keyboardRu.children[i].children[j].style.backgroundColor = document.querySelector('body').style.backgroundColor;
            } catch (error) {
              break;
            }
          }
        }
      }
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


        textBox.style.border = '1px solid #4e4e4e';
        document.getElementById('letter_backspace-1').style.backgroundColor  = '#FFFFFF';
        document.getElementById('letter_space-1').style.backgroundColor  = '#FFFFFF';
        document.getElementById('letter_tab-1').style.backgroundColor  = '#FFFFFF';
        document.getElementById('letter_capslock-1').style.backgroundColor  = '#FFFFFF';
        document.getElementById('letter_enter-1').style.backgroundColor  = '#FFFFFF';
        document.getElementById('letter_shift-1-1').style.backgroundColor  = '#FFFFFF';
        document.getElementById('letter_shift-2-1').style.backgroundColor  = '#FFFFFF';
        document.getElementById('letter_alt-1').style.backgroundColor  = '#FFFFFF';

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
      themeFlag = true;

      if ( keyboardHighlighted === true) {
        for(let i = 0; i < keyboardRu.childNodes.length; i++) {
          for(let j = 0; j < 14; j++) {
            try {
              keyboardRu.children[i].children[j].style.backgroundColor = document.querySelector('body').style.backgroundColor;
            } catch (error) {
              break;
            }
          }
        }  
      }
}})




// ENABLING AND DISABLING THE BUTTONS

const bucketRu = document.getElementById('bucket-ru');
const bucketRuCross = document.getElementById('cross-1');

const keyboardRuIcon = document.getElementById('keyboard-icon-ru');
const keyboardRuCross = document.getElementById('cross-2');

const handRu = document.getElementById('hand-ru');
const handRuCross = document.getElementById('cross-3');

let crossOne = 0, crossTwo = 0, crossThree = 0;

let keyboardHighlighted = false;

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
    keyboardRu.children[0].children[6].style.backgroundColor = '#FFDB1E';
    keyboardRu.children[0].children[7].style.backgroundColor = '#FFDB1E';
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
    keyboardRu.children[1].children[6].style.backgroundColor = '#FFDB1E';
    keyboardRu.children[1].children[7].style.backgroundColor = '#FFDB1E';
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
    keyboardRu.children[2].children[6].style.backgroundColor = '#FFDB1E';
    keyboardRu.children[2].children[7].style.backgroundColor = '#FFDB1E';
    keyboardRu.children[2].children[8].style.backgroundColor = '#72FF66';
    keyboardRu.children[2].children[9].style.backgroundColor = '#8B89DF';
    keyboardRu.children[2].children[10].style.backgroundColor = '#C181F3';
    keyboardRu.children[2].children[11].style.backgroundColor = '#C181F3';


    keyboardRu.children[3].children[1].style.backgroundColor = '#C181F3';
    keyboardRu.children[3].children[2].style.backgroundColor = '#8B89DF';
    keyboardRu.children[3].children[3].style.backgroundColor = '#72FF66';
    keyboardRu.children[3].children[4].style.backgroundColor = '#FFB966';
    keyboardRu.children[3].children[5].style.backgroundColor = '#FFB966';
    keyboardRu.children[3].children[6].style.backgroundColor = '#FFDB1E';
    keyboardRu.children[3].children[7].style.backgroundColor = '#FFDB1E';
    keyboardRu.children[3].children[8].style.backgroundColor = '#72FF66';
    keyboardRu.children[3].children[9].style.backgroundColor = '#8B89DF';
    keyboardRu.children[3].children[10].style.backgroundColor = '#C181F3';

    keyboardHighlighted = false;

  } else {
    bucketRuCross.style.display = 'none';
    crossOne++;


      for(let i = 0; i < keyboardRu.childNodes.length; i++) {
        for(let j = 0; j < 14; j++) {
          try {
            keyboardRu.children[i].children[j].style.backgroundColor = document.querySelector('body').style.backgroundColor;
          } catch (error) {
            break;
          }
        }
    }
    keyboardHighlighted = true;
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

let handRuAct = false; let tempNext;

handRu.addEventListener('click', () => {
  if (crossThree % 2 === 0) {
    handRuCross.style.display = 'block';
    crossThree++;
    handRuAct = true;

    for(let i = 0; i < textBox.childNodes.length; i++) {
        try {
          if (!textBox.children[i].classList.contains('correct') && !textBox.children[i].classList.contains('incorrect')) {
            tempNext = textBox.innerText[i];
            highlight(tempNext);
            break;
          }
        } catch (error) {
          break;
        }
    }

  } else {
    handRuCross.style.display = 'none';
    crossThree++;
    handRuAct = false;
    for(let i = 0; i < 5; i++) {
      for(let j = 0; j < 15; j++) {
        try {
          keyboardRu.children[i].children[j].classList.remove('highlighted');
        } catch (error) {
          break;
        }
      }
    }
  }
})

// WORKING WITH THE TEXTBOX


//1. Берем букву из текстбокса
//2. Берем букву из инпута
//3. Сравнием:
// - (1) если они совпадают, то поинтер++, обе буквы становятся зелеными НО
//      - если они правлиьные, но букву стирают, то поинтер--, а некстлеттер
//                                               убираем зеленый цвет
// - (2) если они не совпадают, то поинтер++, но обе буквы красные
//
//
//
//



const textBox = document.getElementById('text-box');
textBox.innerText = textBox.innerText.replace(/ё/g, 'е');
textBox.innerText = textBox.innerText.replace(/Ë/g, 'Е');

const progressBar = document.getElementById('input-progress');
//mainInput
let pointer = 0;
// let extraTextBox = textBox;
// const checked = document.getElementById('checked');
// const wrong = document.getElementById('wrong');


tmp = textBox.innerText;
const wordLength = textBox.innerText.length;
console.log(tmp);
textBox.innerText = '';
tmp.split('').forEach(character => {
  const characterSpan = document.createElement('span');
  characterSpan.innerText = character;
  textBox.appendChild(characterSpan);
  mainInput.value = null;
})


function highlight (param) {
  switch (param) {
    case 'ё':
      // document.getElementById('big-finger-right-gray').classList.remove('hidden');
      document.getElementById('letter_ё').classList.add('highlighted');
      break;
    case 'Ë':
      document.getElementById('letter_ё').classList.add('highlighted');
      document.getElementById('letter_shift-1-1').classList.add('highlighted');
      break;
    case '1':
      document.getElementById('letter_1').classList.add('highlighted');
      break;
    case '!':
      document.getElementById('letter_shift-1-1').classList.add('highlighted');
      document.getElementById('letter_1').classList.add('highlighted');
      break;
      break;
    case '2':
      document.getElementById('letter_2').classList.add('highlighted');
      break;
    case '"':
      document.getElementById('letter_2').classList.add('highlighted');
      document.getElementById('letter_shift-1-1').classList.add('highlighted');
      break;
    case '3':
      document.getElementById('letter_3').classList.add('highlighted');
      break;
    case '№':
      document.getElementById('letter_3').classList.add('highlighted');
      document.getElementById('letter_shift-1-1').classList.add('highlighted');
      break;
    case '4':
      document.getElementById('letter_4').classList.add('highlighted');
      break;
    case ';':
      document.getElementById('letter_4').classList.add('highlighted');
      document.getElementById('letter_shift-1-1').classList.add('highlighted');
      break;
    case '5':
      document.getElementById('letter_5').classList.add('highlighted');
      break;
    case '%':
      document.getElementById('letter_5').classList.add('highlighted');
      document.getElementById('letter_shift-1-1').classList.add('highlighted');
      break;
    case '6':
      document.getElementById('letter_6').classList.add('highlighted');
      break;
    case ':':
      document.getElementById('letter_6').classList.add('highlighted');
      document.getElementById('letter_shift-1-1').classList.add('highlighted');
      break;
    case '7':
      document.getElementById('letter_7').classList.add('highlighted');
      break;
    case '?':
      document.getElementById('letter_7').classList.add('highlighted');
      document.getElementById('letter_shift-1-1').classList.add('highlighted');
      break;
    case '8':
      document.getElementById('letter_8').classList.add('highlighted');
      break;
    case '*':
      document.getElementById('letter_8').classList.add('highlighted');
      document.getElementById('letter_shift-1-1').classList.add('highlighted');
      break;
    case '9':
      document.getElementById('letter_9').classList.add('highlighted');
      break;
    case '(':
      document.getElementById('letter_9').classList.add('highlighted');
      document.getElementById('letter_shift-1-1').classList.add('highlighted');
      break;
    case '0':
      document.getElementById('letter_0').classList.add('highlighted');
      break;
    case ')':
      document.getElementById('letter_0').classList.add('highlighted');
      document.getElementById('letter_shift-1-1').classList.add('highlighted');
      break;
    case '-':
      document.getElementById('letter_minus').classList.add('highlighted');
      break;
    case '_':
      document.getElementById('letter_minus').classList.add('highlighted');
      document.getElementById('letter_shift-1-1').classList.add('highlighted');
      break;
    case '=':
      document.getElementById('letter_plus').classList.add('highlighted');
      break;
    case '+':
      document.getElementById('letter_plus').classList.add('highlighted');
      document.getElementById('letter_shift-1-1').classList.add('highlighted');
      break;


    case 'й':
      document.getElementById('letter_й').classList.add('highlighted');
      break;
    case 'Й':
      document.getElementById('letter_й').classList.add('highlighted');
      document.getElementById('letter_shift-1-1').classList.add('highlighted');
      break;
    case 'ц':
      document.getElementById('letter_ц').classList.add('highlighted');
      break;
    case 'Ц':
      document.getElementById('letter_ц').classList.add('highlighted');
      document.getElementById('letter_shift-1-1').classList.add('highlighted');
      break;
    case 'у':
      document.getElementById('letter_у').classList.add('highlighted');
      break;
    case 'У':
      document.getElementById('letter_у').classList.add('highlighted');
      document.getElementById('letter_shift-1-1').classList.add('highlighted');
      break;
    case 'к':
      document.getElementById('letter_к').classList.add('highlighted');
      break;
    case 'К':
      document.getElementById('letter_к').classList.add('highlighted');
      document.getElementById('letter_shift-1-1').classList.add('highlighted');
      break;
    case 'е':
      document.getElementById('letter_е').classList.add('highlighted');
      break;
    case 'Е':
      document.getElementById('letter_е').classList.add('highlighted');
      document.getElementById('letter_shift-1-1').classList.add('highlighted');
      break;
    case 'н':
      document.getElementById('letter_н').classList.add('highlighted');
      break;
    case 'Н':
      document.getElementById('letter_н').classList.add('highlighted');
      document.getElementById('letter_shift-1-1').classList.add('highlighted');
      break;
    case 'г':
      document.getElementById('letter_г').classList.add('highlighted');
      break;
    case 'Г':
      document.getElementById('letter_г').classList.add('highlighted');
      document.getElementById('letter_shift-1-1').classList.add('highlighted');
      break;
    case 'ш':
      document.getElementById('letter_ш').classList.add('highlighted');
      break;
    case 'Ш':
      document.getElementById('letter_ш').classList.add('highlighted');
      document.getElementById('letter_shift-1-1').classList.add('highlighted');
      break;
    case 'щ':
      document.getElementById('letter_щ').classList.add('highlighted');
      break;
    case 'Щ':
      document.getElementById('letter_щ').classList.add('highlighted');
      document.getElementById('letter_shift-1-1').classList.add('highlighted');
      break;
    case 'з':
      document.getElementById('letter_з').classList.add('highlighted');
      break;
    case 'З':
      document.getElementById('letter_з').classList.add('highlighted');
      document.getElementById('letter_shift-1-1').classList.add('highlighted');
      break;
    case 'х':
      document.getElementById('letter_х').classList.add('highlighted');
      break;
    case 'Х':
      document.getElementById('letter_х').classList.add('highlighted');
      document.getElementById('letter_shift-1-1').classList.add('highlighted');
      break;
    case 'ъ':
      document.getElementById('letter_ъ').classList.add('highlighted');
      break;
    case 'Ъ':
      document.getElementById('letter_ъ').classList.add('highlighted');
      document.getElementById('letter_shift-1-1').classList.add('highlighted');
      break;
    case '\\':
      document.getElementById('letter_slash').classList.add('highlighted');
      break;
    case '/':
      document.getElementById('letter_slash').classList.add('highlighted');
      document.getElementById('letter_shift-1-1').classList.add('highlighted');
      break;
    case 'ф':
      document.getElementById('letter_ф').classList.add('highlighted');
      break;
    case 'Ф':
      document.getElementById('letter_ф').classList.add('highlighted');
      document.getElementById('letter_shift-1-1').classList.add('highlighted');
      break;
    case 'ы':
      document.getElementById('letter_ы').classList.add('highlighted');
      break;
    case 'Ы':
      document.getElementById('letter_ы').classList.add('highlighted');
      document.getElementById('letter_shift-1-1').classList.add('highlighted');
      break;
    case 'в':
      document.getElementById('letter_в').classList.add('highlighted');
      break;
    case 'В':
      document.getElementById('letter_в').classList.add('highlighted');
      document.getElementById('letter_shift-1-1').classList.add('highlighted');
      break;
    case 'а':
      document.getElementById('letter_а').classList.add('highlighted');
      break;
    case 'А':
      document.getElementById('letter_а').classList.add('highlighted');
      document.getElementById('letter_shift-1-1').classList.add('highlighted');
      break;
    case 'п':
      document.getElementById('letter_п').classList.add('highlighted');
      break;
    case 'П':
      document.getElementById('letter_п').classList.add('highlighted');
      document.getElementById('letter_shift-1-1').classList.add('highlighted');
      break;
    case 'р':
      document.getElementById('letter_р').classList.add('highlighted');
      break;
    case 'Р':
      document.getElementById('letter_р').classList.add('highlighted');
      document.getElementById('letter_shift-1-1').classList.add('highlighted');
      break;
    case 'о':
      document.getElementById('letter_о').classList.add('highlighted');
      break;
    case 'О':
      document.getElementById('letter_о').classList.add('highlighted');
      document.getElementById('letter_shift-1-1').classList.add('highlighted');
      break;
    case 'л':
      document.getElementById('letter_л').classList.add('highlighted');
      break;
    case 'Л':
      document.getElementById('letter_л').classList.add('highlighted');
      document.getElementById('letter_shift-1-1').classList.add('highlighted');
      break;
    case 'д':
      document.getElementById('letter_д').classList.add('highlighted');
      break;
    case 'Д':
      document.getElementById('letter_д').classList.add('highlighted');
      document.getElementById('letter_shift-1-1').classList.add('highlighted');
      break;
    case 'ж':
      document.getElementById('letter_ж').classList.add('highlighted');
      break;
    case 'Ж':
      document.getElementById('letter_ж').classList.add('highlighted');
      document.getElementById('letter_shift-1-1').classList.add('highlighted');
      break;
    case 'э':
      document.getElementById('letter_э').classList.add('highlighted');
      break;
    case 'Э':
      document.getElementById('letter_э').classList.add('highlighted');
      document.getElementById('letter_shift-1-1').classList.add('highlighted');
      break;
    case 'я':
      document.getElementById('letter_я').classList.add('highlighted');
      break;
    case 'Я':
      document.getElementById('letter_я').classList.add('highlighted');
      document.getElementById('letter_shift-1-1').classList.add('highlighted');
      break;
    case 'ч':
      document.getElementById('letter_ч').classList.add('highlighted');
      break;
    case 'Ч':
      document.getElementById('letter_ч').classList.add('highlighted');
      document.getElementById('letter_shift-1-1').classList.add('highlighted');
      break;
    case 'с':
      document.getElementById('letter_с').classList.add('highlighted');
      break;
    case 'С':
      document.getElementById('letter_с').classList.add('highlighted');
      document.getElementById('letter_shift-1-1').classList.add('highlighted');
      break;
    case 'м':
      document.getElementById('letter_м').classList.add('highlighted');
      break;
    case 'М':
      document.getElementById('letter_м').classList.add('highlighted');
      document.getElementById('letter_shift-1-1').classList.add('highlighted');
      break;
    case 'и':
      document.getElementById('letter_и').classList.add('highlighted');
      break;
    case 'И':
      document.getElementById('letter_и').classList.add('highlighted');
      document.getElementById('letter_shift-1-1').classList.add('highlighted');
      break;
    case 'т':
      document.getElementById('letter_т').classList.add('highlighted');
      break;
    case 'Т':
      document.getElementById('letter_т').classList.add('highlighted');
      document.getElementById('letter_shift-1-1').classList.add('highlighted');
      break;
    case 'ь':
      document.getElementById('letter_ь').classList.add('highlighted');
      break;
    case 'Ь':
      document.getElementById('letter_ь').classList.add('highlighted');
      document.getElementById('letter_shift-1-1').classList.add('highlighted');
      break;
    case 'б':
      document.getElementById('letter_б').classList.add('highlighted');
      break;
    case 'Б':
      document.getElementById('letter_б').classList.add('highlighted');
      document.getElementById('letter_shift-1-1').classList.add('highlighted');
      break;
    case 'ю':
      document.getElementById('letter_ю').classList.add('highlighted');
      break;
    case 'Ю':
      document.getElementById('letter_ю').classList.add('highlighted');
      document.getElementById('letter_shift-1-1').classList.add('highlighted');
      break;
    case '.':
      document.getElementById('letter_.').classList.add('highlighted');
      break;
    case ',':
      document.getElementById('letter_.').classList.add('highlighted');
      document.getElementById('letter_shift-1-1').classList.add('highlighted');
      break;
    case ' ':
    document.getElementById('letter_space-1').classList.add('highlighted');
    break;


    default:
      break;
  }


 





} 






const controlers = document.getElementById('controlers');

mainInput.addEventListener('input', () => {

  if ( mainInput.value.length === 1 ) {
    controlers.classList.remove('visible');
    controlers.classList.add('invisible');
  }

if (handRuAct) {
  let nextLetter = textBox.innerText[mainInput.value.length];

  let currentLetter = textBox.innerText[mainInput.value.length-1];

  for(let i = 0; i < 5; i++) {
    for(let j = 0; j < 15; j++) {
      try {
        keyboardRu.children[i].children[j].classList.remove('highlighted');
      } catch (error) {
        break;
      }
    }
  }

  highlight(nextLetter);

} else {

}



  



const arrayQuote = textBox.querySelectorAll('span');
const arrayValue = mainInput.value.split('');

let correct = 0;
  arrayQuote.forEach((characterSpan, index) => {
    const character = arrayValue[index]
    if (character == null) {
      characterSpan.classList.remove('correct');
      characterSpan.classList.remove('incorrect');

    } else if (character === characterSpan.innerText) {
      characterSpan.classList.remove('incorrect');
      characterSpan.classList.add('correct');

    } else if (character !== characterSpan.innerText) {
      characterSpan.classList.remove('correct');
      characterSpan.classList.add('incorrect');
    }
  })

  for(let i = textBox.childNodes.length-1; i > 0; i--) {
      if (textBox.children[i].classList.contains('correct')) {
        mainInput.style.borderBottom = '1px solid #5ee26b';
        textBox.style.border = '1px solid #5ee26b';
        break;
      } else if ( textBox.children[i].classList.contains('incorrect') ) {
        mainInput.style.borderBottom = '1px solid red';
        textBox.style.border = '1px solid red';
        break;
      } else if ( mainInput.value.length == '' ) {
        mainInput.style.borderBottom = '1px solid #a9a9a9';
        textBox.style.border = '1px solid #4e4e4e';
        break;
      } else if ( mainInput.value.length == 1 && (textBox.innerText[0] == mainInput.value[0]) ) {
        console.log('pr');
        mainInput.style.borderBottom = '1px solid #5ee26b';
        textBox.style.border = '1px solid #5ee26b';
        break;
      } else {
        mainInput.style.borderBottom = '1px solid red';
        textBox.style.border = '1px solid red';
      }
  }


  progressBar.style.width = `${Math.floor((mainInput.value.length/wordLength)*100)}%`;
  

  if (mainInput.value.length >= wordLength) {
    console.log(textBox.children.length, wordLength, "DA");
    mainInput.setAttribute('readonly', 'readonly');
    controlers.classList.remove('invisible');
    controlers.classList.add('visible');
  }

})





















// if (mainInput.value[mainInput.value.length - 1] == textBox.innerHTML[pointer]) {
//   // console.log('privet', textBox.innerHTML[pointer], pointer, mainInput.value.length);

//   // textBox.innerHTML = textBox.innerHTML.substring(0, pointer) + `<span style="color: green;">${textBox.innerHTML[pointer]}</span>` + textBox.innerHTML.substring(pointer + 1);

//   // console.log(textBox.innerHTML);

//   // pointer=pointer+36;
//   console.log("checked");
//   checked.innerHTML += textBox.innerHTML.substring(0, 1);
//   textBox.innerHTML = textBox.innerHTML.substring(1);
//   console.log(checked.innerText, checked.innerHTML.length);
// } else {
//   mainInput.style.borderBottom = '1px solid red';
//   textBox.style.border = '1px solid red';
// }


// if ( (checked.innerHTML.length) > mainInput.value.length-1 ) {
//   mainInput.style.borderBottom = '1px solid #a9a9a9';
//   document.getElementById('text-box').style.border = '1px solid #4e4e4e';
//   console.log('proshlo', checked.innerHTML, textBox.innerHTML);
//   console.log('vot', checked.innerHTML.substring(checked.innerHTML));
//   textBox.innerHTML = checked.innerHTML.substring(checked.innerHTML.length-1) + textBox.innerHTML;
//   checked.innerHTML = checked.innerHTML.substring(0, checked.innerHTML.length);
//   // checked.innerHTML = 
//   // checked.innerHTML = checked.innerHTML.substring(0, checked.innerHTML.length-2);
  
//   // console.log(textBox.innerHTML.substring(0, pointer),textBox.innerHTML[pointer], textBox.innerHTML.substring(pointer + 1));
//   // textBox.innerHTML = extraTextBox.innerHTML.substring(0, 3) + textBox.innerHTML[pointer] + textBox.innerHTML.substring(pointer + 1);
// }