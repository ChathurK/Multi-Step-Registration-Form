import { RegistrationProvider } from "./context/RegistrationContext"
import RegistrationForm from "./pages/RegistrationForm"

function App() {
  return (

    <RegistrationProvider>

      <div className="App">
        <h1>Registration Form</h1>
        <RegistrationForm />
        
      </div>

    </RegistrationProvider>

  )
}

export default App
