import React, { useState } from 'react';

const Context = React.createContext({});

export const SearchContextProvider = ({children}) => {
    const [search, setSearch] = useState(false);
    return <Context.Provider value={{search, setSearch}}>
                {children}
           </Context.Provider>
}

export default Context;
