import { useContext, useEffect, useState, createContext } from "react";
import { setAuthBearer } from "../../common/services/http";
import authApi from '../../common/services/authApi'
import profileApi from '../../common/services/profileApi'
import Router, { useRouter } from 'next/router'

function getValidTokenOrNull() {
    const jwtJSON = localStorage.getItem('jwt')

    if (jwtJSON) {
        const jwt = JSON.parse(jwtJSON, (key, val) => {
            if (key === 'expiresAt') {
                return new Date(val)
            }
            return val
        })

        if (jwt.expiresAt && jwt.expiresAt.getTime() > Date.now()) {
            return jwt.access_token
        } else {
            return null
        }
    }

    return null
}


function setAccessToken(jwt) {
    localStorage.setItem("jwt", JSON.stringify(jwt));
    setAuthBearer(jwt.access_token)
}

function clearAccessToken() {
    localStorage.setItem("jwt", "");
    setAuthBearer('')
}

const AuthContext = createContext({ state: {}, actions: {} });


export default function AuthProvider({ children }) {
    const [user, setUser] = useState(null)

    const router = useRouter()

    // get user profile on app start if valid token exists
    useEffect(() => {
        async function getUserProfile() {
            try {
                const user = await profileApi.get()
                setUser(user)
                router.replace('/')
            } catch (error) {
                console.error('Failed to get user profilo info', error)
            }
        }

        const accessToken = getValidTokenOrNull()
        if (accessToken) {
            console.log('performing autologin')
            setAuthBearer(accessToken)
            getUserProfile()
        }
    }, [])


    async function login(email, password) {
        const jwt = await authApi.login(email, password)
        console.log('login complete', jwt)
        setAccessToken(jwt)
        console.log('retrieving user profile')
        setUser(await profileApi.get())
    }

    function logout() {
        setUser(null)
        clearAccessToken()
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


