import React from 'react';

const AppProjectt = () => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        📱 Mobile App Development
      </h2>

      <p className="text-gray-700 mb-4">
        I am currently learning mobile app development using{' '}
        <span className="font-semibold">React Native</span> to build
        cross-platform mobile applications.
      </p>

      <div className="text-left mt-4">
        <h3 className="text-lg font-semibold text-indigo-700 mb-2">
          📘 Learning Topics:
        </h3>
        <ul className="list-disc pl-6 text-gray-800 space-y-1">
          <li>React Native Core Components</li>
          <li>Navigation (React Navigation)</li>
          <li>State Management (Context API / Redux)</li>
          <li>API Integration</li>
          <li>Responsive Mobile UI with Flexbox</li>
          <li>Expo CLI & Native Device Features</li>
        </ul>
      </div>

      <div className="mt-6">
        <span className="inline-block bg-blue-200 text-blue-900 px-3 py-1 rounded-full text-sm font-medium">
          📚 Currently Learning
        </span>
      </div>
    </div>
  );
};

export default AppProjectt;
