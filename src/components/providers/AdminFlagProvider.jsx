import { createContext, useState } from "react";

export const AdminFlagContext = createContext({});

export const AdminFlagProvider = props => {
    const { children } = props;

    const [ admin, setAdmin ] = useState(false);

    return(
        <AdminFlagContext.Provider value={{admin, setAdmin}}>
            {children}
        </AdminFlagContext.Provider>
    )
}