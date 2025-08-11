'use client';
import { useState } from 'react';
import { login as apiLogin, register as apiRegister } from '../services/api';

export const useApiAuth = () => {
  const [loading, setLoading] = useState(false);

  const login = async (values) => {
    setLoading(true);
    try {
      const response = await apiLogin(values);
      // Assuming the API returns user data on successful login
      return { user: response.data.user };
    } finally {
      setLoading(false);
    }
  };

  const register = async (values) => {
    setLoading(true);
    try {
      const response = await apiRegister(values);
      // Assuming the API returns user data on successful registration
      return { user: response.data.user };
    } finally {
      setLoading(false);
    }
  };

  // These functions are placeholders as the API spec doesn't include them.
  const forgotPassword = async (email) => {
    setLoading(true);
    console.warn('Forgot password functionality is not implemented in the API.');
    return new Promise((resolve) => {
      setTimeout(() => {
        setLoading(false);
        resolve();
      }, 1000);
    });
  };

  const verifyOtp = async (otp) => {
    setLoading(true);
    console.warn('Verify OTP functionality is not implemented in the API.');
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            setLoading(false);
            // Simulating a successful OTP verification for UI flow
            if (otp) {
                resolve();
            } else {
                reject(new Error('Invalid OTP'));
            }
        }, 1000);
    });
  };

  const resetPassword = async (password) => {
    setLoading(true);
    console.warn('Reset password functionality is not implemented in the API.');
    return new Promise((resolve) => {
      setTimeout(() => {
        setLoading(false);
        resolve();
      }, 1000);
    });
  };

  return { login, register, forgotPassword, verifyOtp, resetPassword, loading };
};
