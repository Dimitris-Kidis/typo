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

handRu.addEventListener('click', () => {
  if (crossThree % 2 === 0) {
    handRuCross.style.display = 'block';
    crossThree++;
  } else {
    handRuCross.style.display = 'none';
    crossThree++;
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




mainInput.addEventListener('input', () => {

const arrayQuote = textBox.querySelectorAll('span');
const arrayValue = mainInput.value.split('');

let correct = true;
  arrayQuote.forEach((characterSpan, index) => {
    const character = arrayValue[index]
    if (character == null) {
      characterSpan.classList.remove('correct');
      characterSpan.classList.remove('incorrect');
      // mainInput.style.borderBottom = '1px solid #a9a9a9';
      // textBox.style.border = '1px solid #4e4e4e';
      correct = false;
    } else if (character === characterSpan.innerText) {
      characterSpan.classList.add('correct');
      characterSpan.classList.remove('incorrect');
      // mainInput.style.borderBottom = '1px solid #a9a9a9';
      // textBox.style.border = '1px solid #4e4e4e';
    } else if (character !== characterSpan.innerText) {
      characterSpan.classList.remove('correct');
      characterSpan.classList.add('incorrect');
      // mainInput.style.borderBottom = '1px solid red';
      // textBox.style.border = '1px solid red';

      correct = false;
    }
  })


  progressBar.style.width = `${Math.floor((mainInput.value.length/wordLength)*100)}%`;
  // progressBar.style.width =
  

  if (mainInput.value.length === wordLength) {
    console.log(textBox.children.length, wordLength, "DA");
    mainInput.setAttribute('readonly', 'readonly');
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