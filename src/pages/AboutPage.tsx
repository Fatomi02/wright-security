import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Award, Users, BookOpen, Target, TrendingUp, ChevronRight } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="bg-gray-50">
      {/* Header */}
      <section className="bg-primary-800 text-white py-16">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-4">About Wright Security Consultant Training</h1>
            <p className="text-xl text-primary-100">
              Expert security training services compliant with Florida and Georgia guidelines. Learn from industry professionals with decades of experience.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <img 
                  src="https://images.pexels.com/photos/8939510/pexels-photo-8939510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Security professionals in training" 
                  className="rounded-lg shadow-md w-full"
                />
              </div>
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-gray-700 mb-6">
                  At Wright Security Consultant Training, we are dedicated to providing the highest quality security training and certification programs. Our mission is to empower security professionals with the knowledge, skills, and credentials they need to excel in their careers and make our communities safer.
                </p>
                <p className="text-gray-700">
                  Founded by former law enforcement officers and security experts, we understand the critical importance of proper training in the security industry. We are committed to maintaining the highest standards of instruction and staying current with evolving security practices and regulations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold">Why Choose Us</h2>
            <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
              We offer comprehensive training solutions that set us apart in the security education industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                <Shield className="h-7 w-7 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">State Certified</h3>
              <p className="text-gray-600">
                All our training programs are certified and approved by Florida and Georgia state regulatory agencies, ensuring your credentials are recognized industry-wide.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                <Award className="h-7 w-7 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Expert Instructors</h3>
              <p className="text-gray-600">
                Learn from seasoned security professionals with decades of real-world experience in law enforcement, military, and corporate security roles.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                <BookOpen className="h-7 w-7 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Comprehensive Curriculum</h3>
              <p className="text-gray-600">
                Our courses cover both theoretical knowledge and practical skills, providing a well-rounded education that prepares you for real security situations.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                <Users className="h-7 w-7 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Personalized Approach</h3>
              <p className="text-gray-600">
                We offer one-on-one consultations and customize our training programs to address your specific career goals and learning needs.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                <Target className="h-7 w-7 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Hands-On Training</h3>
              <p className="text-gray-600">
                Our facilities include state-of-the-art training areas, including a firearms range and simulation rooms for practical scenario-based learning.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="h-7 w-7 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Career Support</h3>
              <p className="text-gray-600">
                We don't just train you; we help you build your career with job placement assistance, continuing education, and professional development resources.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold">Our Team</h2>
            <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
              Meet our experienced instructors and staff who are dedicated to your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mb-4 relative">
                <img 
                  src="https://images.pexels.com/photos/6325953/pexels-photo-6325953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Robert Wright" 
                  className="rounded-full w-40 h-40 object-cover mx-auto"
                />
              </div>
              <h3 className="text-xl font-semibold">Robert Wright</h3>
              <p className="text-primary-600 mb-3">Founder & Lead Instructor</p>
              <p className="text-gray-600 mb-4">
                Former law enforcement officer with over 20 years of experience in security operations and training.
              </p>
              <div className="flex justify-center space-x-3">
                <a href="#" className="text-gray-400 hover:text-primary-600">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-primary-600">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="text-center">
              <div className="mb-4">
                <img 
                  src="https://images.pexels.com/photos/5717546/pexels-photo-5717546.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Sarah Johnson" 
                  className="rounded-full w-40 h-40 object-cover mx-auto"
                />
              </div>
              <h3 className="text-xl font-semibold">Sarah Johnson</h3>
              <p className="text-primary-600 mb-3">Firearms & Tactics Instructor</p>
              <p className="text-gray-600 mb-4">
                Certified firearms instructor with military background and expertise in defensive tactics and firearms safety.
              </p>
              <div className="flex justify-center space-x-3">
                <a href="#" className="text-gray-400 hover:text-primary-600">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-primary-600">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="text-center">
              <div className="mb-4">
                <img 
                  src="https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Marcus Thompson" 
                  className="rounded-full w-40 h-40 object-cover mx-auto"
                />
              </div>
              <h3 className="text-xl font-semibold">Marcus Thompson</h3>
              <p className="text-primary-600 mb-3">Security Regulations Expert</p>
              <p className="text-gray-600 mb-4">
                Former security agency director specializing in regulatory compliance and security laws in Florida and Georgia.
              </p>
              <div className="flex justify-center space-x-3">
                <a href="#" className="text-gray-400 hover:text-primary-600">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-primary-600">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold">Our Training Facilities</h2>
            <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
              State-of-the-art facilities designed for optimal learning and practical training
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <img 
                src="https://images.pexels.com/photos/5699416/pexels-photo-5699416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Classroom" 
                className="rounded-lg w-full h-64 object-cover mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Modern Classrooms</h3>
              <p className="text-gray-600">
                Our classrooms are equipped with the latest technology to enhance the learning experience, including interactive displays and comfortable seating.
              </p>
            </div>

            <div>
              <img 
                src="https://images.pexels.com/photos/9516151/pexels-photo-9516151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Firing Range" 
                className="rounded-lg w-full h-64 object-cover mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Indoor Firing Range</h3>
              <p className="text-gray-600">
                Our private firing range offers a safe environment for firearms training with professional-grade equipment and certified range safety officers.
              </p>
            </div>

            <div>
              <img 
                src="https://images.pexels.com/photos/8964099/pexels-photo-8964099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Simulation Room" 
                className="rounded-lg w-full h-64 object-cover mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Simulation Rooms</h3>
              <p className="text-gray-600">
                Practice real-world scenarios in our simulation rooms, which can be configured to replicate various security situations and environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="bg-primary-50 rounded-lg p-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3 flex justify-center">
                <img 
                  src="https://images.pexels.com/photos/7709222/pexels-photo-7709222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Certification badge" 
                  className="max-w-[200px]"
                />
              </div>
              <div className="md:w-2/3">
                <h2 className="text-2xl font-bold mb-4">Certifications & Accreditations</h2>
                <p className="text-gray-700 mb-6">
                  Wright Security Consultant Training is fully certified and approved by state regulatory agencies in Florida and Georgia. Our training programs meet or exceed all state requirements for security officer training and licensing.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-primary-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Florida Department of Agriculture and Consumer Services (License #123456)</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-primary-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Georgia Board of Private Detective and Security Agencies (License #GA-54321)</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-primary-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span>National Association of Security Companies (NASCO) Member</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-primary-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span>NRA Certified Firearms Instructors</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-800 text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Security Career?</h2>
            <p className="text-lg mb-8 text-gray-100">
              Contact us today to learn more about our training programs or to schedule a consultation with one of our expert instructors.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/courses" className="btn btn-accent px-6 py-3 text-base">
                Browse Courses
              </Link>
              <Link to="/consultation" className="btn btn-outline border-white text-white hover:bg-white/10 px-6 py-3 text-base">
                Request Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;