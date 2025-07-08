import React from 'react'
import styles from './LoadingIndicator.module.css'
import { useRegistration } from '../context/RegistrationContext'

function LoadingIndicator() {

    const loading = useRegistration();

  return (
      <div className={styles.loadingIndicator}></div>
  )
}

export default LoadingIndicator
