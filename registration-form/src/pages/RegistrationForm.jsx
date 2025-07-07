import React from 'react'
import { useRegistration } from '../context/RegistrationContext'
import { step1Validation, step2Validation } from '../utils/validation';
import StepIndicator from '../components/StepIndicator';
import { registerUser } from '../services/apiService';

const RegistrationForm = () => {
    const { currentStep, setCurrentStep, formData, updateFormData, loading, setLoading, errors, setErrors } = useRegistration();


    const handlChange = (event) => {
        const { name, value } = event.target;

        updateFormData(name, value);

        setErrors((prev) => ({
            ...prev,
            [name]: '',
        }));
    };


    const handleClick = (event) => {
        event.preventDefault();

        if (currentStep === 1) {

            const validation = step1Validation(formData);
            if (validation.isValid) {
                setCurrentStep(2);
                setErrors({});
            } else {
                setErrors(validation.errors)
                console.error(validation.errors)
            }

        } else {

            const validation = step2Validation(formData);

            if (validation.isValid) {
                try {
                    setLoading(true)
                    const result = registerUser(formData)
                    console.log("Form Submitted!")
                    console.log("Waiting for confirmation...", formData)

                    if (result.success) {
                        console.log("Registration successful!", result.data)
                        console.log("Redirecting...")
                        setTimeout(setCurrentStep(1), 2000)

                    } else {
                        console.error("Registration failed", result.error)
                        alert("Registration failed. Please try again.")
                        
                    }
                    
                } catch (error) {
                    console.error(error)
                    alert("Error occured.")

                } finally {
                    setLoading(false)
                }

            } else {
                setErrors(validation.errors)
                console.error(validation.errors)
            }
        }
    }

    const handleClickBack = (event) => {
        event.preventDefault();

        setCurrentStep(1);
    };

    return (
        <div>
            <div>
                <h3>Step {currentStep}</h3>
                <StepIndicator />


                <form>

                    {currentStep === 1 && (

                        <div>
                            <div>
                                <label htmlFor="fullName">Full Name:</label><br />
                                <input
                                    type="text"
                                    name="fullName"
                                    placeholder="Enter your full name"
                                    value={formData.fullName}
                                    onChange={handlChange}
                                    required
                                />
                                {errors.fullName && <div>{errors.fullName}</div>}
                            </div>
                            <div>
                                <label htmlFor="fullName">Email:</label><br />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={handlChange}
                                    required
                                />
                                {errors.email && <div>{errors.email}</div>}
                            </div>
                            <div>
                                <label htmlFor="fullName">Phone Number:</label><br />
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="+94"
                                    value={formData.phone}
                                    onChange={handlChange}
                                    required
                                />
                            </div>
                        </div>
                    )}

                    {currentStep === 2 && (

                        <div>
                            <div>
                                <label htmlFor="password">Password</label><br />
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Enter a password"
                                    value={formData.password}
                                    onChange={handlChange}
                                    required
                                />
                                {errors.password && <div>{errors.password}</div>}
                            </div>
                            <div>
                                <label htmlFor="confirmPassword">Confirm Password</label><br />
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    placeholder="Confirm Password"
                                    value={formData.confirmPassword}
                                    onChange={handlChange}
                                    required
                                />
                                {errors.confirmPassword && <div>{errors.confirmPassword}</div>}
                            </div>
                        </div>

                    )}

                    <div>
                        <button type="button" onClick={handleClickBack} disabled={currentStep === 1}>Back</button>
                        <button onClick={handleClick} disabled={loading}>
                            {currentStep === 1 ? 'Next' : loading ? "Submitting..." : "Submit"}
                        </button>
                    </div>

                </form>
            </div>
            <p></p>
        </div>
    )
}

export default RegistrationForm
