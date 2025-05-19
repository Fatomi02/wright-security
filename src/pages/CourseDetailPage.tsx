import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Clock, Calendar, CheckCircle, AlertCircle, Award, FileText, User, Video, Globe, BookOpen, Star } from 'lucide-react';
import { courses } from '../data/courses';
import { useAuth } from '../contexts/AuthContext';

const CourseDetailPage = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const { isAuthenticated } = useAuth();
  const [activeTab, setActiveTab] = useState<'overview' | 'curriculum' | 'instructor' | 'reviews'>('overview');
  
  // Find the course by ID
  const course = courses.find(c => c.id === courseId);
  
  if (!course) {
    return (
      <div className="container py-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Course Not Found</h2>
        <p className="mb-6">The course you're looking for doesn't exist or has been removed.</p>
        <Link to="/courses" className="btn btn-primary">
          Back to Courses
        </Link>
      </div>
    );
  }

  const handleEnroll = () => {
    // This would typically handle payment processing and enrollment
    console.log('Enrolling in course:', course.id);
  };

  return (
    <div className="bg-gray-50">
      {/* Course Header */}
      <section className="bg-primary-800 text-white py-12">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-2/3">
              <div className="mb-4">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                  course.category === 'armed' 
                    ? 'bg-accent-100 text-accent-800' 
                    : course.category === 'unarmed'
                    ? 'bg-primary-100 text-primary-800'
                    : course.category === 'specialized'
                    ? 'bg-purple-100 text-purple-800'
                    : 'bg-green-100 text-green-800'
                }`}>
                  {course.category === 'armed' 
                    ? 'Armed Security' 
                    : course.category === 'unarmed'
                    ? 'Unarmed Security'
                    : course.category === 'specialized'
                    ? 'Specialized'
                    : 'License Renewal'
                  }
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{course.title}</h1>
              <p className="text-lg mb-6">{course.description}</p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span>{course.format}</span>
                </div>
                <div className="flex items-center">
                  <User className="w-5 h-5 mr-2" />
                  <span>{course.students} Students</span>
                </div>
                <div className="flex items-center">
                  <Award className="w-5 h-5 mr-2" />
                  <span>{course.certification ? 'Certificate' : 'No Certificate'}</span>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/3">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="aspect-video relative">
                  <img 
                    src={course.image} 
                    alt={course.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-2xl font-bold text-primary-700">${course.price}</div>
                    <div className="flex items-center">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < Math.floor(course.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
                      ))}
                      <span className="ml-1 text-sm text-gray-600">({course.reviews} reviews)</span>
                    </div>
                  </div>
                  
                  {isAuthenticated ? (
                    <button 
                      onClick={handleEnroll}
                      className="btn btn-accent w-full py-3 mb-4">
                      Enroll Now
                    </button>
                  ) : (
                    <Link to="/login" className="btn btn-accent w-full py-3 mb-4 text-center">
                      Login to Enroll
                    </Link>
                  )}
                  
                  <Link to="/consultation" className="btn btn-outline w-full py-3 text-center">
                    Request Information
                  </Link>
                  
                  <div className="mt-6 space-y-3">
                    <h4 className="font-medium">This course includes:</h4>
                    
                    <div className="flex items-start">
                      <Video className="w-5 h-5 mr-3 text-primary-600 mt-0.5" />
                      <span>{course.videos} hours of video content</span>
                    </div>
                    
                    <div className="flex items-start">
                      <FileText className="w-5 h-5 mr-3 text-primary-600 mt-0.5" />
                      <span>Comprehensive study materials</span>
                    </div>
                    
                    <div className="flex items-start">
                      <Globe className="w-5 h-5 mr-3 text-primary-600 mt-0.5" />
                      <span>{course.format}</span>
                    </div>
                    
                    <div className="flex items-start">
                      <BookOpen className="w-5 h-5 mr-3 text-primary-600 mt-0.5" />
                      <span>Practice quizzes and tests</span>
                    </div>
                    
                    {course.certification && (
                      <div className="flex items-start">
                        <Award className="w-5 h-5 mr-3 text-primary-600 mt-0.5" />
                        <span>Certificate of completion</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="py-12">
        <div className="container">
          {/* Tabs */}
          <div className="border-b border-gray-200 mb-8">
            <div className="flex flex-wrap -mb-px">
              <button
                onClick={() => setActiveTab('overview')}
                className={`inline-flex items-center py-4 px-6 border-b-2 text-sm font-medium ${
                  activeTab === 'overview'
                    ? 'border-primary-600 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Overview
              </button>
              
              <button
                onClick={() => setActiveTab('curriculum')}
                className={`inline-flex items-center py-4 px-6 border-b-2 text-sm font-medium ${
                  activeTab === 'curriculum'
                    ? 'border-primary-600 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Curriculum
              </button>
              
              <button
                onClick={() => setActiveTab('instructor')}
                className={`inline-flex items-center py-4 px-6 border-b-2 text-sm font-medium ${
                  activeTab === 'instructor'
                    ? 'border-primary-600 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Instructor
              </button>
              
              <button
                onClick={() => setActiveTab('reviews')}
                className={`inline-flex items-center py-4 px-6 border-b-2 text-sm font-medium ${
                  activeTab === 'reviews'
                    ? 'border-primary-600 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Reviews
              </button>
            </div>
          </div>
          
          {/* Tab Content */}
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold mb-4">Course Overview</h2>
                <p className="text-gray-700">
                  {course.longDescription || course.description}
                </p>
                
                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-4">What You'll Learn</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {course.learningObjectives?.map((objective, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span>{objective}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-4">Requirements</h3>
                  <div className="space-y-3">
                    {course.requirements?.map((requirement, index) => (
                      <div key={index} className="flex items-start">
                        <AlertCircle className="w-5 h-5 text-gray-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span>{requirement}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {course.certification && (
                  <div className="mt-8 bg-green-50 border border-green-200 rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-2 flex items-center">
                      <Award className="w-6 h-6 text-green-500 mr-2" />
                      Certification Information
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Upon successful completion of this course and passing all required assessments, you will receive an official certification recognized by state licensing authorities.
                    </p>
                    <p className="text-sm text-gray-600">
                      This course fulfills the training requirements for {course.title} in compliance with {course.category === 'armed' ? 'Florida Statute 493.6115' : 'Florida Statute 493.6103'} and Georgia Board of Private Detective and Security Agencies regulations.
                    </p>
                  </div>
                )}
              </div>
            )}
            
            {activeTab === 'curriculum' && (
              <div>
                <h2 className="text-2xl font-bold mb-6">Course Curriculum</h2>
                <div className="space-y-4">
                  {course.curriculum?.map((section, sectionIndex) => (
                    <div key={sectionIndex} className="border border-gray-200 rounded-lg overflow-hidden">
                      <div className="bg-gray-50 px-4 py-3 flex justify-between items-center">
                        <h3 className="font-medium">{section.title}</h3>
                        <span className="text-sm text-gray-500">{section.duration}</span>
                      </div>
                      <div className="divide-y divide-gray-200">
                        {section.lessons.map((lesson, lessonIndex) => (
                          <div key={lessonIndex} className="px-4 py-3 flex justify-between items-center">
                            <div className="flex items-center">
                              {lesson.type === 'video' ? (
                                <Video className="w-5 h-5 text-primary-500 mr-3" />
                              ) : lesson.type === 'quiz' ? (
                                <FileText className="w-5 h-5 text-accent-500 mr-3" />
                              ) : (
                                <BookOpen className="w-5 h-5 text-primary-500 mr-3" />
                              )}
                              <span>{lesson.title}</span>
                            </div>
                            <span className="text-sm text-gray-500">{lesson.duration}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                
                {!isAuthenticated && (
                  <div className="mt-8 bg-primary-50 border border-primary-200 rounded-lg p-6 text-center">
                    <h3 className="text-xl font-semibold mb-2">Ready to start learning?</h3>
                    <p className="text-gray-700 mb-4">
                      Enroll now to access all course materials and start your security training journey.
                    </p>
                    <Link to="/login" className="btn btn-primary px-8">
                      Login to Enroll
                    </Link>
                  </div>
                )}
              </div>
            )}
            
            {activeTab === 'instructor' && (
              <div>
                <h2 className="text-2xl font-bold mb-6">Meet Your Instructor</h2>
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <div className="md:w-1/4">
                    <img 
                      src="https://images.pexels.com/photos/6325953/pexels-photo-6325953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                      alt="Instructor" 
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                  <div className="md:w-3/4">
                    <h3 className="text-xl font-semibold mb-2">Robert Wright</h3>
                    <p className="text-gray-600 mb-4">Security Training Expert with 20+ years of experience</p>
                    <p className="text-gray-700 mb-4">
                      Robert Wright is a former law enforcement officer with over 20 years of experience in the security industry. He has trained hundreds of security professionals and is certified by both Florida and Georgia state agencies as an approved security instructor.
                    </p>
                    <p className="text-gray-700 mb-4">
                      With expertise in armed and unarmed security, defensive tactics, and security management, Robert brings real-world experience to the classroom. His hands-on approach to training ensures students are well-prepared for their security careers.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                        Certified Security Instructor
                      </span>
                      <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                        Former Law Enforcement
                      </span>
                      <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                        Firearms Expert
                      </span>
                      <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                        Defensive Tactics
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'reviews' && (
              <div>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                  <h2 className="text-2xl font-bold">Student Reviews</h2>
                  <div className="flex items-center mt-2 md:mt-0">
                    <div className="flex">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className={`w-5 h-5 ${i < Math.floor(course.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
                      ))}
                    </div>
                    <span className="ml-2 text-gray-600">{course.rating} out of 5 ({course.reviews} reviews)</span>
                  </div>
                </div>
                
                {/* Sample reviews */}
                <div className="space-y-6">
                  <div className="border-b border-gray-200 pb-6">
                    <div className="flex justify-between mb-2">
                      <div className="flex items-center">
                        <img 
                          src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                          alt="Reviewer" 
                          className="w-10 h-10 rounded-full mr-3"
                        />
                        <div>
                          <h4 className="font-medium">James Wilson</h4>
                          <p className="text-gray-500 text-sm">3 months ago</p>
                        </div>
                      </div>
                      <div className="flex">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} className={`w-4 h-4 ${i < 5 ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-700">
                      Excellent course that prepared me well for my security career. The instructor was knowledgeable and the hands-on training was invaluable. I passed my state exam on the first try.
                    </p>
                  </div>
                  
                  <div className="border-b border-gray-200 pb-6">
                    <div className="flex justify-between mb-2">
                      <div className="flex items-center">
                        <img 
                          src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                          alt="Reviewer" 
                          className="w-10 h-10 rounded-full mr-3"
                        />
                        <div>
                          <h4 className="font-medium">Lisa Johnson</h4>
                          <p className="text-gray-500 text-sm">1 month ago</p>
                        </div>
                      </div>
                      <div className="flex">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} className={`w-4 h-4 ${i < 4 ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-700">
                      The online portions were well-organized and easy to follow. I appreciated the flexibility to complete coursework on my own schedule. The only improvement would be more practice scenarios.
                    </p>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <div className="flex items-center">
                        <img 
                          src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                          alt="Reviewer" 
                          className="w-10 h-10 rounded-full mr-3"
                        />
                        <div>
                          <h4 className="font-medium">Michael Thomas</h4>
                          <p className="text-gray-500 text-sm">2 weeks ago</p>
                        </div>
                      </div>
                      <div className="flex">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} className={`w-4 h-4 ${i < 5 ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-700">
                      Top-notch training! Robert is an exceptional instructor who clearly knows the material inside and out. The course covered everything I needed to know for my armed security position, and the range training was comprehensive and safe.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Related Courses */}
      <section className="py-12 bg-gray-50">
        <div className="container">
          <h2 className="text-2xl font-bold mb-8">Related Courses</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {courses
              .filter(c => c.id !== course.id && c.category === course.category)
              .slice(0, 3)
              .map(relatedCourse => (
                <div key={relatedCourse.id} className="card group hover:shadow-lg">
                  <div className="relative">
                    <img 
                      src={relatedCourse.image} 
                      alt={relatedCourse.title} 
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary-600 transition-colors">
                      {relatedCourse.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {relatedCourse.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-primary-700">${relatedCourse.price}</span>
                      <Link to={`/courses/${relatedCourse.id}`} className="btn btn-primary">
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CourseDetailPage;