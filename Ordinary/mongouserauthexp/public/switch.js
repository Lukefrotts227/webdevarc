function hideDiv(div) {
    
    try {
        div.style.display = "none";
    } catch (error) {
        console.error("Error hiding div:", error);
    }
}

function showDiv(div) {
    try {
        div.style.display = "block";
    } catch (error) {
        console.error("Error showing div:", error);
    }
}

function showRegister() {
    console.log('showregister Called'); 
    try {
        const register = document.getElementById('registration');
        const login = document.getElementById('login');

        if (register && login) {
            hideDiv(login);
            showDiv(register);
        } else {
            console.error("One or both elements not found.");
        }
    } catch (error) {
        console.error("Error in showRegister:", error);
    }
}

function showLogin() {
    console.log('showlogin is called'); 
    try {
        const register = document.getElementById('registration');
        const login = document.getElementById('login');

        if (register && login) {
            hideDiv(register);
            showDiv(login);
        } else {
            console.error("One or both elements not found.");
        }
    } catch (error) {
        console.error("Error in showLogin:", error);
    }
}


window.onload = showLogin; 