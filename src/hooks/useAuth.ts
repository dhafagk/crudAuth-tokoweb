import { useMutation } from "@tanstack/react-query";
import { AuthService } from "../services";
import { AuthLoginVariables } from "../store/auth/auth.types";

const authService = new AuthService();

const useAuthLogin = () => {
  const { mutate, isLoading, isError, error } = useMutation(
    (args: AuthLoginVariables) => authService.login(args.email, args.password)
  );

  return {
    mutate,
    isLoading,
    isError,
    error,
  };
};

const useAuthLogout = () => {
  const { mutate, isLoading, isError, error } = useMutation((args: any) =>
    authService.logout()
  );

  return {
    mutate,
    isLoading,
    isError,
    error,
  };
};

export { useAuthLogin, useAuthLogout };
