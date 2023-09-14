function sayHi(){
    alert("HI"); 
}


document.addEventListener('DOMContentLoaded', function() {
    const colorForm = document.getElementById('colorForm'); 
    const colorInput = document.getElementById('colorInput'); 
    const elementToChange = document.getElementById('colorToChange'); 
    
    colorForm.addEventListener('submit', function(event) {
        event.preventDefault(); 
        const selectedColor = colorInput.value; 

        elementToChange.style.color = selectedColor; 
    })
})


// script.js
document.addEventListener('DOMContentLoaded', function() {
    const dropdownButton = document.querySelector('.dropdown-button');
    const dropdownContent = document.querySelector('.dropdown-content');

    dropdownButton.addEventListener('click', function() {
        // Toggle the visibility of the dropdown content
        if (dropdownContent.style.display === 'block') {
            dropdownContent.style.display = 'none';
        } else {
            dropdownContent.style.display = 'block';
        }
    });

    // Close the dropdown when clicking outside of it
    window.addEventListener('click', function(event) {
        if (!event.target.matches('.dropdown-button')) {
            dropdownContent.style.display = 'none';
        }
    });
});
