
import { createContext, ReactNode, useState } from "react";
import { useAxios } from './hooks/useAxios';
import { useContext } from "react";


const baseUrl: string = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en"

export type DataContextProps = {
    data: any[];
    loading: boolean;
    error: string | null;
    isDark: boolean;
    setTheme: any;
}

type CryptoDataContextProviderProps = {
    children: ReactNode;
}

const CryptoDataContext = createContext<DataContextProps | undefined>(undefined);

export function CryptoDataContextProvider({ children }: CryptoDataContextProviderProps) {

    const setTheme = () => {
       setIsDark(!isDark)
    }
    const [isDark , setIsDark] = useState<boolean>(false)
    const [axiosData, axiosError, axiosLoading] = useAxios({ url: baseUrl })
    const data = Array.isArray(axiosData) ? axiosData : [];
    const error = axiosError as string || null;
    const loading = axiosLoading as boolean || false;



    return (
        <CryptoDataContext.Provider value={{data,error,loading,isDark,setTheme}}>
            {children}
        </CryptoDataContext.Provider>
    )
}

export const useDataContext = () => {
    const context = useContext(CryptoDataContext);
    if (!context) {
        throw new Error('useDataContext must be used within a DataProvider');
    }
    return context;
};