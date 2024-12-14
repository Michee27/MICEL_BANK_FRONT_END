import React, { createContext, useReducer, useContext } from 'react';

// Estado inicial
const initialState = {
    message: '',
    type: '', // 'success' ou 'error'
    isVisible: false,
};

// Tipos de ação
const SHOW_TOAST = 'SHOW_TOAST';
const HIDE_TOAST = 'HIDE_TOAST';

// Reducer para gerenciar o estado
function toastReducer(state, action) {
    switch (action.type) {
        case SHOW_TOAST:
            return { message: action.payload.message, type: action.payload.type, isVisible: true };
        case HIDE_TOAST:
            return { ...state, isVisible: false };
        default:
            return state;
    }
}

// Criar contexto
const ToastContext = createContext();

// Provedor de contexto
export const ToastProvider = ({ children }) => {
    const [state, dispatch] = useReducer(toastReducer, initialState);

    // Funções para disparar mensagens
    const dispatchSuccessMsg = (message) => {
        dispatch({ type: SHOW_TOAST, payload: { message, type: 'success' } });
    };

    const dispatchErrorMsg = (message) => {
        dispatch({ type: SHOW_TOAST, payload: { message, type: 'error' } });
    };

    const hideToast = () => {
        dispatch({ type: HIDE_TOAST });
    };

    return (
        <ToastContext.Provider value={{ ...state, dispatchSuccessMsg, dispatchErrorMsg, hideToast }}>
            {children}
            {state.isVisible && <Toast message={state.message} type={state.type} hideToast={hideToast} />}
        </ToastContext.Provider>
    );
};

// Custom hook para usar o contexto
export const useToast = () => useContext(ToastContext);

// Componente Toast
const Toast = ({ message, type, hideToast }) => {
    React.useEffect(() => {
        const timer = setTimeout(() => {
            hideToast();
        }, 3000); // Toast desaparece após 3 segundos
        return () => clearTimeout(timer);
    }, [hideToast]);

    return (
        <div className={`toast toast-${type}`}>
            {message}
        </div>
    );
};
