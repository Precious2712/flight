import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const SearchApi = createContext();

export const SearchProvider = ({ children }) => {
    const product = () => {
        console.log('hello');
    }

    return (
        <SearchApi.Provider value={{product}}>
            {children}
        </SearchApi.Provider>
    );
};