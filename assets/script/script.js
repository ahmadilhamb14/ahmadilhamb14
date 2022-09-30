var iconMenu = document.getElementById('icon-menu');
var dropdown = document.getElementById('dropdown');
iconMenu.addEventListener('click', function () {
  dropdown.classList.toggle('active');
});
dropdown.addEventListener('click', function () {
  dropdown.classList.toggle('active');
});
