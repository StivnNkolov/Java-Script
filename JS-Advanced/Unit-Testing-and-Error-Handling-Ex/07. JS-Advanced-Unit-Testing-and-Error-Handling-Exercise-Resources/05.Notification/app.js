function notify(message) {
  let notificationDivElement = document.querySelector('#notification');
  notificationDivElement.addEventListener('click', (e)=> {
    notificationDivElement.setAttribute('style', 'display:none')
  })
  notificationDivElement.setAttribute('style', 'display:block')
  notificationDivElement.textContent = message;
}