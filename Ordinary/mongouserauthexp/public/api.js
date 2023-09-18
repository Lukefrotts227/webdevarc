const Routes = {
    index: '/',
    register: '/auth/register', 
    login: '/auth/login', 
    success: '/page/success', 
}; 

export const registerPost = async (username, password) => {
    try{
        const response = await fetch(Routes.register, {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
            }, 
            body: JSON.stringify({ username, password }),
        }); 

        if(response.status === 201){
            return { success: true }; 

        } else{
            const data = await response.json(); 
            return { success: false, error: data.error || 'Failed to register' }; 

        }


    }catch(error){
        console.error('Error:', error); 
        return { success: false, error: 'Failed to register' }
    }
}; 


export const loginPost = async (username, password) =>{
    try{

        const response = await fetch(Routes.login, {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json', 
            }, 
            body: JSON.stringify({ username, password }),
        }); 

        if(response.status === 200){
            const data = await response.json(); 
            const token = data.token; 

            localStorage.setItem('token', token); 

            return { success: true }; 

        } else{
            const data = await response.json();
            return { success: false, error: data.message || 'Failed to authenticate' };
        }

    } catch(error){
        console.error("Error:", error); 
        return { success: false, error: 'Failed to login' }; 
    }
}; 
