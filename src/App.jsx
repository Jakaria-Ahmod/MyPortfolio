import { createBrowserRouter, RouterProvider } from 'react-router';
import { ToastContainer } from 'react-toastify';
import './App.css';
import RootLayout from './CommonLayout/RootLayout';
import About from './page/About';
import Contact from './page/Contact';
import Futureprojects from './page/Futureprojects';
import HomePage from './page/Home';
import NotFound from './page/NotFound';
import Projects from './page/Projects';
import Services from './page/Services';
import Skills from './page/Skills';

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
        {
          path: '/futureprojects',
          element: <Futureprojects></Futureprojects>,
        },
        {
          path: '*',
          element: <NotFound></NotFound>,
        },
      ],
    },
  ]);

  return (
    <>
      <div>
        <ToastContainer></ToastContainer>
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
