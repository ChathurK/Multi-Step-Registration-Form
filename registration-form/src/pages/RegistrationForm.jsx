import React from 'react'
import { useRegistration } from '../context/RegistrationContext'
import { step1Validation, step2Validation } from '../utils/validation';
import StepIndicator from '../components/StepIndicator';
import { registerUser } from '../services/apiService';
import LoadingIndicator from '../components/LoadingIndicator';

const RegistrationForm = () => {
    const { currentStep, setCurrentStep, formData, resetFormData, updateFormData, loading, setLoading, errors, setErrors } = useRegistration();
    
    const handlChange = (event) => {
        const { name, value } = event.target;

        updateFormData(name, value);

        const updatedFormData = {
            ...formData,
            [name]: value
        }

        // setTimeout(() => {
        //     if (currentStep === 1) {
        //         const validation = step1Validation({
        //             ...formData,
        //             [name]: value
        //         })
                
        //         setErrors(validation.errors)
        //     } else {
        //         const validation = step2Validation({
        //             ...formData,
        //             [name]: value
        //         })
        //         console.log(validation.errors);
        //         setErrors(validation.errors)
        //     }
        // }, 100);

        if (currentStep === 1) {
            const validation = step1Validation(updatedFormData)
            setErrors(validation.errors)
            // console.log(Object.keys(validation.errors).length);
            
            
        } else {
            const validation = step2Validation(updatedFormData)
            setErrors(validation.errors)
            
        }

    };


    const handleClick = async (event) => {
        event.preventDefault();

        if (currentStep === 1) {

            const validation = step1Validation(formData);
            if (validation.isValid) {
                setCurrentStep(2);

            } else {
                setErrors(validation.errors)
                console.error(validation.errors)
            }

        } else {

            const validation = step2Validation(formData);

            if (validation.isValid) {
                try {
                    setLoading(true)
                    const result = await registerUser(formData)

                    if (result.success) {
                        console.log("Registration successful!", result.data)
                        alert("Registration successful!")
                        console.log("Redirecting...")
                        setErrors({})
                        setTimeout(() => {
                            setCurrentStep(1)
                            resetFormData()
                            setLoading(false)
                        }, 2000);

                    } else {
                        console.error("Registration failed", result.error)
                        // setLoading(false)

                    }

                } catch (error) {
                    console.error(error)
                    // setLoading(false)

                } finally {
                    setTimeout(() => {
                        setLoading(false)
                        setCurrentStep(1)
                        resetFormData()
                    }, 5000);
                }

            } else {
                setErrors(validation.errors)
                console.error(validation.errors)
            }
        }
    }

    const handleClickBack = (event) => {
        event.preventDefault();
        setErrors({})
        setCurrentStep(1);
    };

    if (loading) {
        return <LoadingIndicator />
    }

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
                        <button onClick={handleClick} disabled={Object.keys(errors).length > 0}>
                            {currentStep === 1 ? 'Next' : loading ? "Submitting..." : "Submit"}
                        </button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default RegistrationForm
