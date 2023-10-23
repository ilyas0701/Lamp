let btn = document.querySelector('.btn'),
    body = document.querySelector('body');

let blockText = document.querySelector('.someText');
let textP = document.createElement('p');
let textAdded = false;

btn.onclick = function() {
    body.classList.toggle('on');
    if(textAdded){
        blockText.removeChild(textP);
        textAdded = false;
    } else {
        textP.textContent = 'Happy birthday!';
        blockText.append(textP);
        textAdded = true;
    }
}








