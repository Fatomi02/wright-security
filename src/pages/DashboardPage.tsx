import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bookmark, Clock, Award, FileText, Lock, Settings, Play, CheckSquare, BookOpen, ArrowRight, Calendar, Video } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

// Placeholder data for student dashboard
const enrolledCourses = [
  {
    id: 'g-license',
    title: 'G License Security Officer Training',
    progress: 65,
    nextLesson: 'Firearms Safety and Handling',
    lastAccessed: '2 days ago',
    image: 'https://images.pexels.com/photos/5699377/pexels-photo-5699377.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    quizzes: 3,
    quizzesCompleted: 2,
  },
  {
    id: 'd-license',
    title: 'D License Security Officer Training',
    progress: 100,
    completed: true,
    lastAccessed: '2 weeks ago',
    image: 'https://images.pexels.com/photos/8346914/pexels-photo-8346914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    certificate: 'D License Training Certificate',
    quizzes: 5,
    quizzesCompleted: 5,
  }
];

const upcomingConsultations = [
  {
    id: 'c1',
    title: 'Advanced Security Career Guidance',
    date: 'June 15, 2025',
    time: '10:00 AM',
    type: 'Video',
    instructor: 'Robert Wright'
  }
];

const DashboardPage = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState<'courses' | 'consultations' | 'certificates' | 'settings'>('courses');

  if (!user) {
    return (
      <div className="py-12">
        <div className="container max-w-xl mx-auto text-center px-4">
          <h1 className="text-2xl font-bold mb-4">Please Log In</h1>
          <p className="mb-8">You need to be logged in to access your dashboard.</p>
          <Link to="/login" className="btn btn-primary">
            Log In
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen pb-12">
      {/* Dashboard Header */}
      <section className="bg-gradient-to-r from-primary-800 to-primary-700 text-white py-8">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold mb-2">Welcome back, {user.name}</h1>
              <p className="text-primary-100">Track your courses, consultations, and certificates</p>
            </div>

            <div className="mt-4 md:mt-0">
              <Link to="/courses" className="btn btn-outline border-white text-white hover:bg-white/10">
                Browse More Courses
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Navigation */}
      <div className="container mt-6">
        <div className="flex flex-wrap border-b border-gray-200">
          <button
            onClick={() => setActiveTab('courses')}
            className={`inline-flex items-center py-4 px-6 border-b-2 text-sm font-medium ${
              activeTab === 'courses'
                ? 'border-primary-600 text-primary-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            <BookOpen className="w-4 h-4 mr-2" />
            My Courses
          </button>
          
          <button
            onClick={() => setActiveTab('consultations')}
            className={`inline-flex items-center py-4 px-6 border-b-2 text-sm font-medium ${
              activeTab === 'consultations'
                ? 'border-primary-600 text-primary-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            <Clock className="w-4 h-4 mr-2" />
            Consultations
          </button>
          
          <button
            onClick={() => setActiveTab('certificates')}
            className={`inline-flex items-center py-4 px-6 border-b-2 text-sm font-medium ${
              activeTab === 'certificates'
                ? 'border-primary-600 text-primary-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            <Award className="w-4 h-4 mr-2" />
            Certificates
          </button>
          
          <button
            onClick={() => setActiveTab('settings')}
            className={`inline-flex items-center py-4 px-6 border-b-2 text-sm font-medium ${
              activeTab === 'settings'
                ? 'border-primary-600 text-primary-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            <Settings className="w-4 h-4 mr-2" />
            Account Settings
          </button>
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="container py-8">
        {/* My Courses Tab */}
        {activeTab === 'courses' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">My Enrolled Courses</h2>
              <div className="flex items-center">
                <span className="text-sm text-gray-500 mr-2">Sort by:</span>
                <select className="form-input py-1 text-sm">
                  <option>Recently Accessed</option>
                  <option>Progress</option>
                  <option>Alphabetical</option>
                </select>
              </div>
            </div>

            {enrolledCourses.length === 0 ? (
              <div className="bg-white rounded-lg shadow-sm p-8 text-center">
                <Bookmark className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium mb-2">No courses yet</h3>
                <p className="text-gray-600 mb-6">You haven't enrolled in any courses yet.</p>
                <Link to="/courses" className="btn btn-primary">
                  Browse Courses
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {enrolledCourses.map(course => (
                  <div key={course.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                    <div className="md:flex">
                      <div className="md:w-1/3">
                        <img 
                          src={course.image} 
                          alt={course.title} 
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="p-6 md:w-2/3">
                        <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
                        
                        {course.completed ? (
                          <div className="flex items-center text-green-600 mb-4">
                            <CheckSquare className="w-5 h-5 mr-1" />
                            <span>Completed</span>
                          </div>
                        ) : (
                          <>
                            <div className="flex justify-between mb-1">
                              <span className="text-sm text-gray-600">Progress</span>
                              <span className="text-sm font-medium">{course.progress}%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                              <div 
                                className="bg-primary-600 h-2 rounded-full" 
                                style={{ width: `${course.progress}%` }}
                              ></div>
                            </div>
                            
                            <div className="mb-4">
                              <span className="text-sm text-gray-600">Next Lesson:</span>
                              <div className="flex items-center mt-1">
                                <Play className="w-4 h-4 text-primary-600 mr-2" />
                                <span className="font-medium">{course.nextLesson}</span>
                              </div>
                            </div>
                          </>
                        )}
                        
                        <div className="flex items-center text-sm text-gray-500 mb-4">
                          <Clock className="w-4 h-4 mr-1" />
                          <span>Last accessed {course.lastAccessed}</span>
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <div className="text-sm">
                            <span className="text-gray-600">Quizzes: </span>
                            <span className="font-medium">{course.quizzesCompleted}/{course.quizzes} completed</span>
                          </div>
                          
                          <Link 
                            to={`/courses/${course.id}`} 
                            className="btn btn-primary"
                          >
                            {course.completed ? 'Review' : 'Continue'}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Recommended Courses */}
            <div className="mt-12">
              <h2 className="text-xl font-bold mb-6">Recommended For You</h2>
              
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="md:flex items-center">
                  <div className="md:w-1/4 mb-4 md:mb-0">
                    <img 
                      src="https://images.pexels.com/photos/8127803/pexels-photo-8127803.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                      alt="Georgia Security Officer Training" 
                      className="rounded-lg w-full h-40 object-cover"
                    />
                  </div>
                  <div className="md:w-2/4 md:px-6">
                    <h3 className="text-lg font-semibold mb-2">Georgia Security Officer Training</h3>
                    <p className="text-gray-600 mb-3">
                      Comprehensive training for Georgia security officers. Meets all state requirements for certification.
                    </p>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>40 hours total</span>
                      <span className="mx-2">•</span>
                      <Award className="w-4 h-4 mr-1" />
                      <span>Certificate included</span>
                    </div>
                  </div>
                  <div className="md:w-1/4 mt-4 md:mt-0 text-right">
                    <div className="text-lg font-bold text-primary-700 mb-3">$179.99</div>
                    <Link to="/courses/georgia-security" className="btn btn-primary">
                      View Course
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Consultations Tab */}
        {activeTab === 'consultations' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">My Consultations</h2>
              <Link to="/consultation" className="btn btn-outline">
                Request New Consultation
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-sm divide-y divide-gray-200">
              <div className="p-6">
                <h3 className="text-lg font-medium mb-1">Upcoming Consultations</h3>
                <p className="text-sm text-gray-500 mb-4">Your scheduled consultations with our experts</p>
                
                {upcomingConsultations.length === 0 ? (
                  <div className="text-center py-8">
                    <Clock className="h-10 w-10 text-gray-400 mx-auto mb-3" />
                    <h3 className="text-lg font-medium mb-1">No upcoming consultations</h3>
                    <p className="text-gray-600 mb-4">You don't have any consultations scheduled.</p>
                    <Link to="/consultation" className="btn btn-primary">
                      Schedule Consultation
                    </Link>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {upcomingConsultations.map(consultation => (
                      <div key={consultation.id} className="border border-gray-200 rounded-lg p-4">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                          <div>
                            <h4 className="font-medium mb-1">{consultation.title}</h4>
                            <div className="flex flex-wrap gap-x-4 text-sm text-gray-600">
                              <div className="flex items-center">
                                <Calendar className="w-4 h-4 mr-1" />
                                <span>{consultation.date}</span>
                              </div>
                              <div className="flex items-center">
                                <Clock className="w-4 h-4 mr-1" />
                                <span>{consultation.time}</span>
                              </div>
                              <div className="flex items-center">
                                <Video className="w-4 h-4 mr-1" />
                                <span>{consultation.type} Consultation</span>
                              </div>
                            </div>
                          </div>
                          <div className="mt-3 md:mt-0 flex items-center space-x-3">
                            <button className="btn btn-outline py-1 px-3">
                              Reschedule
                            </button>
                            <button className="btn btn-primary py-1 px-3">
                              Join Now
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-medium mb-1">Past Consultations</h3>
                <p className="text-sm text-gray-500 mb-4">Review your previous consultation sessions</p>
                
                <div className="text-center py-8">
                  <FileText className="h-10 w-10 text-gray-400 mx-auto mb-3" />
                  <h3 className="text-lg font-medium mb-1">No past consultations</h3>
                  <p className="text-gray-600">You don't have any completed consultations yet.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Certificates Tab */}
        {activeTab === 'certificates' && (
          <div>
            <h2 className="text-xl font-bold mb-6">My Certificates</h2>
            
            {enrolledCourses.filter(course => course.completed).length === 0 ? (
              <div className="bg-white rounded-lg shadow-sm p-8 text-center">
                <Award className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium mb-2">No certificates yet</h3>
                <p className="text-gray-600 mb-6">
                  Complete a course to earn your certificate. Certificates will appear here once you've successfully finished a training program.
                </p>
                <Link to="/courses" className="btn btn-primary">
                  Browse Courses
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {enrolledCourses
                  .filter(course => course.completed)
                  .map(course => (
                    <div key={course.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                      <div className="border-b border-gray-200 px-6 py-4">
                        <div className="flex justify-between items-center">
                          <h3 className="font-medium">{course.certificate}</h3>
                          <Award className="h-6 w-6 text-primary-600" />
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="text-sm text-gray-600">
                            <p>Course: {course.title}</p>
                            <p>Issued: May 15, 2025</p>
                            <p>Certificate ID: CERT-{Math.random().toString(36).substring(2, 10).toUpperCase()}</p>
                          </div>
                          <img 
                            src="https://images.pexels.com/photos/7235677/pexels-photo-7235677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                            alt="Certificate Seal" 
                            className="h-16 w-16 object-contain opacity-25"
                          />
                        </div>
                        
                        <div className="flex space-x-3">
                          <button className="btn btn-outline py-1 flex-1">
                            Download PDF
                          </button>
                          <button className="btn btn-primary py-1 flex-1">
                            View Certificate
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            )}
            
            <div className="mt-8 bg-primary-50 border border-primary-200 rounded-lg p-6">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold mb-1">Need to verify a certificate?</h3>
                  <p className="text-gray-700">
                    Employers can verify the authenticity of certificates using our verification tool.
                  </p>
                </div>
                <a href="/verify-certificate" className="mt-4 md:mt-0 btn btn-primary">
                  Certificate Verification
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Account Settings Tab */}
        {activeTab === 'settings' && (
          <div>
            <h2 className="text-xl font-bold mb-6">Account Settings</h2>
            
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="border-b border-gray-200">
                <div className="px-6 py-5">
                  <h3 className="text-lg font-medium">Personal Information</h3>
                  <p className="text-sm text-gray-500">Update your account information</p>
                </div>
              </div>
              
              <div className="p-6">
                <form>
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div>
                      <label htmlFor="firstName" className="form-label">First Name</label>
                      <input
                        id="firstName"
                        type="text"
                        className="form-input"
                        defaultValue={user.name.split(' ')[0]}
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="lastName" className="form-label">Last Name</label>
                      <input
                        id="lastName"
                        type="text"
                        className="form-input"
                        defaultValue={user.name.split(' ')[1] || ''}
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="form-label">Email Address</label>
                      <input
                        id="email"
                        type="email"
                        className="form-input"
                        defaultValue={user.email}
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="form-label">Phone Number</label>
                      <input
                        id="phone"
                        type="tel"
                        className="form-input"
                        placeholder="(123) 456-7890"
                      />
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <button type="submit" className="btn btn-primary">
                      Save Changes
                    </button>
                  </div>
                </form>
              </div>
            </div>
            
            <div className="mt-8 bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="border-b border-gray-200">
                <div className="px-6 py-5">
                  <h3 className="text-lg font-medium">Password</h3>
                  <p className="text-sm text-gray-500">Update your password</p>
                </div>
              </div>
              
              <div className="p-6">
                <form>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="currentPassword" className="form-label">Current Password</label>
                      <input
                        id="currentPassword"
                        type="password"
                        className="form-input"
                        placeholder="••••••••"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="newPassword" className="form-label">New Password</label>
                      <input
                        id="newPassword"
                        type="password"
                        className="form-input"
                        placeholder="••••••••"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="confirmPassword" className="form-label">Confirm New Password</label>
                      <input
                        id="confirmPassword"
                        type="password"
                        className="form-input"
                        placeholder="••••••••"
                      />
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <button type="submit" className="btn btn-primary">
                      Update Password
                    </button>
                  </div>
                </form>
              </div>
            </div>
            
            <div className="mt-8 bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="border-b border-gray-200">
                <div className="px-6 py-5">
                  <h3 className="text-lg font-medium">Notification Settings</h3>
                  <p className="text-sm text-gray-500">Manage your notification preferences</p>
                </div>
              </div>
              
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Course Updates</h4>
                      <p className="text-sm text-gray-500">Receive notifications about course updates and new content</p>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="course-updates"
                        type="checkbox"
                        className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                        defaultChecked
                      />
                      <label htmlFor="course-updates" className="ml-2 text-sm text-gray-700 sr-only">
                        Course Updates
                      </label>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Consultation Reminders</h4>
                        <p className="text-sm text-gray-500">Receive reminders about upcoming consultations</p>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="consultation-reminders"
                          type="checkbox"
                          className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                          defaultChecked
                        />
                        <label htmlFor="consultation-reminders" className="ml-2 text-sm text-gray-700 sr-only">
                          Consultation Reminders
                        </label>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Promotional Emails</h4>
                        <p className="text-sm text-gray-500">Receive emails about special offers and new courses</p>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="promotional-emails"
                          type="checkbox"
                          className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                          defaultChecked
                        />
                        <label htmlFor="promotional-emails" className="ml-2 text-sm text-gray-700 sr-only">
                          Promotional Emails
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <button className="btn btn-primary">
                    Save Preferences
                  </button>
                </div>
              </div>
            </div>
            
            <div className="mt-8 bg-accent-50 border border-accent-200 rounded-lg p-6">
              <h3 className="text-lg font-medium text-accent-800 mb-2">Account Actions</h3>
              <p className="text-gray-700 mb-4">
                These actions cannot be undone. Please be certain.
              </p>
              <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-4">
                <button className="btn btn-outline text-accent-700 border-accent-300 hover:bg-accent-50 hover:text-accent-800">
                  <Lock className="w-4 h-4 mr-2" />
                  Log Out of All Devices
                </button>
                <button className="btn btn-outline text-accent-700 border-accent-300 hover:bg-accent-50 hover:text-accent-800">
                  <Lock className="w-4 h-4 mr-2" />
                  Delete Account
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardPage;