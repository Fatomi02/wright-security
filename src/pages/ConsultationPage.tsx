import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Calendar, Clock, Phone, MessageSquare, Video, Users, Mail, CheckCircle } from 'lucide-react';

type ConsultationType = 'phone' | 'video' | 'in-person';
type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  consultationType: ConsultationType;
  date: string;
  time: string;
  message: string;
  interests: string[];
  hearAbout: string;
  agreeToTerms: boolean;
};

const ConsultationPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const [consultationType, setConsultationType] = useState<ConsultationType>('phone');

  const onSubmit = (data: FormData) => {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Form data submitted:', data);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <div className="bg-gray-50 py-16">
        <div className="container max-w-3xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold mb-4">Consultation Request Received</h1>
            <p className="text-lg text-gray-700 mb-6">
              Thank you for requesting a consultation. We've received your information and will contact you within 1-2 business days to confirm your appointment.
            </p>
            <p className="text-gray-600 mb-8">
              If you have any immediate questions, please call us at (555) 123-4567.
            </p>
            <div className="mt-8">
              <a href="/" className="btn btn-primary px-8 py-3">
                Return to Home
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50">
      {/* Header */}
      <section className="bg-primary-800 text-white py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Request a Consultation</h1>
            <p className="text-xl">
              Speak with our security training experts to discuss your specific needs and get personalized guidance on the right courses for your career goals.
            </p>
          </div>
        </div>
      </section>

      {/* Consultation Types */}
      <section className="py-12 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Choose Your Consultation Type</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div 
                onClick={() => setConsultationType('phone')}
                className={`border rounded-lg p-6 text-center cursor-pointer transition-all ${
                  consultationType === 'phone' 
                    ? 'border-primary-500 bg-primary-50 shadow-sm' 
                    : 'border-gray-200 hover:border-primary-300 hover:shadow-sm'
                }`}
              >
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="text-lg font-medium mb-2">Phone Consultation</h3>
                <p className="text-gray-600 text-sm">
                  Speak directly with a training expert over the phone to discuss your needs.
                </p>
              </div>
              
              <div 
                onClick={() => setConsultationType('video')}
                className={`border rounded-lg p-6 text-center cursor-pointer transition-all ${
                  consultationType === 'video' 
                    ? 'border-primary-500 bg-primary-50 shadow-sm' 
                    : 'border-gray-200 hover:border-primary-300 hover:shadow-sm'
                }`}
              >
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Video className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="text-lg font-medium mb-2">Video Consultation</h3>
                <p className="text-gray-600 text-sm">
                  Meet face-to-face virtually via video conference to discuss training options.
                </p>
              </div>
              
              <div 
                onClick={() => setConsultationType('in-person')}
                className={`border rounded-lg p-6 text-center cursor-pointer transition-all ${
                  consultationType === 'in-person' 
                    ? 'border-primary-500 bg-primary-50 shadow-sm' 
                    : 'border-gray-200 hover:border-primary-300 hover:shadow-sm'
                }`}
              >
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="text-lg font-medium mb-2">In-Person Consultation</h3>
                <p className="text-gray-600 text-sm">
                  Visit our training facility for an in-person meeting with our experts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Form */}
      <section className="py-12 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3 bg-primary-700 text-white p-8">
                  <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Phone className="h-5 w-5 mr-3 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Phone</h4>
                        <p className="text-primary-100">(555) 123-4567</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Mail className="h-5 w-5 mr-3 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Email</h4>
                        <p className="text-primary-100">contact@wrightsecurity.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Clock className="h-5 w-5 mr-3 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Business Hours</h4>
                        <p className="text-primary-100">Monday-Friday: 9am-5pm</p>
                        <p className="text-primary-100">Saturday: 10am-2pm</p>
                      </div>
                    </div>
                  </div>
                  
                  <hr className="my-6 border-primary-600" />
                  
                  <h3 className="text-xl font-semibold mb-4">What to Expect</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0" />
                      <span className="text-sm">Personalized training recommendations</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0" />
                      <span className="text-sm">Information about state requirements</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0" />
                      <span className="text-sm">Cost and schedule details</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0" />
                      <span className="text-sm">Answers to your specific questions</span>
                    </li>
                  </ul>
                </div>
                
                <div className="md:w-2/3 p-8">
                  <h3 className="text-xl font-semibold mb-6">Schedule Your {consultationType === 'phone' ? 'Phone' : consultationType === 'video' ? 'Video' : 'In-Person'} Consultation</h3>
                  
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="firstName" className="form-label">First Name *</label>
                        <input
                          id="firstName"
                          type="text"
                          className={`form-input ${errors.firstName ? 'border-accent-600 focus:border-accent-600 focus:ring-accent-600' : ''}`}
                          {...register('firstName', { required: 'First name is required' })}
                        />
                        {errors.firstName && <p className="form-error">{errors.firstName.message}</p>}
                      </div>
                      
                      <div>
                        <label htmlFor="lastName" className="form-label">Last Name *</label>
                        <input
                          id="lastName"
                          type="text"
                          className={`form-input ${errors.lastName ? 'border-accent-600 focus:border-accent-600 focus:ring-accent-600' : ''}`}
                          {...register('lastName', { required: 'Last name is required' })}
                        />
                        {errors.lastName && <p className="form-error">{errors.lastName.message}</p>}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="email" className="form-label">Email *</label>
                        <input
                          id="email"
                          type="email"
                          className={`form-input ${errors.email ? 'border-accent-600 focus:border-accent-600 focus:ring-accent-600' : ''}`}
                          {...register('email', { 
                            required: 'Email is required',
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: 'Invalid email address'
                            }
                          })}
                        />
                        {errors.email && <p className="form-error">{errors.email.message}</p>}
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="form-label">Phone Number *</label>
                        <input
                          id="phone"
                          type="tel"
                          className={`form-input ${errors.phone ? 'border-accent-600 focus:border-accent-600 focus:ring-accent-600' : ''}`}
                          {...register('phone', { required: 'Phone number is required' })}
                        />
                        {errors.phone && <p className="form-error">{errors.phone.message}</p>}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="date" className="form-label">Preferred Date *</label>
                        <div className="relative">
                          <input
                            id="date"
                            type="date"
                            className={`form-input ${errors.date ? 'border-accent-600 focus:border-accent-600 focus:ring-accent-600' : ''}`}
                            {...register('date', { required: 'Date is required' })}
                          />
                          <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 pointer-events-none" />
                        </div>
                        {errors.date && <p className="form-error">{errors.date.message}</p>}
                      </div>
                      
                      <div>
                        <label htmlFor="time" className="form-label">Preferred Time *</label>
                        <div className="relative">
                          <select
                            id="time"
                            className={`form-input ${errors.time ? 'border-accent-600 focus:border-accent-600 focus:ring-accent-600' : ''}`}
                            {...register('time', { required: 'Time is required' })}
                          >
                            <option value="">Select a time</option>
                            <option value="9:00 AM">9:00 AM</option>
                            <option value="10:00 AM">10:00 AM</option>
                            <option value="11:00 AM">11:00 AM</option>
                            <option value="1:00 PM">1:00 PM</option>
                            <option value="2:00 PM">2:00 PM</option>
                            <option value="3:00 PM">3:00 PM</option>
                            <option value="4:00 PM">4:00 PM</option>
                          </select>
                          <Clock className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 pointer-events-none" />
                        </div>
                        {errors.time && <p className="form-error">{errors.time.message}</p>}
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label className="form-label">I'm interested in: (select all that apply)</label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
                        <div className="flex items-center">
                          <input
                            id="interest-armed"
                            type="checkbox"
                            className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                            value="Armed Security Training"
                            {...register('interests')}
                          />
                          <label htmlFor="interest-armed" className="ml-2 text-sm text-gray-700">
                            Armed Security Training
                          </label>
                        </div>
                        
                        <div className="flex items-center">
                          <input
                            id="interest-unarmed"
                            type="checkbox"
                            className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                            value="Unarmed Security Training"
                            {...register('interests')}
                          />
                          <label htmlFor="interest-unarmed" className="ml-2 text-sm text-gray-700">
                            Unarmed Security Training
                          </label>
                        </div>
                        
                        <div className="flex items-center">
                          <input
                            id="interest-renewal"
                            type="checkbox"
                            className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                            value="License Renewal"
                            {...register('interests')}
                          />
                          <label htmlFor="interest-renewal" className="ml-2 text-sm text-gray-700">
                            License Renewal
                          </label>
                        </div>
                        
                        <div className="flex items-center">
                          <input
                            id="interest-specialized"
                            type="checkbox"
                            className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                            value="Specialized Training"
                            {...register('interests')}
                          />
                          <label htmlFor="interest-specialized" className="ml-2 text-sm text-gray-700">
                            Specialized Training
                          </label>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="message" className="form-label">Additional Information</label>
                      <textarea
                        id="message"
                        rows={4}
                        className="form-input"
                        placeholder="Tell us about your security training goals or any specific questions you have..."
                        {...register('message')}
                      />
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="hearAbout" className="form-label">How did you hear about us?</label>
                      <select
                        id="hearAbout"
                        className="form-input"
                        {...register('hearAbout')}
                      >
                        <option value="">Select an option</option>
                        <option value="Search Engine">Search Engine</option>
                        <option value="Social Media">Social Media</option>
                        <option value="Referral">Referral</option>
                        <option value="Advertisement">Advertisement</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    
                    <div className="mb-6">
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
                          I agree to the <a href="/terms" className="text-primary-600 hover:underline">terms and conditions</a> and <a href="/privacy" className="text-primary-600 hover:underline">privacy policy</a>.
                        </label>
                      </div>
                      {errors.agreeToTerms && <p className="form-error mt-1">{errors.agreeToTerms.message}</p>}
                    </div>
                    
                    <button
                      type="submit"
                      className="btn btn-primary w-full py-3"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Submitting...' : 'Schedule Consultation'}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-2">What should I prepare for my consultation?</h3>
                <p className="text-gray-600">
                  It's helpful to have information about your career goals, any security experience you may have, and specific questions about courses or state requirements. If you have any documentation related to previous training or licenses, having those available can be useful.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-2">How long will the consultation last?</h3>
                <p className="text-gray-600">
                  Our initial consultations typically last 30-45 minutes, which gives us enough time to understand your needs and provide relevant information about our training programs.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Is there a fee for the consultation?</h3>
                <p className="text-gray-600">
                  No, we offer complimentary consultations to help you determine the best training path for your security career. Our goal is to ensure you enroll in the right courses for your specific needs.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-2">What if I need to reschedule my consultation?</h3>
                <p className="text-gray-600">
                  We understand that schedules can change. You can reschedule your consultation by calling our office at (555) 123-4567 or by emailing us at least 24 hours before your scheduled appointment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConsultationPage;