import React, { createContext, useCallback, useContext, useEffect, useState} from 'react';
import api from '../services/api';

interface AuthContextData {
    user: object;
    login({username, password}: LoginCredentials): void;
    logout(): void;
}

interface AuthState {
    user: object;
    token: string;
}

interface LoginCredentials {
    username: string;
    password: string;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);


export const AuthProvider: React.FC = ({ children }) => {
    
    const [userData, setUserData] = useState<AuthState>(() => {
        const user = localStorage.getItem('@Project:user');
        const token = localStorage.getItem('@Project:token');
        
        if (user && token) {
            return { user: JSON.parse(user), token: token };
        }

        return {} as AuthState;
    });


    // const login = async ({ username, password }: LoginCredentials) => {
    //     const response = await api.post('/login/', {
    //         username,
    //         password,
    //     });

    //     const { token, user } = response.data;
    //     localStorage.setItem('@Project:token', token);
    //     localStorage.setItem('@Project:user', JSON.stringify(user));

    //     setUserData({ token, user });
    // }

    const login = useCallback(async ({ username, password }: LoginCredentials) => {
        const response = await api.post('/login/', {username, password});

        const {token} = response.data;
        localStorage.setItem('@Project:token', token);

        if (!!token) {            
            const userResponse = await api.get('usuarios/?search=' + username);
            const user = userResponse.data[0];
            localStorage.setItem('@Project:user', JSON.stringify(user));
            setUserData({token: token, user: user});
        }
        
    },[])

    const logout = () => {
        localStorage.removeItem('@Project:user');
        localStorage.removeItem('@Project:token');
    
        setUserData({} as AuthState);
    }
    
    return (
        <AuthContext.Provider value={{user: userData.user, login, logout}}>
            { children }
        </AuthContext.Provider>
    )
}

export function useAuth(): AuthContextData {
    const context = useContext(AuthContext);
    return context;
}