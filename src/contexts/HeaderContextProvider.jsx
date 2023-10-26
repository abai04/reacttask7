import React, { createContext } from 'react';

export const headerContext = createContext()

const HeaderContextProvider = ({children}) => {
    const change = (checked, setTheme, darkTheme, lightTheme) => {
    checked ? setTheme(darkTheme) : setTheme(lightTheme)
    };
    return (
        <headerContext.Provider value={{change}}>{children}</headerContext.Provider>
    );
};

export default HeaderContextProvider;