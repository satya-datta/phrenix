import { Link } from "wouter";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50">
      <div className="bg-white p-12 rounded-2xl shadow-xl border border-gray-100 text-center max-w-md w-full mx-4">
        <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6">
          <AlertCircle className="h-10 w-10 text-red-500" />
        </div>
        
        <h1 className="text-4xl font-bold font-display text-gray-900 mb-4">404</h1>
        <p className="text-xl font-semibold text-gray-800 mb-2">Page Not Found</p>
        <p className="text-gray-500 mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>

        <Link href="/">
          <button className="w-full bg-[#F7DB91] hover:bg-[#F2D070] text-black font-bold py-3 px-6 rounded-lg transition-colors">
            Return Home
          </button>
        </Link>
      </div>
    </div>
  );
}
