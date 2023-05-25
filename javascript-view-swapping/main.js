const $tabContainer = document.querySelector('.tab-container');
const $tab = document.querySelectorAll('.tab');
const $view = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', function (e) {
  if (e.target.matches('.tab')) {
    const dataView = e.target.getAttribute('data-view');

    console.log(e.target);
    console.log($tab[0]);
    for (let i = 0; i < $tab.length; i++) {
      if (e.target === $tab[i]) {
        $tab[i].className = 'tab active';
      } else {
        $tab[i].className = 'tab';
      }
    }

    for (let i = 0; i < $view.length; i++) {
      if ($view[i].getAttribute('data-view') === dataView) {
        $view[i].className = 'view';
      } else {
        $view[i].className = 'view hidden';
      }
    }
  }
});
