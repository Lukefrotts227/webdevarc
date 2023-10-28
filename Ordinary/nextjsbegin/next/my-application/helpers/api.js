import axios from 'axios'; 

export const Login = async (credentials) => {
    const response = await axios.post('/login', credentials); 
    if(response.data.token){
        document.cookie = `authToken=${res.data.token}; HttpOnly; Secure`;
    }else {
        console.error('Invalid credentials');
    }
    return response
};

export const Register = async (formData) =>{
    const reponse = await axios.post('/register', credentials); 
}; 