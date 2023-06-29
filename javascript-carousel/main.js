const $lessThanIconElement = document.querySelector('.fa-less-than');
const $greaterThanIconElement = document.querySelector('.fa-greater-than');
const $imageElement = document.querySelector('.image');
const $ulElement = document.querySelector('ul');
const imagesArray = [
  'images/001.png',
  'images/004.png',
  'images/007.png',
  'images/025.png',
  'images/039.png',
];
let index = 0;
let renderImagesInterval = setInterval(renderImage, 3000);
renderCircles();
const $allIconElements = document.querySelectorAll('.fa-circle');

function renderImage() {
  deselectCircleByIndex();

  if (index === imagesArray.length - 1) {
    index = 0;
  } else {
    index++;
  }
  $imageElement.src = imagesArray[index];
  selectCircleByIndex();
}

function renderCircles() {
  for (let i = 0; i < imagesArray.length; i++) {
    const li = document.createElement('li');
    const icon = document.createElement('i');

    if (i === 0) {
      icon.className = 'fa-solid fa-circle fa-lg';
    } else {
      icon.className = 'fa-regular fa-circle fa-lg';
    }
    icon.setAttribute('data-image-index', i);
    $ulElement.appendChild(li);
    li.appendChild(icon);
  }
}

function selectCircleByIndex() {
  for (let i = 0; i < $allIconElements.length; i++) {
    const int = parseInt($allIconElements[i].getAttribute('data-image-index'));

    if (int === index) {
      $allIconElements[i].className = 'fa-solid fa-circle fa-lg';
    }
  }
}

function deselectCircleByIndex() {
  for (let i = 0; i < $allIconElements.length; i++) {
    const int = parseInt($allIconElements[i].getAttribute('data-image-index'));

    if (int === index) {
      $allIconElements[i].className = 'fa-regular fa-circle fa-lg';
    }
  }
}

$lessThanIconElement.addEventListener('click', function () {
  clearInterval(renderImagesInterval);
  deselectCircleByIndex();

  if (index === 0) {
    index = imagesArray.length - 1;
  } else {
    index--;
  }

  $imageElement.src = imagesArray[index];
  selectCircleByIndex();
  renderImagesInterval = setInterval(renderImage, 3000);
});

$greaterThanIconElement.addEventListener('click', function () {
  clearInterval(renderImagesInterval);
  deselectCircleByIndex();

  if (index === imagesArray.length - 1) {
    index = 0;
  } else {
    index++;
  }

  $imageElement.src = imagesArray[index];
  selectCircleByIndex();
  renderImagesInterval = setInterval(renderImage, 3000);
});

$ulElement.addEventListener('click', function (e) {
  if (e.target.nodeName === 'I') {
    const int = parseInt(e.target.getAttribute('data-image-index'));
    clearInterval(renderImagesInterval);
    deselectCircleByIndex();
    index = int;
    $imageElement.src = imagesArray[index];
    selectCircleByIndex();
    renderImagesInterval = setInterval(renderImage, 3000);
  }
});
