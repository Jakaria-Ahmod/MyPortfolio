import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router';
import RootLayout from './CommonLayout/RootLayout';
import HomePage from './page/Home';
import About from './page/About';
import Skills from './page/Skills';
import Projects from './page/Projects';
import Contact from './page/Contact';
import Services from './page/Services';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout></RootLayout>,
      children: [
        {
          path: '/',
          element: <HomePage></HomePage>,
        },
        {
          path: '/about',
          element: <About></About>,
        },
        {
          path: '/skills',
          element: <Skills></Skills>,
        },
        {
          path: '/project',
          element: <Projects></Projects>,
        },
        {
          path: '/contact',
          element: <Contact></Contact>,
        },
        {
          path: '/service',
          element: <Services></Services>,
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
