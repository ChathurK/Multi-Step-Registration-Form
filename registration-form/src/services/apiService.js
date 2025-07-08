import axios from "axios"


export const registerUser = async (userData) => {
    try {
        console.log("Form Submitted!")
        console.log("Waiting for confirmation...", userData)
        const response = await axios.post('/api/register', {
            fullName: userData.fullName,
            email: userData.email,
            phone: userData.phone,
            password: userData.password
        });

        return { success: true, data: response }
        
    } catch (error) {
        console.error('Registration error:', error.message)
        return { success: false, error: error }
    }
};