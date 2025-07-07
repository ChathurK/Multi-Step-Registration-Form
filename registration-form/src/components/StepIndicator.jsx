import React from 'react'
import styles from './StepIndicator.module.css'
import { useRegistration } from '../context/RegistrationContext'

function StepIndicator() {

    const { currentStep } = useRegistration();

    return (
        <div className={styles.stepIndicatorBorder}>
            <div className={currentStep === 1 ? styles.step1Indicator : styles.step2Indicator} />
        </div>
    )
}

export default StepIndicator
