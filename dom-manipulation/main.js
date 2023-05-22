let userClicked = 0;
const hotButton = document.querySelector('.hot-button');
const clickCount = document.querySelector('.click-count');

hotButton.addEventListener('click', function () {
  userClicked++;
  clickCount.textContent = `Clicks ${userClicked}`;

  if (userClicked >= 5 && userClicked < 7) {
    hotButton.className = 'hot-button cool';
  } else if (userClicked >= 7 && userClicked < 10) {
    hotButton.className = 'hot-button tepid';
  } else if (userClicked >= 10 && userClicked < 13) {
    hotButton.className = 'hot-button warm';
  } else if (userClicked >= 13 && userClicked < 16) {
    hotButton.className = 'hot-button hot';
  } else if (userClicked >= 16) {
    hotButton.className = 'hot-button nuclear';
  }
});
