import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, Clock, Calendar, Award, Users } from 'lucide-react';
import { courses } from '../data/courses';

type CourseCategory = 'all' | 'armed' | 'unarmed' | 'specialized' | 'renewal';

const CoursesPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<CourseCategory>('all');

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-gray-50">
      {/* Header */}
      <section className="bg-primary-800 text-white py-16">
        <div className="container">
          <h1 className="text-4xl font-bold mb-4">Security Training Courses</h1>
          <p className="text-xl max-w-3xl">
            Browse our comprehensive selection of state-approved security training courses
            designed to help you start or advance your career in the security industry.
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-white border-b">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-grow">
              <input
                type="text"
                placeholder="Search courses..."
                className="form-input pl-10 w-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            </div>
            
            <div className="flex items-center space-x-2 w-full md:w-auto">
              <Filter className="text-gray-500 h-5 w-5" />
              <span className="text-sm font-medium text-gray-700">Filter:</span>
              <select 
                className="form-input py-2"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value as CourseCategory)}
              >
                <option value="all">All Courses</option>
                <option value="armed">Armed Security</option>
                <option value="unarmed">Unarmed Security</option>
                <option value="specialized">Specialized Training</option>
                <option value="renewal">License Renewal</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Course Listing */}
      <section className="py-12">
        <div className="container">
          {filteredCourses.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium text-gray-700 mb-2">No courses found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map((course) => (
                <div key={course.id} className="card group hover:shadow-lg">
                  <div className="relative">
                    <img 
                      src={course.image} 
                      alt={course.title} 
                      className="w-full h-48 object-cover"
                    />
                    {course.featured && (
                      <div className="absolute top-4 right-4 bg-accent-600 text-white py-1 px-3 rounded-full text-sm font-medium">
                        Popular
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center mb-2">
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
                    
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary-600 transition-colors">
                      {course.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {course.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-4 mb-4">
                      <div className="flex items-center text-gray-500 text-sm">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{course.duration}</span>
                      </div>
                      
                      <div className="flex items-center text-gray-500 text-sm">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>{course.format}</span>
                      </div>
                      
                      {course.certification && (
                        <div className="flex items-center text-gray-500 text-sm">
                          <Award className="w-4 h-4 mr-1" />
                          <span>Certification</span>
                        </div>
                      )}
                    </div>
                    
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-lg font-bold text-primary-700">${course.price}</span>
                      <Link to={`/courses/${course.id}`} className="btn btn-primary">
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-primary-50">
        <div className="container">
          <div className="bg-white rounded-lg shadow-sm p-8 flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-2/3 mb-6 md:mb-0">
              <h2 className="text-2xl font-bold mb-2">Need Help Choosing a Course?</h2>
              <p className="text-gray-600">
                Our security training experts can help you determine which courses are right for your career goals and meet state requirements.
              </p>
            </div>
            <div>
              <Link to="/consultation" className="btn btn-primary">
                Request a Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto divide-y divide-gray-200">
            <div className="py-6">
              <h3 className="text-lg font-medium text-gray-900 mb-2">How long does it take to get a security license?</h3>
              <p className="text-gray-600">
                The time to obtain a security license varies by state and license type. In Florida, after completing the required training (typically 40 hours for D license), you can apply for your license which generally takes 30-45 days for processing. Georgia has similar timeframes.
              </p>
            </div>
            
            <div className="py-6">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Do I need to renew my security license?</h3>
              <p className="text-gray-600">
                Yes, security licenses require renewal. In Florida, Class D licenses must be renewed every 2 years, and Class G licenses must be renewed every 2 years with an additional firearms requalification annually. Georgia security licenses typically require renewal every 2 years.
              </p>
            </div>
            
            <div className="py-6">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Can I take security training courses online?</h3>
              <p className="text-gray-600">
                Many security training components can be completed online, especially the theoretical portions. However, certain aspects like firearms training for armed security licenses must be completed in person at an approved facility.
              </p>
            </div>
            
            <div className="py-6">
              <h3 className="text-lg font-medium text-gray-900 mb-2">What are the requirements to get an armed security license?</h3>
              <p className="text-gray-600">
                For an armed security license (Class G in Florida), you must first obtain an unarmed license (Class D), be at least 21 years old, be legally able to possess a firearm, complete specialized firearms training, and pass a background check. Additional requirements may apply based on your state.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoursesPage;