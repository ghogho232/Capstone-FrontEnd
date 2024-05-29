import React, { createContext, useState, useContext } from 'react';
import axios from 'axios';

const UrlContext = createContext();

export const UrlProvider = ({ children }) => {
    const [imageUrl, setImageUrl] = useState('');

    const setUrl = (url) => {
        setImageUrl(url);
    };

    return (
        <UrlContext.Provider value={{ imageUrl, setUrl }}>
            {children}
        </UrlContext.Provider>
    );
};

export const useUrl = () => useContext(UrlContext);