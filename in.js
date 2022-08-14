// const key = document.getElementById('key'),
//   code = document.getElementById('code'),
//   keyCode = document.getElementById('keyCode'),
//   keyCodeLarge = document.getElementById('keyCodeLarge'),
//   info = document.getElementById('info'),
//   hiddenElements = document.querySelectorAll('.hidden');


//   document.onkeydown = function (e) {
//     [].forEach.call(hiddenElements, function (el) {
//       el.classList.remove('hidden');
//     });
//     info.classList.add('hidden');
//     key.innerHTML = e.key;
//     code.innerHTML = e.code;
//     keyCode.innerHTML = e.keyCode;
//     keyCodeLarge.innerHTML = e.keyCode;
//   };


let lekey = document.querySelector(".le-keys");
let numcode = document.querySelector(".num-codes");
let codes= document.querySelector(".codess");
let keys = document.querySelector(".keyss");

document.addEventListener("keypress", function(e){
  lekey.innerText = `${e.key}`;
  numcode.innerText = `${e.charCode}`;
  codes.innerText =`${e.charCode}`;
  keys.innerText =`${e.key}`;
})