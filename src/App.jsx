import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router';
import RootLayout from './CommonLayout/RootLayout';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout></RootLayout>,
      children: [
        {
          path: '/',
          element: <h3>i am jakaria</h3>,
        },
      ],
    },
  ]);

  return (
    <>
      <div>
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
