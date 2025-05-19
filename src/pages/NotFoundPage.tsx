import { Link } from 'react-router-dom';
import { AlertTriangle } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <div className="min-h-[80vh] bg-gray-50 flex flex-col justify-center py-12">
      <div className="container mx-auto px-4 text-center">
        <div className="bg-white p-8 max-w-lg mx-auto rounded-lg shadow-sm">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center">
              <AlertTriangle className="h-10 w-10 text-primary-600" />
            </div>
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Page Not Found</h2>
          <p className="text-gray-600 mb-8">
            The page you are looking for doesn't exist or has been moved.
          </p>
          
          <div className="space-y-4">
            <Link to="/" className="btn btn-primary w-full py-2.5">
              Return to Home
            </Link>
            
            <Link to="/courses" className="btn btn-outline w-full py-2.5">
              Browse Courses
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;