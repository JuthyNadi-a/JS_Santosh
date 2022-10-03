// write to-do app

//get dom elements and store in js variables
const form = document.querySelector('form');
const ul = document.querySelector('ul');
const btn = document.querySelector('button');
const input = document.querySelector('#item')

//use local storage to put the items in array
//use json parse to get items
//else initialize empty array
        /* let itemsArray = [];
        if (localStorage.getItem(items)) {
            itemsArray = JSON.parse(localStorage.getItem('items'));
        } else {
            itemsArray = [];
        } */
let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

// save in local storage
localStorage.setItem('items', JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('items'))
//list of items nad append to html
const liMaker = (text) => {
const list = document.createElement('li');
list.textContent = text;
ul.appendChild(list)
};
//add event listener for the form, submit
form.addEventListener('submit', function (e) {
    e.preventDefault();
    //push the items inside itemsArray
    itemsArray.push(input.value);
    localStorage.setItem('items', JSON.stringify(itemsArray))
    liMaker(input.value);
    input.value = '';
});
//iterate over the data
data.forEach(item => {
    liMaker(item);
})


//event listener for click button
btn.addEventListener('click', fucntion = () => {
    localStorage.clear();
    while (ul.firstChild) {
        ul.removeChild(ul.firstChild)
    }
    itemsArray = [];
});

