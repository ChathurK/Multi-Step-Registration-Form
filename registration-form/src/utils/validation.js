export const step1Validation = (formData) => {

    const errors = {};

    if (!formData.fullName?.trim()) {
        errors.fullName = "Full name is required";
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!formData.email.trim()) {
        errors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
        errors.email = "Enter a valid email";
    }

    if (formData.phone?.trim()) {
        if (!/^\+94[0-9]{9}$/.test(formData.phone)) {
            errors.phone = "Phone must be in format +94xxxxxxxxx (9 digits after +94)";
        }
    }


    return {
        isValid: Object.keys(errors).length === 0,
        errors
    };
};


export const step2Validation = (formData) => {

    const errors = {};

    if (!formData.password?.trim()) {
        errors.password = "Password is required";
    } else if (formData.password.length < 6) {
        errors.password = "Password must be at least 6 characters";
    }


    if (!formData.confirmPassword?.trim()) {
        errors.confirmPassword = "Please confirm your password";
    } else if (formData.confirmPassword !== formData.password) {
        errors.confirmPassword = "Passwords does not match";
    }


    return {
        isValid: Object.keys(errors).length === 0,
        errors
    }
}