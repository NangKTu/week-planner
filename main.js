const $openbutton = document.querySelector('.addNew');
const $modal = document.querySelector('.modal');
const $closebutton = document.querySelector('#button1');

$openbutton.addEventListener('click', function () {
  console.log('clicked')
  $modal.className = 'modal shown';
});

$closebutton.addEventListener('click', function () {
  $modal.className = 'modal hidden';
});
