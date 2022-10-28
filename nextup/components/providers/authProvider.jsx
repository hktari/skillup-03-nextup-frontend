import { useContext, useState, createContext } from "react";


const AuthContext = createContext({ state: {}, actions: {} });


export default function AuthProvider({ children }) {
    const [user, setUser] = useState(null)

    async function login(email, password) {
        console.log('login', email, password)
        setUser({
            email
        })
    }

    function logout() {
        setUser(null)
        // todo: clear cache
    }

    const value = {
        state: {
            user
        },
        actions: {
            login,
            logout
        }
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>)
}

export function useAuth() {
    return useContext(AuthContext)
}

// export function RequireAuth({ children }) {
//     let auth = useAuth();
//     // let location = useLocation();

//     if (!auth.isLoggedIn()) {
//         // Redirect them to the /login page, but save the current location they were
//         // trying to go to when they were redirected. This allows us to send them
//         // along to that page after they login, which is a nicer user experience
//         // than dropping them off on the home page.
//         return <Navigate to="/login" state={{ from: location }} replace />;
//     }

//     return children;
// }



