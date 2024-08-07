import Dashboard from 'dashboard';
import { StudentProfile } from 'pages/student/student-profile';
import Students from 'pages/student/students';
import { createBrowserRouter, Link, Navigate, RouterProvider } from 'react-router-dom';

const UserAuth = ({ component }: { component: React.ReactNode }) => {
  const isUserLoggin = true;
  return isUserLoggin ? component : <Navigate to="/login" />
}

const Login = () => {
  return <h1>User Login</h1>;
};

const Course = () => {
  return (
    <>
      <Link to="/student">Student</Link>
      <h1>This is Courses page</h1>
    </>
  );
};

const Student = () => {
  return <h1>This is student page</h1>;
};

export const Main = () => {
  const routes = createBrowserRouter([
    {
      path: '/',
      Component: Dashboard,
      children: [
        {
          path: '/login',
          element: <Login />
        },
        {
          path: '/course',
          element: <UserAuth component={<Course />} />
        },
        {
          path: '/student',
          element: <UserAuth component={<Students />} />
        },
      ]
    },
    
    {
      path: '/students',
      element: <UserAuth component={<Students />} />,
      children: [
        {
          path: 'profile',
          element: <StudentProfile />,
        },
      ],
    },
  ]);
   
  return (
    <RouterProvider router={routes} />
  );
};
