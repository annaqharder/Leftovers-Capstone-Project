import React, { createContext, useState, useEffect } from 'react';

const UserContext = createContext();

function UserProvider({ children }) {

    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch(`/me`)
        .then((r) => r.json())
        .then((user) => setUser(user));
    }, [])

    return (
        <UserContext.Provider value={{user, setUser}}>
        { children }
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider }

// import React, { createContext, useState, useEffect } from 'react';
// import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";
// import Axios from "axios";

// const UserContext = createContext();

// function UserProvider({ children }) {

//     const [user, setUser] = useState(null);

//     // const client = new QueryClient()

//     const { data } = useQuery(["users"], () => {
//         Axios.get("/me").then((res) => res.data)
//     });

//     return (
//             // <QueryClientProvider client={client}>
//                 <UserContext.Provider value={{user, setUser}}>
//                     { children }
//                 </UserContext.Provider>
//             // </QueryClientProvider>
//     )
// }

// export { UserContext, UserProvider }


