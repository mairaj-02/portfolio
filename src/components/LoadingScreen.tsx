'use client';

import { useEffect, useState } from 'react';
import { Zap } from 'lucide-react';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 seconds loading time

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 flex items-center justify-center z-50">
      <div className="relative">
        {/* Main lightning bolt */}
        <div className="relative animate-lightning-pulse">
          <Zap className="h-24 w-24 md:h-32 md:w-32 text-blue-400" />
          <div className="absolute inset-0 bg-blue-400 rounded-full blur-xl opacity-60 animate-ping"></div>
        </div>
        
        {/* Surrounding energy rings */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="absolute w-32 h-32 md:w-40 md:h-40 border-2 border-blue-400 rounded-full animate-ping opacity-20"></div>
          <div className="absolute w-40 h-40 md:w-48 md:h-48 border-2 border-orange-400 rounded-full animate-ping opacity-20" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute w-48 h-48 md:w-56 md:h-56 border-2 border-blue-400 rounded-full animate-ping opacity-20" style={{ animationDelay: '1s' }}></div>
        </div>
        
        {/* Loading text */}
        <div className="text-center mt-8">
          <p className="text-xl md:text-2xl font-bold text-blue-400 animate-pulse">POWERING UP...</p>
        </div>
      </div>
    </div>
  );
}