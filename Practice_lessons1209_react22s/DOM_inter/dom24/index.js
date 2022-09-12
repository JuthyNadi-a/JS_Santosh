// TODO: when the user clicks on '#menu-sidebar' => toggle the class 'show' on '#app-sidebar'
let sideBar = document.querySelector('#app-sidebar');
let menuBar = document.querySelector('#menu-sidebar');
menuBar.addEventListener('click', function() {
    sideBar.classList.toggle('show');
});