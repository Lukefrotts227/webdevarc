
import { registerPost, loginPost } from './api.js';



document.addEventListener('DOMContentLoaded', () => {
    const registrationForm = document.getElementById('registration-form');
    const loginForm = document.getElementById('login-form');
    const message = document.getElementById('message');
   

    // Handle user registration
    registrationForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const username = document.getElementById('reg-username').value;
        const password = document.getElementById('reg-password').value;

        // Use the registerPost function from api.js
        const result = await registerPost(username, password);

        if (result.success) {
            message.textContent = 'Registration successful';
            message.style.color = 'green';
            window.location.href = '/main.html'; 
        } else {
            message.textContent = result.error || 'Registration failed';
            message.style.color = 'red';
        }
    });

    // Handle user login
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const username = document.getElementById('login-username').value;
        const password = document.getElementById('login-password').value;

        
        const result = await loginPost(username, password);

        if (result.success) {
            window.location.href = '/main.html'; 
            
        } else {
            message.textContent = result.error || 'Authentication failed';
            message.style.color = 'red';
        }
    });


});





