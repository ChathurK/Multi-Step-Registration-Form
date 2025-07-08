import React, { createContext, useContext, useState } from 'react'

const RegistrationContext = createContext();

export const RegistrationProvider = ({ children }) => {
  
  const [currentStep, setCurrentStep] = useState(1);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  })

  const [errors, setErrors] = useState({})
  
  const [loading, setLoading] = useState(false);

  const updateFormData = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const resetFormData = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: ''
    })
  }

  const values = {
    currentStep,
    setCurrentStep,
    formData,
    updateFormData,
    resetFormData,
    errors,
    setErrors,
    loading,
    setLoading
  }

  return (
    <RegistrationContext.Provider value={values}>
      {children}
    </RegistrationContext.Provider>
  );
}

export const useRegistration = () => {
  const context = useContext(RegistrationContext);

  if (!context) {
    throw new Error("useRegistration must be used within a RegistrationProvider");
    
  }

  return context;
}
