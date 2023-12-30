const textContainers = document.querySelectorAll('.text-container div');

try{
textContainers.forEach(function(container) {
  const maxWords =3;
  const text = container.querySelector('p').textContent;
  const words = text.split(' ').slice(0, maxWords).join(' ');
  if(text.length > maxWords) {
    container.querySelector('p').textContent = words + '...';
  }else{
    container.querySelector('p').textContent = words;
  }
})}catch(err){
  console.log(err)
}