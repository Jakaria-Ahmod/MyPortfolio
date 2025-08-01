import React from 'react';

const BackendProjectt = () => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        🚀 Backend Development
      </h2>

      <p className="text-gray-700 mb-4">
        I am currently learning backend development using{' '}
        <span className="font-semibold">Node.js, Express.js, MongoDB</span> and
        working on building real-world APIs.
      </p>

      <div className="text-left mt-4">
        <h3 className="text-lg font-semibold text-green-700 mb-2">
          🔧 Learning Topics:
        </h3>
        <ul className="list-disc pl-6 text-gray-800 space-y-1">
          <li>Node.js & Express Server Setup</li>
          <li>RESTful API Design</li>
          <li>MongoDB Database Integration</li>
          <li>User Authentication with JWT</li>
          <li>CRUD Operations</li>
          <li>Error Handling and Middleware</li>
        </ul>
      </div>

      <div className="mt-6">
        <span className="inline-block bg-yellow-300 text-yellow-900 px-3 py-1 rounded-full text-sm font-medium">
          📚 Currently Learning
        </span>
      </div>
    </div>
  );
};

export default BackendProjectt;
