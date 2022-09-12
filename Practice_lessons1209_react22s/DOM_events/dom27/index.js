// TODO: log the button's textContent when it's clicked
let clickBtn = document.querySelector('#my-button');
clickBtn.addEventListener('click', function() {
    console.log(clickBtn.innerHTML)
})