# Registration Form Project

A two-step registration form built with React and Vite, featuring real-time validation and modern UI components.

## Project Setup Instructions

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ChathurK/Multi-Step-Registration-Form.git
   cd Multi-Step-Registration-Form
   ```

2. **Navigate to the registration-form directory**
   ```bash
   cd registration-form
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

### How to Run the App in Development Mode

```bash
npm run dev
```
This will start the development server at `http://localhost:5173`

## Project Structure

```
registration-form/
├── public/
│   └── form-windows-11-filled-96.png  # Favicon
├── src/
│   ├── api/
│   │   └── api.js                 # Axios configuration
│   ├── components/
│   │   ├── StepIndicator.jsx       # Visual step progress indicator
│   │   ├── LoadingIndicator.jsx    # Loading spinner component
│   │   └── *.module.css           # Component-specific styles
│   ├── context/
│   │   └── RegistrationContext.jsx # Global state management
│   ├── pages/
│   │   └── RegistrationForm.jsx    # Main form component
│   ├── services/
│   │   └── apiService.js          # API calls (mock implementation)
│   └── utils/
│       └── validation.js          # Form validation logic
├── .env                           # Environment variables
├── index.html
└── package.json
```

## Features

- **Multi-step form** with step indicator
- **Real-time validation** as user types
- **Loading states** during form submission
- **Error handling** with user-friendly messages

## Assumptions and Decisions Made

1. **Vite over Create React App**
   - Faster development server and build times
   - Better development experience

2. **CSS Styling** : No external CSS frameworks

3. **Custom Validation Logic** : Simple validation functions which can be enhanced with external libraries

4. **No Backend** : Currently uses mock API responses
5. **Authentication Handling** : No methods to save tokens from backend to local storage or state as well as no interceptors to attach tokens to requests
6. **Already Existing Users** : No validations or methods to handle already existing users