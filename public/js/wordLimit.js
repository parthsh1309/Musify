const textContainers = document.querySelectorAll('.text-container div');

textContainers.forEach(function(container) {
  const maxWords =3;
  const text = container.querySelector('p').textContent;
  console.log(text.length)
  const words = text.split(' ').slice(0, maxWords).join(' ');
  if(text.length > maxWords) {
    container.querySelector('p').textContent = words + '...';
  }else{
    container.querySelector('p').textContent = words;
  }
});