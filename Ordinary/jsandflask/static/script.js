
const containedTitle = document.getElementById('title-container'); 

function animfun(element, animation){
    element.classList.add(animation); 
}
containedTitle.addEventListener('click', function () {
    animfun(containedTitle, 'pulse');
    console.log('did it!!'); 
  });


