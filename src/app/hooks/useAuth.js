"use client";
import { useMutation } from "react-query";
import { useAuth } from "../context/AuthContext";
import { register } from "../services/api";

export const useAuthActions = () => {
  const { setUser } = useAuth();

  const signUp = useMutation((data) => register(data), {
    onSuccess: (data) => {
      setUser(data);
    },
  });

  const requestPasswordReset = useMutation((data) => register(data));

  const verifyOtpMutation = useMutation((data) => register(data));

  return { signUp, requestPasswordReset, verifyOtpMutation, loading: signUp.isLoading || requestPasswordReset.isLoading || verifyOtpMutation.isLoading };
};
