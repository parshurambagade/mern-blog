import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
  useNavigate,
  Route, // Add this import statement
} from 'react-router-dom';
import HeroSection from './components/HeroSection.jsx';
import Explore from './pages/Explore.jsx';
import AddBlog from './pages/AddBlog.jsx';
import MyBlogs from './pages/MyBlogs.jsx';
import App from './App.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import BlogPost from './pages/BlogPost.jsx';
import { Provider } from 'react-redux';
import store from './redux/store.js';
import isAuthenticated from './hooks/useIsAuthenticated.js'; // Assuming you have defined this hook
import { createRoot } from 'react-dom/client';

const ProtectedRoute = ({ element, ...rest }) => {
  const isAuth = isAuthenticated();

  // If user is not authenticated, redirect to the login page
  if (!isAuth) {
    <Navigate to='/login' replace={true} />;
  }

  // If user is authenticated, render the protected route
  return <>{element}</>;
};


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <HeroSection />,
      },
      {
        path: '/explore',
        element: <Explore />,
      },
      {
        path: '/publish',
        element: <ProtectedRoute element={<AddBlog />} />,
      },
      {
        path: '/my-blogs',
        element: <ProtectedRoute element={<MyBlogs />} />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/blog/:id',
        element: <BlogPost />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
