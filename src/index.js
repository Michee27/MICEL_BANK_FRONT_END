import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Estilos personalizados
import App from './App';

// Importações CSS do PrimeReact e PrimeIcons
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import { ToastProvider } from './js/context/ToastContext';
import { AuthProvider } from './js/context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ToastProvider >
      <AuthProvider >
        <App />
      </AuthProvider>
    </ToastProvider>
  </React.StrictMode >
);
