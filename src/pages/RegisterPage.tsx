import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useAuth } from '../contexts/AuthContext';
import { Eye, EyeOff, CheckCircle, AlertCircle } from 'lucide-react';

type RegisterFormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  agreeToTerms: boolean;
};

const RegisterPage = () => {
  const { register: registerUser } = useAuth();
  const navigate = useNavigate();
  const { register, handleSubmit, watch, formState: { errors } } = useForm<RegisterFormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [registerError, setRegisterError] = useState<string | null>(null);
  
  const password = watch('password', '');

  const onSubmit = async (data: RegisterFormData) => {
    setIsSubmitting(true);
    setRegisterError(null);

    try {
      await registerUser(`${data.firstName} ${data.lastName}`, data.email, data.password);
      navigate('/dashboard');
    } catch (error) {
      if (error instanceof Error) {
        setRegisterError(error.message);
      } else {
        setRegisterError('An unexpected error occurred. Please try again.');
      }
      setIsSubmitting(false);
    }
  };

  const passwordStrength = (password: string) => {
    if (!password) return { score: 0, text: '' };
    
    let score = 0;
    
    // Length check
    if (password.length >= 8) score += 1;
    if (password.length >= 12) score += 1;
    
    // Complexity checks
    if (/[A-Z]/.test(password)) score += 1;
    if (/[a-z]/.test(password)) score += 1;
    if (/[0-9]/.test(password)) score += 1;
    if (/[^A-Za-z0-9]/.test(password)) score += 1;
    
    let text = '';
    let color = '';
    
    if (score <= 2) {
      text = 'Weak';
      color = 'bg-accent-500';
    } else if (score <= 4) {
      text = 'Medium';
      color = 'bg-yellow-500';
    } else {
      text = 'Strong';
      color = 'bg-green-500';
    }
    
    return { score: Math.min(score, 6), text, color };
  };

  const strength = passwordStrength(password);

  return (
    <div className="min-h-[80vh] bg-gray-50 flex flex-col justify-center py-12">
      <div className="container sm:mx-auto sm:w-full sm:max-w-md px-4">
        <div className="bg-white py-8 px-6 shadow-sm rounded-lg sm:px-10">
          <div className="mb-6 text-center">
            <h1 className="text-3xl font-bold text-gray-900">Create an Account</h1>
            <p className="mt-2 text-gray-600">
              Sign up to access security training courses and resources
            </p>
          </div>

          {registerError && (
            <div className="mb-6 bg-accent-50 border border-accent-200 text-accent-700 px-4 py-3 rounded-md flex items-start">
              <AlertCircle className="h-5 w-5 text-accent-400 mt-0.5 mr-3 flex-shrink-0" />
              <p>{registerError}</p>
            </div>
          )}

          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                  First Name
                </label>
                <input
                  id="firstName"
                  type="text"
                  className={`form-input ${errors.firstName ? 'border-accent-600 focus:border-accent-600 focus:ring-accent-600' : ''}`}
                  {...register('firstName', { required: 'First name is required' })}
                />
                {errors.firstName && <p className="form-error">{errors.firstName.message}</p>}
              </div>

              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name
                </label>
                <input
                  id="lastName"
                  type="text"
                  className={`form-input ${errors.lastName ? 'border-accent-600 focus:border-accent-600 focus:ring-accent-600' : ''}`}
                  {...register('lastName', { required: 'Last name is required' })}
                />
                {errors.lastName && <p className="form-error">{errors.lastName.message}</p>}
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                className={`form-input ${errors.email ? 'border-accent-600 focus:border-accent-600 focus:ring-accent-600' : ''}`}
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address',
                  },
                })}
              />
              {errors.email && <p className="form-error">{errors.email.message}</p>}
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="new-password"
                  className={`form-input pr-10 ${errors.password ? 'border-accent-600 focus:border-accent-600 focus:ring-accent-600' : ''}`}
                  {...register('password', {
                    required: 'Password is required',
                    minLength: {
                      value: 8,
                      message: 'Password must be at least 8 characters',
                    },
                  })}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-500"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
              {errors.password && <p className="form-error">{errors.password.message}</p>}
              
              {password && (
                <div className="mt-2">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-gray-500">Password strength:</span>
                    <span className="text-xs font-medium">{strength.text}</span>
                  </div>
                  <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${strength.color}`}
                      style={{ width: `${(strength.score / 6) * 100}%` }}
                    ></div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    <div className="flex items-center text-xs text-gray-500">
                      <CheckCircle className={`h-3.5 w-3.5 mr-1 ${/[A-Z]/.test(password) ? 'text-green-500' : 'text-gray-300'}`} />
                      <span>Uppercase letter</span>
                    </div>
                    <div className="flex items-center text-xs text-gray-500">
                      <CheckCircle className={`h-3.5 w-3.5 mr-1 ${/[a-z]/.test(password) ? 'text-green-500' : 'text-gray-300'}`} />
                      <span>Lowercase letter</span>
                    </div>
                    <div className="flex items-center text-xs text-gray-500">
                      <CheckCircle className={`h-3.5 w-3.5 mr-1 ${/[0-9]/.test(password) ? 'text-green-500' : 'text-gray-300'}`} />
                      <span>Number</span>
                    </div>
                    <div className="flex items-center text-xs text-gray-500">
                      <CheckCircle className={`h-3.5 w-3.5 mr-1 ${password.length >= 8 ? 'text-green-500' : 'text-gray-300'}`} />
                      <span>8+ characters</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  id="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  autoComplete="new-password"
                  className={`form-input pr-10 ${errors.confirmPassword ? 'border-accent-600 focus:border-accent-600 focus:ring-accent-600' : ''}`}
                  {...register('confirmPassword', {
                    required: 'Please confirm your password',
                    validate: value => value === password || 'Passwords do not match',
                  })}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-500"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
              {errors.confirmPassword && <p className="form-error">{errors.confirmPassword.message}</p>}
            </div>

            <div>
              <div className="flex items-start">
                <input
                  id="agreeToTerms"
                  type="checkbox"
                  className={`h-4 w-4 mt-1 text-primary-600 focus:ring-primary-500 border-gray-300 rounded ${errors.agreeToTerms ? 'border-accent-600' : ''}`}
                  {...register('agreeToTerms', { 
                    required: 'You must agree to the terms and conditions'
                  })}
                />
                <label htmlFor="agreeToTerms" className="ml-2 text-sm text-gray-700">
                  I agree to the <Link to="/terms" className="text-primary-600 hover:underline">Terms of Service</Link> and <Link to="/privacy" className="text-primary-600 hover:underline">Privacy Policy</Link>
                </label>
              </div>
              {errors.agreeToTerms && <p className="form-error mt-1">{errors.agreeToTerms.message}</p>}
            </div>

            <div>
              <button
                type="submit"
                className="btn btn-primary w-full py-2.5"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Creating account...' : 'Create Account'}
              </button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or continue with</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <button
                type="button"
                className="btn btn-outline w-full py-2.5 border border-gray-300"
              >
                Google
              </button>
              <button
                type="button"
                className="btn btn-outline w-full py-2.5 border border-gray-300"
              >
                Facebook
              </button>
            </div>
          </div>

          <p className="mt-8 text-center text-sm text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="font-medium text-primary-600 hover:text-primary-500">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;