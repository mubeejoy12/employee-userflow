'use client'
import { useState } from 'react';

export const useMockAuth = () => {
  const [loading, setLoading] = useState(false);

  const login = (values) => {
    setLoading(true);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (values.email === 'test@test.com' && values.password === 'password') {
          setLoading(false);
          resolve({ user: { name: 'Test User' } });
        } else {
          setLoading(false);
          reject(new Error('Invalid credentials'));
        }
      }, 1000);
    });
  };

  const register = (values) => {
    setLoading(true);
    return new Promise((resolve) => {
      setTimeout(() => {
        setLoading(false);
        resolve({ user: { name: values.name } });
      }, 1000);
    });
  };

  const forgotPassword = (email) => {
    setLoading(true);
    return new Promise((resolve) => {
      setTimeout(() => {
        setLoading(false);
        resolve();
      }, 1000);
    });
  };

  const verifyOtp = (otp) => {
    setLoading(true);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (otp === '123456') {
          setLoading(false);
          resolve();
        } else {
          setLoading(false);
          reject(new Error('Invalid OTP'));
        }
      }, 1000);
    });
  };

  const resetPassword = (password) => {
    setLoading(true);
    return new Promise((resolve) => {
      setTimeout(() => {
        setLoading(false);
        resolve();
      }, 1000);
    });
  };

  return { login, register, forgotPassword, verifyOtp, resetPassword, loading };
};
