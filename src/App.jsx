import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <div>Hello World</div>,
    },
    {
      path: '/about',
      element: <div>Hello about</div>,
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
