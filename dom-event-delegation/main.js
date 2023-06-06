const taskList = document.querySelector('.task-list');

taskList.addEventListener('click', function (e) {
  const closest = e.target.closest('.task-list-item');

  console.log('Event Target: ', e.target);
  console.log('Event Tag Name: ', e.target.tagName);
  console.log('Closest: ', closest);

  if (e.target.tagName === 'BUTTON') {
    closest.remove();
  }
});
