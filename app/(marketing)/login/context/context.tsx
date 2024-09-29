import React, { Dispatch, createContext, useContext } from "react";
import useCommonState from "../hooks/useCommonState";
import { LoginPageProps } from "../page";

type CommonState = {
  // Define the structure of your common state here
  authComponent: string;
  loading: boolean;
  formData: { name: string; email: string; password: string };
  passwordError: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleEmailSignIn: () => void;
  handleForgotPassword: () => void;
  handleSignUp: () => void;
  setAuthComponent: Dispatch<React.SetStateAction<string>>;
};

type AuthContextType = {
  commonState: CommonState;
  loginPageProps: LoginPageProps;
};

type AuthProviderProps = {
  children: React.ReactNode;
  loginPageProps: LoginPageProps;
};

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<AuthProviderProps> = ({
  children,
  loginPageProps,
}) => {
  const commonState = useCommonState(loginPageProps); // Assuming this returns CommonState
  return (
    <AuthContext.Provider value={{ commonState, loginPageProps }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext must be used within an AuthProvider");
  }
  return context;
};
