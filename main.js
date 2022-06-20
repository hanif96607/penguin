'use strict' ;

let typed = '';
let untyped = '';
let score = 0;

const typedfield = document.getElementById('typed');
const untypedfield = document.getElementById('untyped');
const wrap = document.getElementById('wrap');
const start = document.getElementById('start');
const count = document.getElementById('count');

// text list
const textLists = [
  'hello world yoo' ,
  'damn you' ,
  'aye enwaaan' ,
  'i am japanese','let it be','samurai',
   'typing game','information technology',
   'i want to be a programmer','what day is today?',
   'i want to build a web app','nice to meet you',
   'chrome firefox edge safari','machine learning',
   'brendan eich','john resig','react vue angular',
   'netscape communications','undefined null nan',
   'thank you very much','google apple facebook amazon',
   'ecript','console.log','for while if switch',
   'var let const','windows mac linux ios android',
   'programming','the hell is it', 'come on mannnn',
]




// random text
const createText = () => {
  typed = '';
  typedfield.textContent = typed;
  

let random = Math.floor(Math.random() * textLists.length);
  untyped = textLists[random];
  untypedfield.textContent = untyped;

 
};





// keypress check


const keyPress = e => {

  if (e.key !== untyped.substring(0 , 1)) {
    wrap.classList.add('mistyped');
    setTimeout(() => {
      wrap.classList.remove('mistyped');
    } , 100);
    return;
  };

  typed += untyped.substring(0 , 1);
  untyped = untyped.substring(1);
  typedfield.textContent = typed;
  untypedfield.textContent = untyped;
  wrap.classList.remove('mistyped');
  score++;

  if (untyped === '') {
    createText();
  }
};

 



// rankcheck
const rankCheck = score => {
  let text = ''; 

  // if (score < 100) {
  //   text = `your rank is ' C ' to get next rank ${100 - score}`;
  // } else if (score < 200){
  //   text = `your rank is ' B ' to get next rank ${200 - score}`;
  // } else if (score < 300) {
  //   text = `your rank is ' A ' to get next rank ${300 - score}`;
  // } else {
  //   text = `your rank is ' S ' `;
  // }
  // 

  switch (true){
    case  score< 100:
      text = `your rank is ' C ' to get next rank ${100 - score}`;
      break;
      case  score< 200:
      text = `your rank is ' B ' to get next rank ${200 - score}`;
      break;
      case  score< 300:
      text = `your rank is ' A ' to get next rank ${300 - score}`;
      break;
      default:
      text = `your rank is ' S ' `;
  }
      return `you typed ${score}letters \n ${text} \n [ok] to retry [cancel] to finish`;
  
};

let time = 60 ;
function timer() {
  
  const timeoutId = setTimeout(timer , 1000);

  if(time <= 0) {
    const result = confirm(rankCheck(score));
    clearTimeout(timeoutId);

    if (result === true) {
      window.location.reload()
    }
  };

  count.textContent = time--;

}

start.addEventListener('click' , () => {
  timer();

  createText();

  start.classList.add('gamestart');

  document.addEventListener('keypress' , keyPress);
});
untypedfield.textContent = "Click to Start";