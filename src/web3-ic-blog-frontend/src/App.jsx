import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import SinglePost from './pages/SinglePost';
import UserProfile from './pages/UserProfile';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/post/:id',
    element: <SinglePost />,
  },
  {
    path: '/user',
    element: <UserProfile />,
  },
]);

function App() {
  return (
    <>
      <Header />
      <main className='mt-10'>
        <RouterProvider router={router} />
      </main>
      <ToastContainer />
    </>
  );
}

export default App;
