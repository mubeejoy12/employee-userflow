'use client'

import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Input, Spinner } from "@material-tailwind/react";
import { useShowPassword } from "@/app/hooks/useShowPassword";
import Link from "next/link";
import BackButton from "@/app/components/BackButton";
import Image from "next/image";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/navigation';
import { useApiAuth } from '@/app/hooks/useApiAuth';
import { useAlert } from '@/app/context/AlertContext';

export default function ResetPassword(){
    const { showPassword, handleShowPassword } = useShowPassword();
    const router = useRouter();
    const { resetPassword, loading } = useApiAuth();
    const { showAlert } = useAlert();

    const formik = useFormik({
        initialValues: {
          password: '',
          confirmPassword: '',
        },
        validationSchema: Yup.object({
          password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
          confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Confirm Password is required'),
        }),
        onSubmit: async (values) => {
          try {
            await resetPassword(values.password);
            showAlert('Password reset successfully!', 'success');
            router.push('/auth/login');
          } catch (err) {
            showAlert('Failed to reset password. Try again.', 'error');
          }
        },
      });

    return (
        <div className="">
            <div className="p-4">
                <Link href="/" className="cursor-pointer">
                    <Image src="/logo.png" alt="Logo" width={120} height={40} className="object-contain" />
                </Link>
            </div>

            <div className="max-w-xl mx-auto px-4 py-20">
                <BackButton />
                <h1 className="text-4xl font-bold text-center  mb-1">Reset Password</h1>
                <p className="text-md text-gray-600 text-center" >Enter new password to reset your password</p>

                <form onSubmit={formik.handleSubmit}>
                    <div className="mt-8">
                        <div className="py-2 mb-4 relative">
                            <Input 
                                label="Password"
                                id="password"
                                name="password"
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter your password"
                                className="w-full border h-[53px] rounded"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.password}
                            />
                            <span className="absolute top-[20px] right-[25px] cursor-pointer">
                                {showPassword ? (
                                <FaEye
                                    color="gray"
                                    size={20}
                                    onClick={handleShowPassword}
                                />
                                ) : (
                                <FaEyeSlash
                                    color="gray"
                                    size={20}
                                    onClick={handleShowPassword}
                                />
                                )}
                            </span>
                            {formik.touched.password && formik.errors.password && (
                                <div className="text-red-500 text-sm mt-1">{formik.errors.password}</div>
                            )}
                        </div>
                        <div className="relative my-8">
                            <Input 
                                label="Confirm Password"
                                id="confirmPassword"
                                name="confirmPassword"
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter your password"
                                className="w-full border h-[53px] rounded "
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.confirmPassword}
                            />
                            <span className="absolute top-[15px] right-[25px] cursor-pointer">
                                {showPassword ? (
                                <FaEye
                                    color="gray"
                                    size={20}
                                    onClick={handleShowPassword}
                                />
                                ) : (
                                <FaEyeSlash
                                    color="gray"
                                    size={20}
                                    onClick={handleShowPassword}
                                />
                                )}
                            </span>
                            {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                                <div className="text-red-500 text-sm mt-1">{formik.errors.confirmPassword}</div>
                            )}
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-primary text-white px-2 py-4 rounded mt-4"
                            disabled={loading}
                        >
                            {loading ? <Spinner /> : "Reset Password"}
                        </button>

                    </div>
                </form>
            </div>
        </div>

    )
}