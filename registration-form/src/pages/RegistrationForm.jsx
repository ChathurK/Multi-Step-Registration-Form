import React from 'react'
import { useRegistration } from '../context/RegistrationContext'

const RegistrationForm = () => {
    const { currentStep, formData, updateFormData } = useRegistration();


    const handlChange = (event) => {
        const { name, value } = event.target;
        updateFormData(name, value);
    }


    const handleClick = () => {

    }

    return (
        <div>
            <div>
                <h3>Step {currentStep}</h3>


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
                            </div>
                        </div>

                    )}

                    <button onClick={handleClick}>{currentStep === 1 ? 'Next' : 'Submit'}</button>

                </form>
            </div>
            <p></p>
        </div>
    )
}

export default RegistrationForm
