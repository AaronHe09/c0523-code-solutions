const span = document.querySelectorAll('span');
const body = document.querySelector('body');
const container = document.querySelector('.container');
let characterIndex = 0;
let typedTotal = 0;
let typedWrong = 0;

body.addEventListener('keydown', typing);

function typing(e) {
  typedTotal++;
  if (e.key !== span[characterIndex].textContent) {
    span[characterIndex].classList.add('wrong');
    typedWrong++;
  } else {
    span[characterIndex].classList.remove('underline');
    span[characterIndex].classList.remove('wrong');
    span[characterIndex].classList.add('right');
    if (characterIndex < 29) {
      span[characterIndex + 1].classList.add('underline');
    }
    characterIndex++;
    console.log(characterIndex);
  }

  showAccuracy();
}

function showAccuracy() {
  if (characterIndex === 30) {
    const newP = document.createElement('p');
    newP.textContent = `Typing Accuracy: ${Math.round(
      ((typedTotal - typedWrong) / typedTotal) * 100
    )}%`;
    container.appendChild(newP);
    body.removeEventListener('keydown', typing);
  }
}
