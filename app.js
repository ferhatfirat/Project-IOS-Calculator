const value = document.getElementsByClassName("value");
// console.log(value[0]);
const result = document.getElementsByClassName("result");
// console.log(result);
const items = document.getElementsByClassName("items");
// console.log(items);


for (let i=3 ; i < items.length-1; i++) {
    items[i].addEventListener('click' , () => {value[0].innerHTML += items[i].textContent} , false ) ;
 };

 items[0].addEventListener('click' , () => {window.location.reload()},false);
 items[18].addEventListener('click' , () => {result[0].innerHTML = eval(value[0].textContent)},false);

 items[1].addEventListener('click' , () => {value[0].innerHTML = value[0].innerText.slice(0,-1) },false);



