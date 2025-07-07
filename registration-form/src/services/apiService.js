import axios from "axios"


export const registerUser = async (userData) => {
    try {
        const response = await axios.post('/api/register', {
            fullName: userData.fullName,
            email: userData.email,
            phone: userData.phone,
            password: userData.password
        });

        return { success: true, data: response }
        
    } catch (error) {
        console.error('Registration error:', error)
        return { success: false, error: error }
    }
};