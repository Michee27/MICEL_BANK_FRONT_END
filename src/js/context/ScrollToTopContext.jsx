import { createContext, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollToTopContext = createContext();

export const ScrollToTopProvider = ({ children }) => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <ScrollToTopContext.Provider value={{}}>
            {children}
        </ScrollToTopContext.Provider>
    );
};
