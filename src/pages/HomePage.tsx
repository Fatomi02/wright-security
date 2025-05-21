import {
  ArrowRight,
  Award,
  CheckCircle,
  Clock,
  Shield,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px] bg-gradient-to-br from-primary-900 to-primary-800 text-white py-20 md:py-28">
        <div className="absolute inset-0 bg-[url('https://d72bded4c6f00421a5e6.cdn6.editmysite.com/uploads/b/d72bded4c6f00421a5e65368a74ba3c8e3dafa0a3bf84eb070b1e124e9091b27/2023-05-23_12-08-15_1684858111.jpg?width=2400&optimize=medium&height=480&fit=cover&dpr=1')] opacity-20 bg-center mix-blend-overlay"></div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight fadeIn">
              Professional Security Training & Certification
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-100 fadeIn">
              Expert security training services compliant with Florida and
              Georgia guidelines. Start your career in security with
              industry-leading instruction.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 slideUp">
              <Link
                to="/courses"
                className="btn btn-accent px-6 py-3 text-base"
              >
                Explore Courses
              </Link>
              <Link
                to="/consultation"
                className="btn btn-outline border-white text-white hover:bg-white/10 px-6 py-3 text-base"
              >
                Request Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold">
              Why Choose Wright Security Consultant Training
            </h2>
            <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
              We provide comprehensive security training with a focus on
              practical skills and industry compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-gray-50 transition-transform hover:translate-y-[-5px]">
              <div className="w-14 h-14 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mb-4">
                <Award className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Certified Instructors
              </h3>
              <p className="text-gray-600">
                Learn from experienced industry professionals with decades of
                security experience.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-gray-50 transition-transform hover:translate-y-[-5px]">
              <div className="w-14 h-14 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mb-4">
                <CheckCircle className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold mb-3">State Compliant</h3>
              <p className="text-gray-600">
                All courses fully comply with Florida and Georgia state security
                training requirements.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-gray-50 transition-transform hover:translate-y-[-5px]">
              <div className="w-14 h-14 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mb-4">
                <Clock className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Flexible Learning</h3>
              <p className="text-gray-600">
                Choose from in-person, online, or hybrid training programs to
                fit your schedule.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Preview Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold">Featured Courses</h2>
              <p className="text-lg text-gray-600 mt-3">
                Start your security career with our top-rated training programs
              </p>
            </div>
            <Link
              to="/courses"
              className="mt-4 md:mt-0 flex items-center text-primary-600 font-medium"
            >
              View All Courses <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Course Card 1 */}
            <div className="card group hover:shadow-lg">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/5699377/pexels-photo-5699377.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="G License Security Officer Training"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-accent-600 text-white py-1 px-3 rounded-full text-sm font-medium">
                  Popular
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary-600 transition-colors">
                  G License Security Officer Training
                </h3>
                <p className="text-gray-600 mb-4">
                  Complete training for Florida Class G Armed Security Officer
                  License. Includes classroom and range instruction.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-primary-700">
                    $199.99
                  </span>
                  <Link to="/courses/g-license" className="btn btn-primary">
                    View Details
                  </Link>
                </div>
              </div>
            </div>

            {/* Course Card 2 */}
            <div className="card group hover:shadow-lg">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/8346914/pexels-photo-8346914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="D License Security Officer Training"
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary-600 transition-colors">
                  D License Security Officer Training
                </h3>
                <p className="text-gray-600 mb-4">
                  40-hour course for Florida Class D Security Officer License.
                  Learn essential security procedures and regulations.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-primary-700">
                    $149.99
                  </span>
                  <Link to="/courses/d-license" className="btn btn-primary">
                    View Details
                  </Link>
                </div>
              </div>
            </div>

            {/* Course Card 3 */}
            <div className="card group hover:shadow-lg">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/8127803/pexels-photo-8127803.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Georgia Security Officer Training"
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary-600 transition-colors">
                  Georgia Security Officer Training
                </h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive training for Georgia security officers. Meets
                  all state requirements for certification.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-primary-700">
                    $179.99
                  </span>
                  <Link
                    to="/courses/georgia-security"
                    className="btn btn-primary"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold">What Our Students Say</h2>
            <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
              Don't just take our word for it. Hear from our successful
              graduates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <div className="flex items-center mb-4">
                <img
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Michael Johnson"
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-medium">Michael Johnson</h4>
                  <p className="text-sm text-gray-600">Security Supervisor</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "The G License training was thorough and professional. The
                instructors were knowledgeable and made sure we understood the
                material. I passed my state exam on the first try!"
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <div className="flex items-center mb-4">
                <img
                  src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Sarah Williams"
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-medium">Sarah Williams</h4>
                  <p className="text-sm text-gray-600">Event Security</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "As someone with no prior security experience, I was nervous
                about starting this career. Wright Security Consultant made the
                training accessible and gave me the confidence to succeed."
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <div className="flex items-center mb-4">
                <img
                  src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="David Rodriguez"
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-medium">David Rodriguez</h4>
                  <p className="text-sm text-gray-600">Hospital Security</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "The online course was flexible with my busy schedule, and the
                video consultations helped clarify concepts I struggled with.
                Highly recommend for working professionals."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Florida Section */}
      <section className="py-12 bg-gray-50">
        <div className="container">
          <div className="text-center flex flex-col gap-1">
            <h1 className="text-4xl font-bold">Florida & Georgia Guidelines</h1>
            <p className="text-lg text-primary-600">
              Official resources and statutes for compliance and licensing.
            </p>
          </div>
          <main className="max-w-4xl mx-auto px-6 py-10 space-y-16">
            <section className="border border-primary-600 rounded-lg p-6 shadow-md bg-black/80">
              <h2 className="text-xl lg:text-2xl font-semibold mb-4 text-primary-600">
                Florida Administrative Code - Chapter 5N-1
              </h2>
              <p className="mb-2 text-white">
                Chapter 5N-1 provides rules for licensing and regulation under
               PRIVATE INVESTIGATIVE, SECURITY AND REPOSSESSION ACTIVITIES, SCHOOLS.
              </p>
              <a
                href="https://flrules.org/gateway/ChapterHome.asp?Chapter=5N-1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 underline hover:text-primary-600 transition"
              >
                View Official Florida Chapter 5N-1 Rules
              </a>
            </section>

            {/* Georgia Section */}
            <section className="border border-primary-600 rounded-lg p-6 shadow-md bg-black/80">
              <h2 className="text-xl lg:text-2xl font-semibold mb-4 text-primary-600">
                Georgia Guidelines
              </h2>
              <p className="mb-2 text-white">
                Georgia-specific administrative rules are currently under
                review. Check back soon for updated compliance documents and
                regulatory resources.
              </p>
                            <a
                href="https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0400-0499/0493/0493.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 underline hover:text-primary-600 transition"
              >
                View Official Georgia Chapter 5N-1 Rules
              </a>
            </section>
          </main>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-800 text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Security Career?
            </h2>
            <p className="text-lg mb-8 text-gray-100">
              Enroll in our state-approved security training courses today and
              take the first step toward your new career.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/courses"
                className="btn btn-accent px-6 py-3 text-base"
              >
                Browse Courses
              </Link>
              <Link
                to="/contact"
                className="btn btn-outline border-white text-white hover:bg-white/10 px-6 py-3 text-base"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-12 bg-gray-50">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h3 className="text-2xl font-semibold mb-4">
                State Certified & Compliant
              </h3>
              <p className="text-gray-700 mb-4">
                Our training programs meet all requirements set by Florida and
                Georgia regulatory agencies for security officer training and
                licensing.
              </p>
              <div className="flex flex-col space-y-3">
                <div className="flex items-center">
                  <Shield className="w-5 h-5 text-primary-600 mr-2" />
                  <span className="capitalize">
                    Florida Department of Security Aan Repossession Activities.
                  </span>
                </div>
                <div className="flex items-center">
                  <Shield className="w-5 h-5 text-primary-600 mr-2" />
                  <span>
                    Georgia Board of Private Detective and Security Agencies
                  </span>
                </div>
                <div className="flex items-center">
                  <Users className="w-5 h-5 text-primary-600 mr-2" />
                  <span>Veteran-Owned Business</span>
                </div>
              </div>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <img
                src="https://images.pexels.com/photos/7709222/pexels-photo-7709222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Certification badge"
                className="rounded-lg shadow-md max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CEO Section */}
      <section className="py-12 bg-primary-800">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h3 className="text-4xl font-semibold mb-4 text-white">
                CEO / Owner
              </h3>
              <div className="flex flex-col space-y-3 text-white">
                <div className="flex items-center">
                  <span>License Notary</span>
                </div>
                <div className="flex items-center">
                  <span>Licensed Instructor</span>
                </div>
                <div className="flex items-center">
                  <span>Licensed Security School & Business</span>
                </div>
                <div className="flex items-center">
                  <span>Services Florida & Georgia Residence</span>
                </div>
              </div>
            </div>
            <div className="md:w-2/3 flex justify-center">
              <img
                src="assets/images/ceo.png"
                alt="Certification badge"
                className="rounded-lg shadow-md max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
