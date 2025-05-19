import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Check for existing session on mount
  useEffect(() => {
    const storedUser = localStorage.getItem('securityTrainingUser');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    // Simulate API call
    setIsLoading(true);
    
    // This would be replaced with an actual API call
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        // Mock credentials check
        if (email === 'demo@example.com' && password === 'password') {
          const mockUser = {
            id: '1',
            name: 'Demo User',
            email: 'demo@example.com'
          };
          
          setUser(mockUser);
          localStorage.setItem('securityTrainingUser', JSON.stringify(mockUser));
          setIsLoading(false);
          resolve();
        } else {
          setIsLoading(false);
          reject(new Error('Invalid credentials'));
        }
      }, 1000);
    });
  };

  const register = async (name: string, email: string, password: string) => {
    // Simulate API call
    setIsLoading(true);
    
    // This would be replaced with an actual API call
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        // Mock registration
        const mockUser = {
          id: Date.now().toString(),
          name,
          email
        };
        
        setUser(mockUser);
        localStorage.setItem('securityTrainingUser', JSON.stringify(mockUser));
        setIsLoading(false);
        resolve();
      }, 1000);
    });
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('securityTrainingUser');
  };

  const value = {
    user,
    isAuthenticated: !!user,
    isLoading,
    login,
    register,
    logout
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};