var textarea = document.getElementById('message-text');
var button = document.getElementById('submit');
var hasil = document.getElementById('hasil');

button.addEventListener('click', function () {
  hasil.innerHTML = textarea.value;
  console.log(textarea.value);
});
