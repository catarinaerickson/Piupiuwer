import React, { createContext, useCallback, useContext, useState} from 'react';

import api from '../services/api';

export interface reducedUser {
    id: number;
    username: string;
}

export interface user {
    username: string;
    first_name: string;
    last_name: string;
    foto: string;
    seguidores?: reducedUser[];
    id: number;
    pius: [];
    favoritos: [];
    seguindo?: reducedUser[];
    email: string;
}

interface AuthContextData {
    user: user;
    login({username, password}: LoginCredentials): Promise<string | undefined>;
    logout(): void;
}

interface AuthState{
    user: user;
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
            api.defaults.headers.authorization = `JWT ${token}`;
            return {user: JSON.parse(user), token}
        }

        return {} as AuthState;
    });

    const login = useCallback(async ({ username, password }: LoginCredentials) => {
        try {
            const response = await api.post('/login/', {username, password})
            const {token} = response.data;
            localStorage.setItem('@Project:token', token);

            if (!!token) {            
                const userResponse = await api.get('usuarios/?search=' + username);
                const user = userResponse.data[0];
                localStorage.setItem('@Project:user', JSON.stringify(user));
                setUserData({ user, token});          
                api.defaults.headers.authorization = `JWT ${token}`;  
            } 
        } catch (err) {
            if (err.response) {
                const { data } = err.response;
    
                if (data.global != null && data.global[0] === 'Impossível fazer login com as credenciais fornecidas.') {
                    return 'Usuário e senha incorretos.'
                } else if (data.username != null && data.username[0] === 'Este campo não pode ser em branco.' ||
                 data.password != null && data.password[0] === 'Este campo não pode ser em branco.') {
                    return 'Por favor, preencha todos os campos.'
                };
            } else if (err.request) {
                return 'Desculpe, não conseguimos realizar o login.'
            }

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