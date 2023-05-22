const $clickButtton = document.querySelector('.click-button');
const $hoverButton = document.querySelector('.hover-button');
const $doubleClickButton = document.querySelector('.double-click-button');

function handleClick(event) {
  console.log('button clicked');
  console.log(event);
  console.log(event.target);
}
$clickButtton.addEventListener('click', handleClick);

function handleMouseover(event) {
  console.log('button hovered');
  console.log(event);
  console.log(event.target);
}
$hoverButton.addEventListener('mouseover', handleMouseover);

function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log(event);
  console.log(event.target);
}
$doubleClickButton.addEventListener('dblclick', handleDoubleClick);
