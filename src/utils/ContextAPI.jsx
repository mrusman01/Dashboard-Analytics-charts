import React, { createContext, useState } from 'react';

export const DataContext = createContext();

const ContextAPI = (props) => {
    const [mode, setMode] = useState('light');
    const [loader, setLoader] = useState(false);

    const toggleMode = () => {
        setMode((val) => (val === 'light' ? 'dark' : 'light'));
    };

    return (
        <DataContext.Provider
            value={{
                loader,
                setLoader,
                mode,
                toggleMode,
            }}
        >
            {props.children}
        </DataContext.Provider>
    );
};

export default ContextAPI;
