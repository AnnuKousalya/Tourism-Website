const btn = document.getElementById('btn');
btn.addEventListener('click', function onClick() {
  btn.style.backgroundColor = 'green';
  btn.textContent = 'Transaction Success';
  btn.style.color = 'white';
});