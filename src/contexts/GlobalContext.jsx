import { createContext, useState } from "react";

const GlobalContext = createContext();
export const GlobalProvider = ({ children }) => {

    //stato di ricerca
    const [searchQuery, setSearchQuery] = useState("");
    //ora mettiamo la funzione per aggiornare la ricerca
    const search = (query) => {
        setSearchQuery(query);
    };

    return (

        <GlobalContext.Provider value={{ searchQuery, search }}>
            {children}
        </GlobalContext.Provider>
    );
};


export default GlobalContext;