import React, { createContext, useContext, useRef } from 'react';
import { Toast } from 'primereact/toast';

// Criar contexto para o Toast
const ToastContext = createContext();

// Provedor de Toast
export const ToastProvider = ({ children }) => {
    const toastRef = useRef(null);

    const showSuccess = (message) => {
        toastRef.current.show({ severity: 'success', detail: message, life: 3000 });
    };

    const showError = (message) => {
        toastRef.current.show({ severity: 'error', detail: message, life: 3000 });
    };

    return (
        <ToastContext.Provider value={{ showSuccess, showError }}>
            <Toast ref={toastRef} position="top-right" />
            {children}
        </ToastContext.Provider>
    );
};

// Hook personalizado para usar o Toast
export const useToast = () => {
    return useContext(ToastContext);
};
