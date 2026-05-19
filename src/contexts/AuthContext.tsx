import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';

interface User {
    username: string;
    role: string;
}

interface AuthContextType {
    user: User | null;
    token: string | null;
    login: (token: string) => void;
    logout: () => void;
    isAuthenticated: boolean;
    isAdmin: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [token, setToken] = useState<string | null>(localStorage.getItem('jwt_token'));
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        if (token) {
            try {
                const payload = JSON.parse(atob(token.split('.')[1]));
                setUser({
                    username: payload.sub,
                    role: payload.roles?.[0] || 'ROLE_USER'
                });
            } catch (error) {
                console.error('Invalid token', error);
                logout();
            }
        }
    }, [token]);

    const login = (newToken: string) => {
        localStorage.setItem('jwt_token', newToken);
        setToken(newToken);
    };

    const logout = () => {
        localStorage.removeItem('jwt_token');
        setToken(null);
        setUser(null);
    };

    const isAuthenticated = !!token;
    const isAdmin = user?.role === 'ROLE_ADMIN';

    return (
        <AuthContext.Provider value={{ user, token, login, logout, isAuthenticated, isAdmin }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within AuthProvider');
    }
    return context;
};

export default AuthContext;